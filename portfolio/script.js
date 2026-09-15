const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const copyButton = document.querySelector('.copy-email');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    const initialText = copyButton.textContent;
    copyButton.textContent = 'Email copied ✓';
    window.setTimeout(() => { copyButton.textContent = initialText; }, 1800);
  } catch {
    window.location.href = `mailto:${copyButton.dataset.email}`;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
