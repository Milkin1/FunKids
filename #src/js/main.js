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


// //window.scrollTo(x,y)
// var scrolled;
// var timer;

// document.getElementById('scroll').onclick = function () {
//     scrolled = window.pageYOffset;
//     //window.scrollTo(0,0);
//     scrollToTop();
// }
// function scrollToTop() {
//     if (scrolled > 0) {
//         window.scrollTo(0, scrolled);
//         scrolled = scrolled - 300; //100 - скорость прокрутки
//         timer = setTimeout(scrollToTop, 30);
//     }
//     else {
//         clearTimeout(timer);
//         window.scrollTo(0, 0);
//     }
// }
// window.onscroll = function () { scrollFunction() }
// function scrollFunction() {
//     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//         document.getElementById("scroll").style.opacity = 1
//     }
//     else {
//         document.getElementById("scroll").style.opacity = 0
//     }
// }



var scrollToTopBtn = document.querySelector(".scroll")
var rootElement = document.documentElement

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.20) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
