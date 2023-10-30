
function checkLogin() {
  const loginId = True;
  if (loginId) {
    document.getElementById(member).style.display = 'block';
    document.getElementById(member).style.display = 'none';
    document.getElementById(login).style.display = 'block';
    document.getElementById(register).style.display = 'block';
    document.getElementById(login).style.display = 'none';
    document.getElementById(register).style.display = 'none';
}
}


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

