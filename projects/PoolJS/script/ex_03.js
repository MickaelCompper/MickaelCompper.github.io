"use strict";

document.addEventListener('DOMContentLoaded', function () {
    
    const $alert = this.querySelector('footer div');

    $alert.addEventListener('click', function () {
        let name = prompt('What is your name ?');
        while (!name) {
            name = prompt('What is your name ?');
        }
        const sure = confirm(`Are you sure ${name} is your name ?`);

        if (sure) {
            $alert.innerHTML = `<em>Hello <strong>${name}</strong> !</em>`;
            alert(`Hello ${name} !`);
        }
    });
});