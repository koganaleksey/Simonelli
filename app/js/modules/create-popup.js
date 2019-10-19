import machines from './products/machines.js';
import coffeeMills from './products/coffeeMills.js';

function createPopup (id, arr) {
    setTimeout(function () {
        const sliderSection = document.getElementById(id);
        const popup = document.querySelector('.section-popup');
        const btnMore = sliderSection.querySelectorAll('.btn-more');
        const itemPhoto = sliderSection.querySelectorAll('.item-photo-link');

        for (let i = 0; i < arr.length; i++) {
            sliderSection.appendChild(popup.cloneNode(true));
            const popupNum = sliderSection.querySelectorAll('.popup');

            if (sliderSection === document.getElementById('slider1') && arr === machines) {
                popupNum[i].setAttribute('id', 'popup_' + [i]);
                btnMore[i].setAttribute('href', '#popup_' + [i]);
                itemPhoto[i].setAttribute('href', '#popup_' + [i]);
            }

            if (sliderSection === document.getElementById('slider2') && arr === coffeeMills) {
                popupNum[i].setAttribute('id', 'popup__' + [i]);
                btnMore[i].setAttribute('href', '#popup__' + [i]);
                itemPhoto[i].setAttribute('href', '#popup__' + [i]);
            }

            if (sliderSection === document.getElementById('slider3')) {
                popupNum[i].setAttribute('id', 'popup___' + [i]);
                btnMore[i].setAttribute('href', '#popup___' + [i]);
                itemPhoto[i].setAttribute('href', '#popup___' + [i]);
            }
            popupNum[i].querySelector('img').setAttribute('src', arr[i].img[0]);
            popupNum[i].querySelector('h2').innerHTML = arr[i].title;
            popupNum[i].querySelector('h3').innerHTML = arr[i].subTitle;
            popupNum[i].querySelector('.description').innerHTML = arr[i].description;
            popupNum[i].querySelector('.brochure-link').setAttribute('href', arr[i].brochure);
            const closeBtn = popupNum[i].querySelector('.popup__close');
            const popups = sliderSection.querySelectorAll('.section-popup');

            closeBtn.onclick = function () {
                popups[i].classList.remove('show');
                popups[i].classList.add('hide');
            };

            document.onkeydown = function (e) {
                if (e.keyCode == 27) {
                    popups[i].classList.remove('show');
                    popups[i].classList.add('hide');
                }
            };

            btnMore[i].onclick = function () {
                popups[i].classList.remove('hide');
                popups[i].classList.add('show');
            };
        }
        // document.querySelectorAll('.section-popup')[0].remove();
    }, 500);
}

export default createPopup;
