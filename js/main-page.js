$(document).ready(function () {
  
//Тапы
const tapButtons = document.querySelectorAll(".tap");
const tapItems = document.querySelectorAll(".header-item");

tapButtons.forEach(function(tap){
  tap.addEventListener("click", function(){
    let tapId = tap.getAttribute("data-tap");
    let activeTap = document.querySelector(tapId);

    if( ! tap.classList.contains("tap_active") ) {
      tapButtons.forEach(function(tap){
        tap.classList.remove("tap_active");
      });
      tapItems.forEach(function(tapItem){
        tapItem.classList.remove("header-item_active");
      });
  
      tap.classList.add("tap_active");
      activeTap.classList.add("header-item_active");

    };

  });
});
document.querySelector(".tap").click();

//Смена цвета у закладок
const marks = document.querySelectorAll(".bookmark");
for(let mark of marks){
  mark.addEventListener("click", function(event){
    mark.classList.toggle("item__icon_active");
  })
};

//Слайдер в мейне
var mySwiper = new Swiper('.swiper-slider__container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    bulletClass: "slider-bullet",
    bulletActiveClass: "slider-bullet_active",
    type: 'bullets',
    clickable: true,
  },

});

//Валидация
$(".footer-top__form").validate({
    messages: {
    email: {
      required: "Пожалуйста, введите ваш email",
      email: "Ваш email должен быть в формате name@domain.com"
    }
  }

});

});