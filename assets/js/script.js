// AOS
AOS.init(); 
// END AOS 

// SWIPER
const swiperSection6 = new Swiper('.swiper-section-6', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, 
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  
});

//END SWIPER 
