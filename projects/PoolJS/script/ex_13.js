"use strict";

document.addEventListener('DOMContentLoaded', function () {
    
    let image = localStorage.getItem('ex12_img');
    const $div = document.querySelector('footer div');

    if (image) {
        let imgElement = document.createElement('img');
        imgElement.src = image;
        $div.appendChild(imgElement);
        imgElement.setAttribute('width','100%');

        imgElement.addEventListener('mouseenter', () => {
            let interval = setInterval(() => {
                let width = imgElement.offsetWidth;
                imgElement.style.width = `${width * 0.95}px`;
            }, 1000);

            imgElement.addEventListener('mouseleave', () => {
                clearInterval(interval);
                imgElement.style.width = 'auto';
            });
        });

        imgElement.addEventListener('click', () => {
            localStorage.removeItem('ex12_img');
        });
    }
});