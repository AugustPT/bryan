(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- estimate form: demo stub, no delivery wiring ---- */
  var form = document.getElementById('estimate-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      success.focus({ preventScroll: true });
    });
  }

  /* ---- motion: skipped entirely under prefers-reduced-motion,
          and the page is fully readable if GSAP never loads ---- */
  if (reduced || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  /* hero load sequence */
  gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
    .from('.hero-photo', { autoAlpha: 0, x: 80, duration: 1.1 }, 0)
    .from('.hero .eyebrow', { y: 24, autoAlpha: 0 }, 0.1)
    .from('.hero h1 .line', { y: 44, autoAlpha: 0, stagger: 0.12 }, '-=0.45')
    .from('.hero-sub', { y: 24, autoAlpha: 0 }, '-=0.45')
    .from('.hero-ctas > *', { y: 18, autoAlpha: 0, stagger: 0.08 }, '-=0.45')
    .from('.marquee', { autoAlpha: 0 }, '-=0.3');

  /* services marquee — slow, endless */
  gsap.to('.marquee-track', { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });

  /* quiet, fast section reveals */
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.from(el, {
      y: 22,
      autoAlpha: 0,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* the 8-minute counter */
  var num = document.getElementById('reply-min');
  if (num) {
    num.textContent = '0';
    var state = { v: 0 };
    ScrollTrigger.create({
      trigger: '#eight-min',
      start: 'top 75%',
      once: true,
      onEnter: function () {
        gsap.to(state, {
          v: 8,
          duration: 1.2,
          ease: 'steps(8)',
          onUpdate: function () { num.textContent = Math.round(state.v); }
        });
      }
    });
  }

  /* fonts swapping in can shift layout — recalc trigger points */
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
