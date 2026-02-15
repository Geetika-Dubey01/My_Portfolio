console.log("Portfolio Loaded with Animations ✨");

document.querySelectorAll('.skills span').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transition = '0.3s ease';
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
