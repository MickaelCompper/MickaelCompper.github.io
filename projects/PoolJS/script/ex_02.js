"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const $box = this.querySelector('footer div');

    let clic = 0;
    $box.textContent = clic;

    $box.addEventListener('click', function () {
        clic++;
        $box.textContent = clic;
    });
});