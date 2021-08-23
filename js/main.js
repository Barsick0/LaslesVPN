$(document).ready(function(){
    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ]
        });

        let button = document.querySelector('.menu__btn');
        let menu = document.querySelector('.header__menu');
        
        button.onclick = function(){
            button.classList.toggle('btn--active');
            menu.classList.toggle('menu--active');
        }
});