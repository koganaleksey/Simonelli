import machines from './products/machines.js';
import coffeeMills from './products/coffeeMills.js';
import carouselFn from './script.js';
import pushSlides from './push-slides.js';
import setMaxHeight from './set-max-height.js';
import createPopup from './create-popup.js';
import fillPopup from './fill_popup.js';
import hovers from './hovers.js';
import tabs from './tabs.js';

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    pushSlides('slider1', machines);
    pushSlides('slider2', coffeeMills);

    setMaxHeight('slider1');
    setMaxHeight('slider2');
    setMaxHeight('slider3');

    createPopup('slider1', machines);
    createPopup('slider2', coffeeMills);

    fillPopup('slider1', machines);
    fillPopup('slider2', coffeeMills);

    hovers('slider1');
    hovers('slider2');

    tabs();

    carouselFn();
});

$(window).resize(function () {
    carouselFn();
});
