"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const $button = document.querySelectorAll('button');
    const $select = document.querySelector('select');
    const $body = document.querySelector('body');

    let size = 16;
    $button[0].addEventListener('click', function () {
        size++;
        $body.setAttribute("style", `font-size : ${size}px`);
    });
    $button[1].addEventListener('click', function () {
        size--;
        $body.setAttribute("style", `font-size : ${size}px`);
    });

    $select.addEventListener('change', function () {
        if (!$select.value) {
            $select.value = '#bdc3c7';
        }
        $body.setAttribute("style", `background-color : ${$select.value}`);
    });
});
//Bonus : si aucune valeur sélectionnée alors Défaut est choisie