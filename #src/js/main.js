$(document).ready(function () {
    //==============Бургер меню=======================
    $('.header__burger').click(function (event) {
        $('.header__burger,.main-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.main__burger').click(function (event) {
        $('.main__burger,.main-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });


});



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        582.99: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: false,
        },
        991.99: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: false,
        },
        1196.99: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true,
        }
    },
});
