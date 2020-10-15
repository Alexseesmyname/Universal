var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletClass: "slider-bullet",
    bulletActiveClass: "slider-bullet_active",
    type: 'bullets',
    clickable: true,
  },

})