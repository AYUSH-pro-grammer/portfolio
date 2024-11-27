
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




const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
