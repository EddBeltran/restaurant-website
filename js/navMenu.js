const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__items');
const heroSection = document.querySelector('.hero');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

heroSection.addEventListener('click', ()=>{
    if (burger.classList.contains('active')){
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});