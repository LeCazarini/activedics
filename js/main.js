/* ===========================
   Active Dics
   JS Principal (nav, utilitários)
   =========================== */

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');

  if (toggle && navUl) {
    toggle.addEventListener('click', function () {
      navUl.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navUl.classList.contains('open'));
    });

    // Fecha ao clicar em link
    navUl.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navUl.classList.remove('open');
      });
    });
  }

  // Marca link ativo
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
