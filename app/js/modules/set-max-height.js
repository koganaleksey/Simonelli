function setMaxHeight (id) {
    setTimeout(function () {
        const slideParent = document.getElementById(id);
        const itemsHeight = slideParent.querySelectorAll('.section-slider-wrapper-item-block-elem__image');
        const titleHeight = slideParent.querySelectorAll('.section-slider-wrapper-item-block-elem__caption-title');
        const paragraphHeight = slideParent.querySelectorAll('.section-slider-wrapper-item-block-elem__caption-subtitle');
        const allItemsHeights = [];
        const allTitlehHeights = [];
        const allParapgraphHeights = [];

        // Функция возвращает массив с высотой всех элементов
        function pushHeightsArray (arr1, arr2) {

            // const items = slideParent.querySelectorAll('.section-slider-wrapper-item');

            //  items.forEach((item) => item.style.display = 'block'); // Показывает блоки чтобы вычислить высоту

            for (let i = 0; i < arr1.length; i++) {
                arr2.push(arr1[i].offsetHeight);
            }
            // items.forEach((item) => item.style.display = ''); // Скрывает ненужные блоки после вычисления высоты
            // items[0].style.display = 'none';
        }

        // Вызов функции для создания массивов со значением высоты
        pushHeightsArray(itemsHeight, allItemsHeights);
        pushHeightsArray(titleHeight, allTitlehHeights);
        pushHeightsArray(paragraphHeight, allParapgraphHeights);

        // Функция возвращает самый высокий элемент
        function getMaxElement (arr) {
            let maxElement = arr[0];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxElement) {
                    maxElement = arr[i];
                }
            }
            return maxElement;
        }

        // Назначение переменных максимальной высоты элемента
        // let maxItemHeight = getMaxElement(allItemsHeights),
        const maxTitleHeight = getMaxElement(allTitlehHeights);
        const maxParagraphHeight = getMaxElement(allParapgraphHeights);

        // Цикл для выравнивания высоты элементов к максимальной высоте
        for (let i = 0; i < itemsHeight.length; i++) {
            // itemsHeight[i].style.height = maxItemHeight + 'px';
            titleHeight[i].style.height = maxTitleHeight + 'px';
            paragraphHeight[i].style.height = maxParagraphHeight + 'px';
        }
    }, 300);
}

export default setMaxHeight;
