const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');
  const menuButton = document.getElementById('headerNavMenuIconContainer');
  const closeButton = document.getElementById('headerNavMenuCloseIconContainer');
  const linksMenu = document.querySelector('.header-nav__menu-link-list');
  // const links = document.querySelectorAll('.header-nav__menu-link');

  const openMenu = () => linksMenu.classList.add('header-nav__menu-link-list--open');
  const closeMenu = () => linksMenu.classList.remove('header-nav__menu-link-list--open');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);
  });

  linksMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  // links.forEach(element => element.addEventListener('click', closeMenu));
};

export default header;