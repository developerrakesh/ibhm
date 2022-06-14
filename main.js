const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 35
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});