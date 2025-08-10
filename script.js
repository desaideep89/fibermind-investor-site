// Parallax scrolling for hero layers
(() => {
  const layers = document.querySelectorAll('[data-parallax]');
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        layers.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0;
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in reveal on scroll using Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-in', entry.isIntersecting);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});
