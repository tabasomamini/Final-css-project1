const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //responsive breakpoints
 breakpoints :{

    0:{
        slidesperview:1
    },
    620:{
        slidesperview:2
    },
    1024:{
        slidesperview:3
    }
  }
  
  });