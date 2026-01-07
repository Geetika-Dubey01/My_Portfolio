console.log("Portfolio Loaded with Animations ✨");

document.querySelectorAll('.skills span').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transition = '0.3s ease';
  });
});
