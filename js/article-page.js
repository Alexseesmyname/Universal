//Слайдер в статье
var mySwiper = new Swiper('.article-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.article-swiper__button_next',
    prevEl: '.article-swiper__button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//Показать еще комменты
const moreBtn = document.querySelector(".comment-button-more");
moreBtn.addEventListener("click", function(){
    let comment = document.querySelectorAll(".visitors-comments__inner_hidden");
    comment.forEach(function(item){
        item.classList.remove("visitors-comments__inner_hidden");
    });
});