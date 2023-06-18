const nav = () => {

    const navButton = document.querySelector(".nav-button");
    const navMenu = document.querySelector(".nav__menu");
    const navItem = document.querySelector(".nav__menu-item");

    navButton.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu-visible");
    });

    navMenu.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu-visible");
    });

};

export default nav;
