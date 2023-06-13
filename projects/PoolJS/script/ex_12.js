"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const $a = document.querySelector('a');

    const imageLink = $a.attributes.href.nodeValue;

    localStorage.setItem('ex12_img', imageLink);

    const image = localStorage.getItem('ex12_img');

    if (image) {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.setAttribute('width','100%');
        document.querySelector('footer div').appendChild(imgElement);
    }
});