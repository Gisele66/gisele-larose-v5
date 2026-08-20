/**
 * Motion layer — Lenis + GSAP (single ticker), magnetic buttons, gallery cycle.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  function initProgressBar() {
    if (document.querySelector('.progress-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);
    return bar;
  }

  function bindNativeProgress(bar) {
    if (!bar) return;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      bar.style.width = `${Math.min(1, Math.max(0, value)) * 100}%`;
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initMagnetic() {
    if (coarse || reduce) return;
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('mousemove', (event) => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  function initGalleryCycle() {
    if (reduce) return;
    document.querySelectorAll('[data-gallery-for]').forEach((row) => {
      const shots = [...row.querySelectorAll('.gallery-shot')];
      if (shots.length < 2) return;
      const card = row.closest('.project-card');
      let index = 0;
      setInterval(() => {
        if (row.matches(':hover')) return;
        index = (index + 1) % shots.length;
        shots.forEach((el) => el.classList.remove('is-active'));
        shots[index].classList.add('is-active');
        const next = shots[index].dataset.gallerySrc;
        const liveCycle = card?.querySelector('[data-cycle-image]');
        const hero = card?.querySelector('[data-hero-image]');
        if (liveCycle && typeof swipeProjectCycle === 'function') {
          swipeProjectCycle(liveCycle, next);
        } else if (liveCycle) {
          liveCycle.src = next;
        } else if (hero && !hero.hasAttribute('data-lock-hero')) {
          hero.src = next;
        }
      }, 4000);
    });
  }

  function initLenisGsap(progressBar) {
    if (reduce || typeof Lenis === 'undefined' || typeof gsap === 'undefined') {
      bindNativeProgress(progressBar);
      return;
    }

    const lenis = new Lenis({ lerp: 0.18 });

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
    }

    // One animation clock — Lenis + GSAP must not run separate RAF loops
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    if (progressBar) {
      lenis.on('scroll', ({ progress }) => {
        progressBar.style.width = `${Math.min(1, Math.max(0, progress)) * 100}%`;
      });
    }

    gsap.from('.hero-copy > *', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      clearProps: 'transform'
    });

    gsap.utils.toArray('.project-card, .step, .skill-card, .systems-panel').forEach((el) => {
      gsap.from(el, {
        autoAlpha: 0,
        y: 20,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        }
      });
    });
  }

  function initSystemsToggle() {
    const panels = document.querySelectorAll('.systems-panel');
    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        panels.forEach((p) => p.classList.remove('is-active'));
        panel.classList.add('is-active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const progressBar = initProgressBar();
    initMagnetic();
    initSystemsToggle();
    window.setTimeout(() => {
      initGalleryCycle();
      initLenisGsap(progressBar);
    }, 400);
  });
})();
