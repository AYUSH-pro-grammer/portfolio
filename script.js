
const hamburger = document.getElementById('navbar_mobile_hamburger');
const sidebar = document.getElementById('navbar_mobile_sidebar');
const overlay = document.getElementById('navbar_mobile_overlay');

hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  sidebar.classList.toggle('open', isActive);
  overlay.classList.toggle('show', isActive);
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});
