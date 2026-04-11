/**
 * FreakinFood Theme — Main JS
 */
(function () {
  'use strict';

  // Mobile menu toggle
  const menuToggle = document.querySelector('.ff-menu-toggle');
  const navList = document.querySelector('.ff-nav__list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.ff-header')) {
        navList.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
