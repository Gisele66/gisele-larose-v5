/**
 * Gold cursor follower — desktop only, respects reduced motion.
 */
(function () {
  const LERP = 0.16;
  const HOVER_SELECTORS =
    'a, button, .btn, .project-card, .skill-card, .systems-panel, .step, .contact-card, .cta-band, .gallery-shot';

  function shouldDisable() {
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches
    );
  }

  function initCursorFollower() {
    if (shouldDisable()) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-follower';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = null;

    function tick() {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    function startLoop() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    document.addEventListener(
      'mousemove',
      (event) => {
        targetX = event.clientX;
        targetY = event.clientY;

        if (!dot.classList.contains('is-visible')) {
          dot.classList.add('is-visible');
          currentX = targetX;
          currentY = targetY;
        }

        startLoop();
      },
      { passive: true }
    );

    document.addEventListener('mouseover', (event) => {
      if (event.target.closest(HOVER_SELECTORS)) {
        dot.classList.add('is-hover');
      }
    });

    document.addEventListener('mouseout', (event) => {
      const from = event.target.closest(HOVER_SELECTORS);
      const to =
        event.relatedTarget && event.relatedTarget.closest
          ? event.relatedTarget.closest(HOVER_SELECTORS)
          : null;
      if (from && !to) {
        dot.classList.remove('is-hover');
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.classList.remove('is-visible', 'is-hover');
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    });

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (event) => {
      if (event.matches) {
        dot.remove();
        if (rafId) cancelAnimationFrame(rafId);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initCursorFollower);
})();
