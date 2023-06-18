const header = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');
  const headerNavThemeIconContainer = document.getElementById('headerNavThemeIconContainer');
  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  });
  headerNavThemeIconContainer.addEventListener('click', () => {
    document.body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
    document.body.classList.contains('body--light') ? localStorage.setItem('darkMode', 'false') : localStorage.setItem('darkMode', 'true');
  })
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavMenuLinkList.addEventListener('click', e => e.target.tagName === 'A' && closeMenu());

  if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
    document.body.classList.remove('body--light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.body.classList.add('body--light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }
};

export default header;