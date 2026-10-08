import { c as jsx, M as useEffect, D as useRef } from './vendor/react.D20wc1Tc.mjs';

export function StatCounter({ target }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let started = false;
    let startTime;
    const duration = 1600;
    element.textContent = '0';

    const finish = () => {
      cancelAnimationFrame(frame);
      element.textContent = String(target);
    };
    const tick = (time) => {
      startTime ??= time;
      const progress = Math.min(1, (time - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else finish();
    };
    // Start once when this number becomes visible, then run independently of scroll.
    const observer = new IntersectionObserver((entries) => {
      if (started || !entries.some(entry => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      if (reduced.matches) finish();
      else frame = requestAnimationFrame(tick);
    }, { threshold: 0 });
    observer.observe(element);
    const onMotionChange = () => {
      if (started && reduced.matches) finish();
    };
    reduced.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      reduced.removeEventListener('change', onMotionChange);
    };
  }, [target]);
  return jsx('span', { ref, className: 'tt-stat-counter', 'aria-hidden': true, children: String(target) });
}
