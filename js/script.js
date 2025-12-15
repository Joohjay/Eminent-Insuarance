document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('nav-links');
  const MOBILE_BREAKPOINT = 768;

  if (!btn || !menu) return;

  function openMenu() {
    btn.classList.add('active');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    btn.classList.remove('active');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      if (btn.getAttribute('aria-expanded') === 'true') closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // Reset state if screen is resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      closeMenu();
    }
  });
});
