const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeMenu = () => {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
};

menuButton?.addEventListener('click', () => {
  if (!mobileNav) return;
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !opening;
  if (opening) mobileNav.querySelector('a')?.focus({ preventScroll: true });
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('[data-year]').textContent = String(new Date().getFullYear());

const featureCarousel = document.querySelector('[data-feature-carousel]');
document.querySelectorAll('[data-carousel-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!featureCarousel) return;
    const card = featureCarousel.querySelector('.principle-card');
    const gap = Number.parseFloat(getComputedStyle(featureCarousel).gap) || 20;
    const distance = card ? card.getBoundingClientRect().width + gap : featureCarousel.clientWidth * .8;
    const direction = Number(button.dataset.carouselDirection) || 1;
    featureCarousel.scrollBy({ left: distance * direction, behavior: 'smooth' });
  });
});

const phoneDemo = document.querySelector('[data-phone-demo]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let phoneDemoFrame = 0;

const updatePhoneSpread = () => {
  phoneDemoFrame = 0;
  if (!phoneDemo) return;
  if (reduceMotion.matches) {
    phoneDemo.style.setProperty('--spread', '1');
    return;
  }
  const bounds = phoneDemo.getBoundingClientRect();
  const start = window.innerHeight * .76;
  const distance = Math.max(1, phoneDemo.offsetHeight - window.innerHeight * .34);
  const progress = Math.min(1, Math.max(0, (start - bounds.top) / distance));
  phoneDemo.style.setProperty('--spread', progress.toFixed(4));
};

const requestPhoneSpread = () => {
  if (phoneDemoFrame) return;
  phoneDemoFrame = window.requestAnimationFrame(updatePhoneSpread);
};

updatePhoneSpread();
window.addEventListener('scroll', requestPhoneSpread, { passive: true });
window.addEventListener('resize', requestPhoneSpread);
reduceMotion.addEventListener?.('change', requestPhoneSpread);
