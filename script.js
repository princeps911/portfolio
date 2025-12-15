
// 1. Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference, if any, on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // Sun icon for light mode
} else {
  darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
}

// Toggle dark mode when button is clicked
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button icon and save preference
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navUl = document.querySelector('nav ul');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });
}
