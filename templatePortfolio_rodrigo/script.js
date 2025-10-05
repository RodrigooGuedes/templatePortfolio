document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


  const video = document.querySelector('.bg-video');
  if (video) {
    let last = window.scrollY;
    window.addEventListener('scroll', () => {
      if (Math.abs(window.scrollY - last) > 2) {
        last = window.scrollY;
        requestAnimationFrame(() => {
          const offset = Math.min(window.scrollY * 0.02, 40);
          video.style.transform = `translateY(-${offset}px) scale(1.02)`;
        });
      }
    });
  }


  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
