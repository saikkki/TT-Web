// One reveal system for content text; navigation, counters and sticky tabs
// keep their own interaction behavior.
const selector = '.framer-OPdDt [data-framer-component-type="RichTextContainer"], .tt-mobile-video-title';
const excluded = '.framer-jdv0u8, .framer-19nmnbx, .framer-mmphhj, .framer-18esnft-container';
const seen = new WeakSet();
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const observer = new IntersectionObserver(entries => {
  for (const {target, isIntersecting} of entries) {
    if (!isIntersecting || !target.getClientRects().length) continue;
    target.classList.add('tt-text-visible');
    observer.unobserve(target);
  }
}, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
function scan() {
  document.querySelectorAll(selector).forEach(element => {
    if (seen.has(element) || element.closest(excluded)) return;
    seen.add(element);
    const group = element.closest('.framer-1rdtfje, .framer-7gqbi7, .framer-nb5b7x, .framer-194u3w0, .framer-r58ck0, .framer-18qhzj5, .framer-98tknn, .framer-7dzp1r, .framer-gu65wy');
    const siblings = group ? [...group.querySelectorAll(selector)].filter(e => e.getClientRects().length) : [];
    element.style.setProperty('--tt-reveal-delay', `${Math.max(0, Math.min(siblings.indexOf(element), 2)) * 60}ms`);
    element.classList.add('tt-text-reveal');
    if (reduced.matches) element.classList.add('tt-text-visible');
    else observer.observe(element);
  });
}
scan();
// Framer replaces SSR variants when hydrating or crossing breakpoints.
new MutationObserver(scan).observe(document.getElementById('main'), {childList:true, subtree:true});
reduced.addEventListener('change', () => {
  if (reduced.matches) {
    observer.disconnect();
    document.querySelectorAll('.tt-text-reveal').forEach(e => e.classList.add('tt-text-visible'));
  }
});
