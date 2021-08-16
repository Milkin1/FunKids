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

const swiper = new Swiper('.our-services__swiper-container', {
    loop: true,
    pagination: {
        el: '.our-services__swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.our-services__swiper-button-next',
        prevEl: '.our-services__swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: -60,
        },
        // when window width is >= 640px
        993: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});
