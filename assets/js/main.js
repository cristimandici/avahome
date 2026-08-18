// AvaHome — interacțiuni de bază

// Meniu mobil
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Animație de apariție la scroll
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// Formularul de contact nu are încă backend — confirmare locală
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Thank you! We will be in touch soon.';
    btn.disabled = true;
    form.reset();
  });
}

// Lightbox pentru galerii
const galleryImgs = Array.from(document.querySelectorAll('.gallery-lightbox img'));

if (galleryImgs.length) {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous image">&#8249;</button>' +
    '<button class="lb-next" aria-label="Next image">&#8250;</button>' +
    '<img alt="">';
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  let current = 0;

  function show(i) {
    current = (i + galleryImgs.length) % galleryImgs.length;
    lbImg.src = galleryImgs[current].src;
    lbImg.alt = galleryImgs[current].alt;
  }

  galleryImgs.forEach((img, i) => {
    img.addEventListener('click', () => {
      show(i);
      lb.classList.add('open');
    });
  });

  lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
  lb.querySelector('.lb-prev').addEventListener('click', (e) => { e.stopPropagation(); show(current - 1); });
  lb.querySelector('.lb-next').addEventListener('click', (e) => { e.stopPropagation(); show(current + 1); });

  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target === lbImg) lb.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}
