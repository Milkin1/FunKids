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



function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();