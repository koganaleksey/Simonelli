import machines from './products/machines.js';
import coffeeMills from './products/coffeeMills.js';

function pushSlides (id, array) {

    const slideParent = document.getElementById(id);

    // Функция в создания слайдов по циклам
    function doSlides (arr) {

        let productCount = 0;
        const carousel = slideParent.querySelector('.owl-carousel');

        function itemContent (slide, i) {
            slide.querySelectorAll('img')[i].setAttribute('src', arr[productCount].img[0]);
            slide.querySelectorAll('.section-slider-wrapper-item-block-elem__caption-title')[i].innerHTML = arr[productCount].title;
            slide.querySelectorAll('.section-slider-wrapper-item-block-elem__caption-subtitle')[i].innerHTML = arr[productCount].subTitle;
            productCount++;
        }

        for (let i = 0; i < arr.length; i++) {
            const mainSlide = slideParent.querySelector('.section-slider-wrapper-item');
            carousel.appendChild(mainSlide.cloneNode(true));
            const slide = carousel.querySelectorAll('.section-slider-wrapper-item')[i];

            for (let i = 0; i < 1; i++) {
                slide.setAttribute('style', 'display: block');
                itemContent(slide, i);
            }
        }
    }
    doSlides(array);
    slideParent.querySelectorAll('.section-slider-wrapper-item')[0].remove(); // Удаляем пустой div
}

export default pushSlides;
