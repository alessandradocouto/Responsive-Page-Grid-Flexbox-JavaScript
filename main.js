(function(){

    'use strict';

    const menuMobile = document.querySelector('#menu-mobile');

    function openMenuMobile(event){
        const nav = document.querySelector('.nav');
        nav.classList.toggle('show');
        if(show){
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu'); 
        }
        else{
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    menuMobile.addEventListener('click', openMenuMobile);

})();