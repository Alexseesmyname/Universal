$(document).ready(function () {

//Смена цвета закладки
const mark = document.querySelector(".bookmark");
mark.addEventListener("click", function(){
  mark.classList.toggle("bookmark_active");
});

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

//Валидация
$(".footer-top__form").validate({
    messages: {
    email: {
      required: "Пожалуйста, введите ваш email",
      email: "Ваш email должен быть в формате name@domain.com"
    },
  }

});
$(".review__form").validate({
    messages: {
        message: {
            required: "Пожалуйста, напишите сообщение",
            minlength: "Ваше сообщение должно быть не короче 100 символов"
    },
    }
});
$(".review__form").on("DOMNodeInserted", function(){
    $("#message-error").addClass("message-error");
});

//Мобильное меню
const mobileBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu")
mobileBtn.addEventListener("click", function(){
  menu.classList.toggle("menu_active");
});
});