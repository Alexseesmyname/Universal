const marks = document.querySelectorAll("#bookmark");
for(let mark of marks){
  mark.addEventListener("click", function(event){
    mark.classList.toggle("item__icon_active");
  })
};

var mySwiper = new Swiper('.swiper-slider__container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletClass: "slider-bullet",
    bulletActiveClass: "slider-bullet_active",
    type: 'bullets',
    clickable: true,
  },

})