function setNavigation() {
     let current_location = location.pathname.split('/')[1];
     if (current_location === "") return;
     let menu_items = document.querySelector(".nav-bar").getElementsByTagName("a");
     for (let i = 0, len = menu_items.length; i < len; i++) {
          if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
               menu_items[i].className = "active-href";
          }
     }
}
setNavigation();


(function () {
     let burger = document.querySelector('.header .nav-bar .header__mobile-bar .burger-menu');
     let mobileMenu = document.querySelector('.header .mobile-navigation');
     let closeBurger = document.querySelector('.header .mobile-navigation .top__line .close')

     burger.addEventListener('click', function () {

               anime({
                    targets: mobileMenu,
                    translateX:  ['100%','0'],
                    duration: 500,
                    easing: 'easeInQuad'
               });

     });

     closeBurger.addEventListener('click', function () {
          anime({
               targets: mobileMenu,
               translateX:  ['0','100%'],
               duration: 500,
               easing: 'easeInQuad'
          });
     });



})();

(function (){
     let images = document.getElementsByTagName('img');
     for (let i = 0; i < images.length; i++) {
          let src = images[i].dataset.src;
          if (src) {
               images[i].src = src;
          }
     }
})();

