const closeModal = document.querySelector(".modal__content__close");
const openModal = document.getElementById("btn-open-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener('click', ()=>{
    modal.style.display = "block";
});

closeModal.addEventListener('click', ()=>{
    modal.style.display = "none";
});

