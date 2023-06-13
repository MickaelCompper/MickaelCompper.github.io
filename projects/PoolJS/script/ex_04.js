"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const $box = this.querySelector('footer div');

    let press = '';

    document.addEventListener('keydown', function (e) {
        
        if (press.length > 41) {
            $box.textContent = '';
            press = press.slice(1);
        }
        press += `${e.key}`;
        $box.textContent = press;
    });
});