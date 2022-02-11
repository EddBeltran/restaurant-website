const buttons = document.querySelectorAll('.menu-category');
const btnContainer = document.getElementById('myBtnContainer')
const cards = document.querySelectorAll('.menu__container-card');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttons.forEach((element) => {
            element.classList.remove("active");
        });
        button.classList.add('active');
        const btnCategory = button.getAttribute('data-category');
        
        cards.forEach((card)=>{
            const cardCategory = card.getAttribute('data-category');
            if (btnCategory == cardCategory) {
                card.classList.add('show');
            }else {
                card.classList.remove('show');
            }
        });
    });
});
