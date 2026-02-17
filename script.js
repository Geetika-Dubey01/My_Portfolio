console.log("Portfolio Loaded with Animations ✨");

document.querySelectorAll('.skills span').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transition = '0.3s ease';
  });
});

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Hamburger toggle
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");

  // Optional: Close menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!navLinks.contains(event.target) && !event.target.closest(".hamburger")) {
      navLinks.classList.remove("active");
    }
  });
}

// ===============================
// Make Project Cards Clickable
// ===============================
    document.addEventListener('DOMContentLoaded', () => {
  // Make Project Cards Clickable
  document.querySelectorAll('.projects .card').forEach(card => {
    const link = card.getAttribute('data-link');
    if (link) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.open(link, '_blank'); // opens project in new tab
      });
    }
  });
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

