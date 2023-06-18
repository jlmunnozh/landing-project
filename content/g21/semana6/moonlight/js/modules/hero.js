const hero = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroLearnButton = document.querySelector('.hero__learn-button');
  const heroStarts = document.querySelector('.hero__stars-image-container');
  const heroMoon = document.querySelector('.hero__moon-image-container');
  const heroMountainsBehind = document.querySelector('.hero__mountains-behind-image-container');
  const heroMountainsFront = document.querySelector('.hero__mountains-front-image-container');

  window.addEventListener('scroll', () => {
    heroTitle.style.transform = `translate(-${scrollY * 1.25}px, ${scrollY * 0.25}px)`;
    heroLearnButton.style.transform = `translate(-50%, ${scrollY * 0.25}px)`;
    heroStarts.style.transform = `translate(0, -${scrollY * 0.15}px)`;
    heroMoon.style.top = `-${scrollY * 0.5}px)`;
    heroMountainsBehind.style.transform = `translate(0, ${scrollY * 0.20}px)`;
    heroMountainsFront.style.transform = `translate(0, ${scrollY * 0.25}px)`;
  });
};

export default hero;