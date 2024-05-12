document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  let goingToScrollTo = 1;
  const scrollButton = document.getElementById('scrollButton');

  scrollButton.addEventListener('click', () => {
    const targetSection = sections[goingToScrollTo];
    const targetPosition = targetSection.offsetTop - 20; // 20px above the section

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    if (goingToScrollTo === sections.length - 1) {
      scrollButton.textContent = '↑';
      goingToScrollTo = 0;
    } else {
      scrollButton.textContent = '↓';
      goingToScrollTo++;
    }
  });
});