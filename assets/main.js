document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }
});
