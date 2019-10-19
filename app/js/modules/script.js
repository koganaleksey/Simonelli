function carouselFn () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: false
            },
            600: {
                items: 2,
                nav: false,
                loop: false
            },
            979: {
                items: 3,
                nav: true,
                loop: false
            },
            1170: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
}

export default carouselFn;
