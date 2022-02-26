var swiperFeedback = new Swiper(".feedback", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //autoplay: {
    //  delay: 3500,
    //  disableOnInteraction: false,
    //},
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
});


const btnFeedback = document.querySelectorAll('.modal__content__emojis__button');
const btnPublish = document.getElementById('publish');
const inputName = document.getElementById('input-name');
const textareaFeedback = document.getElementById('textarea-feedback');
const modalBox = document.querySelector(".modal");
const pWarning = document.getElementById('p-warning');




let emoji = "feliz";
btnFeedback.forEach((button) => {
    button.addEventListener('click', ()=>{
      clearEmojiStatus();
      button.classList.add('active');     
        emoji = button.id;
    });
});

function clearEmojiStatus(){
  btnFeedback.forEach((element) => {
    element.classList.remove("active");
  });
}

btnPublish.addEventListener('click', ()=>{
  if (textareaFeedback.value.length > 0 && inputName.value.length > 0){
    var input = document.createElement("blockquote");
    input.className = 'swiper-slide feedback__slide';
    input.innerHTML = (
        '<div class="feedback__slide__quote">' + textareaFeedback.value + '</div>'
        + '<div class="feedback__slide__footer">'
            +'<p>'+ inputName.value+'</p>'
            +`<img src="images`+'/'+`cara_`+emoji+`.svg"/>`
        +'</div>'
    );
    swiperFeedback.addSlide(1, input);
    swiperFeedback.slideTo(2, 500, true);
    modalBox.style.display = "none";
    pWarning.style.display = 'none';
    textareaFeedback.value = '';
    inputName.value = '';
    clearEmojiStatus();
    
  } else {
    pWarning.style.display = 'block';
  }
});


