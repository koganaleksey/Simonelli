function fillPopup (id, arr) {
    setTimeout(function () {
        const sliderSection = document.getElementById(id);

        for (let count = 0; count < arr.length; count++) {
            const popupPhotoStyles = sliderSection.querySelectorAll('.popup-photo-styles')[count];
            const popupPhotoStylesItem = popupPhotoStyles.querySelector('.popup-photo-styles-item');

            for (let i = 0; i < arr[count].img.length; i++) {
                popupPhotoStylesItem.querySelector('img').setAttribute('src', arr[count].img[i]);
                popupPhotoStyles.appendChild(popupPhotoStylesItem.cloneNode(true));
            }
            popupPhotoStylesItem.remove();
        }
    }, 750);
}

export default fillPopup;
