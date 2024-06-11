new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,
    autoplay: {
        delay: 10000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});