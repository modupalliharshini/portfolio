
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const navItems = document.querySelectorAll('.nav-links a');

// Toggle menu
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navLinks.classList.toggle('active');
// });

// Close menu on nav item click + smooth scroll
// navItems.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href');
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Close menu after clicking link
//     hamburger.classList.remove('active');
//     navLinks.classList.remove('active');
//   });
// });
