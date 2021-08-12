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