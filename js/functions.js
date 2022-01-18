const toggleMobileMenu = () => {
    const menuToggle = document.querySelector('.gf-header__menu-toggle');
    const body = document.querySelector('body');
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('gf-header__menu-open');
    });
}

const toggleDropDown = () => {
    const dropDownToggle = document.querySelectorAll('.gf_nav-bar__dropdown');
    dropDownToggle.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('gf_nav-bar__dropdown__open');
        });
    });

}

const mobileFunctions = () => {
    const maxWidth = window.matchMedia('(max-width: 768px)');
    if (maxWidth.matches) {
        toggleMobileMenu();
        toggleDropDown();
    }
}

(() => {
    //mobileFunctions();
})();