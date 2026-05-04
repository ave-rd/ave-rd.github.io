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
