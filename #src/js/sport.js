const link = document.querySelector('.header__list_dropdown');
const svg = link.querySelector('svg');
const dropmenu = document.querySelector('.dropdown__menu');


function arrowToggler() {
    link.addEventListener('click', (event)=> {
        event.preventDefault()
        svg.classList.toggle('up');
        dropmenu.classList.toggle('hide');

    });
}

arrowToggler();

const burgerBtn = document.querySelector('.header__nav_burger');
const burgerMenu = document.querySelector('.header__nav_burger_menu');
const burgerClose = document.querySelector('.burger_close');

burgerBtn.addEventListener('click', ()=> {
    burgerMenu.style.transform = 'translateX(0)';
});
burgerClose.addEventListener('click', ()=> {
    burgerMenu.style.transform = 'translateX(100%)';
});