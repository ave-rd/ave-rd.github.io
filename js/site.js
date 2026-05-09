// AVE-RD site script
// Three behaviors:
//   1. Make every <img> responsive (legacy markup ships fixed widths)
//   2. Reveal-on-scroll for elements with .reveal
//   3. Show/hide the navbar on scroll-up vs scroll-down at >=1170px
// Honors prefers-reduced-motion: skips the scroll handler and reveals
// elements immediately.

(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- Responsive images -----
  document.querySelectorAll('img').forEach(function (img) {
    img.classList.add('img-responsive');
  });

  // ----- Lazy YouTube embed -----
  // Click on a .video-card__media swaps the thumbnail for a real iframe.
  // Saves third-party JS / cookies until the user actually wants the video.
  document.querySelectorAll('.video-card__media[data-video-id]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', btn.getAttribute('aria-label') || 'YouTube video');
      btn.innerHTML = '';
      btn.appendChild(iframe);
      // Replace the button with a div now that there's no thumbnail to click.
      btn.style.cursor = 'default';
    });
  });

  // ----- Reveal-on-scroll -----
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  // ----- Scroll-aware navbar (desktop only) -----
  var DESKTOP = 1170;
  if (reduce || window.innerWidth < DESKTOP) return;

  var nav = document.querySelector('.navbar-custom');
  if (!nav) return;

  var lastTop = 0;
  var ticking = false;
  var headerHeight = nav.offsetHeight;

  function update() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < lastTop) {
      if (top > 0 && nav.classList.contains('is-fixed')) {
        nav.classList.add('is-visible');
      } else {
        nav.classList.remove('is-visible', 'is-fixed');
      }
    } else {
      nav.classList.remove('is-visible');
      if (top > headerHeight && !nav.classList.contains('is-fixed')) {
        nav.classList.add('is-fixed');
      }
    }
    lastTop = top;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    headerHeight = nav.offsetHeight;
  });
})();

// ============================================================
// Self-managed signature form
// ------------------------------------------------------------
// On submit, build a structured body string from the form fields
// and either open a pre-filled mailto: or a pre-filled GitHub
// Issue. No backend, no third party.
// ============================================================
(function () {
  var forms = document.querySelectorAll('.sign-form__body');
  if (!forms.length) return;

  function val(form, name) {
    var el = form.querySelector('[name="' + name + '"]');
    if (!el) return '';
    if (el.type === 'radio' || el.type === 'checkbox') {
      var checked = form.querySelector('[name="' + name + '"]:checked');
      return checked ? checked.value : '';
    }
    return (el.value || '').trim();
  }

  function buildBody(form, opts) {
    var lang = form.getAttribute('data-lang') || 'en';
    var campaign = form.getAttribute('data-campaign');
    var lines = [];
    var L = lang === 'es'
      ? { name: 'Nombre', role: 'Rol', inst: 'Institución', country: 'País', tier: 'Categoría', stmt: 'Mensaje', email: 'Correo', consent: 'Consentimiento', campaign: 'Campaña', note: 'Esta firma fue generada por el formulario en el sitio AVE-RD. El equipo verificará la identidad del firmante antes de publicar.' }
      : { name: 'Name', role: 'Role', inst: 'Institution', country: 'Country', tier: 'Tier', stmt: 'Statement', email: 'Email', consent: 'Consent to verify', campaign: 'Campaign', note: 'This signature was submitted via the AVE-RD site sign-up form. The project team will verify the signatory before publishing.' };

    lines.push(L.campaign + ': ' + campaign);
    lines.push(L.name + ': ' + val(form, 'name'));
    lines.push(L.role + ': ' + val(form, 'role'));
    lines.push(L.inst + ': ' + val(form, 'institution'));
    lines.push(L.country + ': ' + val(form, 'country'));
    lines.push(L.tier + ': ' + val(form, 'tier'));
    lines.push(L.stmt + ': ' + val(form, 'statement'));
    lines.push(L.email + ': ' + val(form, 'email'));
    lines.push(L.consent + ': ' + (val(form, 'consent') ? 'yes' : 'no'));
    lines.push('');
    lines.push('---');
    lines.push(L.note);
    return lines.join('\n');
  }

  function buildSubject(form) {
    var lang = form.getAttribute('data-lang') || 'en';
    var name = val(form, 'name');
    var inst = val(form, 'institution');
    var who = inst ? (name + ', ' + inst) : name;
    var prefix = lang === 'es' ? 'Firma AVE-RD' : 'AVE-RD signature';
    var campaign = form.getAttribute('data-campaign');
    return prefix + ' (' + campaign + '): ' + (who || '[unnamed]');
  }

  function validate(form) {
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (el) {
      var bad = false;
      if (el.type === 'radio') {
        bad = !form.querySelector('[name="' + el.name + '"]:checked');
      } else if (el.type === 'checkbox') {
        bad = !el.checked;
      } else {
        bad = !el.value || !el.value.trim();
      }
      if (bad) {
        el.closest('.sign-form__field, .sign-form__consent, .sign-form__tier').classList.add('sign-form__field--error');
        ok = false;
      } else {
        el.closest('.sign-form__field, .sign-form__consent, .sign-form__tier').classList.remove('sign-form__field--error');
      }
    });
    var emailEl = form.querySelector('[name="email"]');
    if (emailEl && emailEl.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailEl.value)) {
      emailEl.closest('.sign-form__field').classList.add('sign-form__field--error');
      ok = false;
    }
    return ok;
  }

  // Spam guards: honeypot field + minimum time-on-page before submit.
  // A bot that fires within 3s of page load, or that fills the
  // honeypot field, gets silently no-op'd. Real users see no
  // friction — no captcha, no extra clicks.
  var MIN_DWELL_MS = 3000;

  function isLikelyBot(form, loadedAt) {
    var trap = form.querySelector('[name="website"]');
    if (trap && trap.value && trap.value.trim() !== '') return true;
    if (Date.now() - loadedAt < MIN_DWELL_MS) return true;
    return false;
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        ok ? resolve() : reject(new Error('execCommand failed'));
      } catch (e) { reject(e); }
    });
  }

  forms.forEach(function (form) {
    var loadedAt = Date.now();

    // Live character counter on the statement textarea.
    var stmt = form.querySelector('[name="statement"]');
    if (stmt) {
      var counter = document.getElementById(stmt.getAttribute('data-counter'));
      var max = parseInt(stmt.getAttribute('maxlength'), 10) || 280;
      var lang = form.getAttribute('data-lang') || 'en';
      var label = lang === 'es' ? 'caracteres restantes' : 'characters left';
      function update() {
        if (!counter) return;
        var remaining = max - (stmt.value || '').length;
        counter.innerHTML = '<span class="font-osf">' + remaining + '</span> ' + label;
      }
      stmt.addEventListener('input', update);
      update();
    }

    var copiedBanner = document.getElementById(form.id + '-copied');

    form.querySelectorAll('.sign-form__submit').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!validate(form)) return;
        if (isLikelyBot(form, loadedAt)) return;
        var body = buildBody(form);
        var subject = buildSubject(form);
        var action = btn.getAttribute('data-action');
        var url;
        if (action === 'email') {
          var to = form.getAttribute('data-recipient');
          url = 'mailto:' + encodeURIComponent(to) +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
          window.location.href = url;
        } else if (action === 'github') {
          var repo = form.getAttribute('data-repo');
          var labels = form.getAttribute('data-labels') || 'signature';
          url = 'https://github.com/' + repo + '/issues/new' +
                '?labels=' + encodeURIComponent(labels) +
                '&title=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
          window.open(url, '_blank', 'noopener');
        } else if (action === 'copy') {
          var clip = subject + '\n\n' + body;
          copyToClipboard(clip).then(function () {
            if (copiedBanner) {
              copiedBanner.hidden = false;
              setTimeout(function () { copiedBanner.hidden = true; }, 6000);
            }
          }).catch(function () {
            // Fallback: tell the user to copy by hand.
            var to = form.getAttribute('data-recipient');
            window.prompt(
              form.getAttribute('data-lang') === 'es'
                ? 'Copie este mensaje y envíelo a ' + to
                : 'Copy this and send it to ' + to,
              clip
            );
          });
        }
      });
    });
  });
})();
