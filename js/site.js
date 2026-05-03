// AVE-RD site script
// Two behaviors:
//   1. Make every <img> responsive (legacy markup ships fixed widths)
//   2. Show/hide the navbar on scroll-up vs scroll-down at >=1170px
// Honors prefers-reduced-motion: skips the scroll handler entirely.

(function () {
  // ----- Responsive images -----
  document.querySelectorAll('img').forEach(function (img) {
    img.classList.add('img-responsive');
  });

  // ----- Scroll-aware navbar (desktop only) -----
  var DESKTOP = 1170;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || window.innerWidth < DESKTOP) return;

  var nav = document.querySelector('.navbar-custom');
  if (!nav) return;

  var lastTop = 0;
  var ticking = false;
  var headerHeight = nav.offsetHeight;

  function update() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < lastTop) {
      // scrolling up
      if (top > 0 && nav.classList.contains('is-fixed')) {
        nav.classList.add('is-visible');
      } else {
        nav.classList.remove('is-visible', 'is-fixed');
      }
    } else {
      // scrolling down
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
