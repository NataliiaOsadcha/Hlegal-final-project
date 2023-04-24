(function() {
    const headerBurgerOpen = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__nav');
    const headerBurgerClose = document.querySelector('.header__nav-close');

    headerBurgerOpen.addEventListener('click', event => {
        headerNavigation.classList.add('active')
    })
    headerBurgerClose.addEventListener('click', event => {
        headerNavigation.classList.remove('active')
    })
})();


// (function() {
//   const formPopupClose = document.querySelector('.form__popup-close');

//   formPopupClose.addEventListener('click', event => {
//       headerNavigation.classList.remove('active')
//   })
// })();


(function(){
    const tabItems = document.querySelectorAll ('.experience__tab-link');
    const tabContent = document.querySelectorAll ('.experience__content-item');

    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
        event.preventDefault();

        tabContent.forEach(content => {
            content.classList.remove('active')
        });
        tabItems.forEach(content => {
            content.classList.remove('active')
        });
        tabContent[index].classList.add('active')
        tabItems[index].classList.add('active')


    })
})
})();


const swiper = new Swiper('.swiper', { 
  loop: true,
  spaceBetween: 30,
  grabCursor:true,
//   effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper2', { 
  loop: true,
  spaceBetween: 60,
  grabCursor:true,
//   effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});


