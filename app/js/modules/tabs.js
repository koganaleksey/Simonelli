function tabs () {
    function initTabs (tabLink, tabParent, tabContent) {
        const x = document.querySelectorAll(tabLink);
        const y = document.querySelector(tabParent);
        const z = document.querySelectorAll(tabContent);

        // Ostavlyaem 1 tab na stranice, ostalnyye skryvaem
        function hideTabContent (a) {
            for (let i = a; i < z.length; i++) {
                z[i].classList.remove('show');
                z[i].classList.add('hide');
            }
        }
        hideTabContent(1);
        // ------------------------------------------------

        // Stavim usloviye - esli hide to show
        function showTabContent (b) {
            if (z[b].classList.contains('hide')) {
                z[b].classList.remove('hide');
                z[b].classList.add('show');
            }
        }
        // ------------------------------------------------

        // Delegirovaniye. Ukazyvaem kakoy tab otkryvat' po chelchku, sravnivaem nomer knopki i taba
        y.addEventListener('click', function (event) {
            const target = event.target;
            for (let i = 0; i < x.length; i++) {
                if (target === x[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        });
    }
    // -----------------------------------------------------

    // Initializaciya funksii
    initTabs('.section-optional-wrapper-header__tab', '.section-optional-wrapper-header', '.section-optional-wrapper-content__text');
    // -----------------------------------------------------
}

export default tabs;
