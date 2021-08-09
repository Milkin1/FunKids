$(document).ready(function () {
    //==============Бургер меню=======================
    $('.header__burger').click(function (event) {
        $('.header__burger,.main-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    //======Move html class into another one and back when window resize to mobile=============
    //======Перемешиваем одн html класс внутри другого и обратно когда размер экрана меняется=======
    $(window).on('resize', function () {
        let win = $(this); //this = window 
        if (win.width() <= 750) {
            $('.main-navigation').append($('.main-header__widget'));
        } else if (win.width() >= 750) {
            $('.main-header').append($('.main-header__widget'));
        }
    })
});