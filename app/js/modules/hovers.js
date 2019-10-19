function hovers (id) {
    setTimeout(function () {
        const sliderSection = document.getElementById(id);
        const popups = sliderSection.querySelectorAll('.section-popup');

        for (let i = 0; i < popups.length; i++) {
            const items = popups[i].querySelectorAll('.popup-photo-styles-item-img');

            items.forEach((item) => {
                item.onmouseenter = function () {
                    const src = item.getAttribute('src');
                    popups[i].querySelector('.main-image').setAttribute('src', src);
                };
            });
        }
    }, 1000);
}

export default hovers;
