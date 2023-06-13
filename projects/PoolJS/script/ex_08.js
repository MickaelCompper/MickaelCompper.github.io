"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const $canvas = document.querySelectorAll('canvas');

    let i = 0;

    $canvas.forEach(element => {
        element.setAttribute('id',`a${i++}`);
    });

    overlay();
    couleurs();
});

function couleurs() {

    //orange
    a0.setAttribute('style', 'background-color: orange');
    a2.setAttribute('style', 'background-color: orange');
    a3.setAttribute('style', 'background-color: orange');

    //purple
    a4.setAttribute('style', 'background-color: purple');
    a5.setAttribute('style', 'background-color: purple');

    //black
    a7.setAttribute('style', 'background-color: black');

    //green
    a9.setAttribute('style', 'background-color: olive');
    a10.setAttribute('style', 'background-color: olive');
}

function overlay() {

    const $overlay = document.createElement('div');
    const $liens = document.querySelector('a');
    const pos = $liens.getBoundingClientRect();

    $overlay.style.position = 'fixed';
    $overlay.style.top = 0;
    $overlay.style.left = 0;
    $overlay.style.width = '100%';
    $overlay.style.height = pos.top + 'px';
    $overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    document.body.appendChild($overlay);
}