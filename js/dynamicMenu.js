const buttons = document.querySelectorAll('.menu-category');
const cards = document.querySelectorAll('.menu__container-card');

buttons.forEach((button) => {
    if (button.classList.contains('active')){
        console.log("bro")
        button.classList.remove('active')
    }
    button.addEventListener('click', (e) => {
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
