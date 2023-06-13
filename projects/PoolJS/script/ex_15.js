"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const a = localStorage.getItem('val1');
    const $span = document.getElementsByClassName('dot');

    if (a) {
        const val1 = getVal('val1');
        setVal('val2');
        const val2 = getVal('val2');
        const ancienVal1 = localStorage.setItem('ancienVal1', val1);

        if (ancienVal1 > val2) {
            $span[0].setAttribute('style', 'background-color: red');
        } else if (ancienVal1 < val2) {
            $span[0].setAttribute('style', 'background-color: green');
        } else {
            $span[0].setAttribute('style', 'background-color: orange');
        } 

        setVal('val1');

    } else {
        setVal('val1');
    }
});

function setVal(clef) {

    const URL = document.querySelector('a').href;

    fetch(URL)
        .then((response) =>
            response.json().then((data) => {
                localStorage.setItem(clef, data.bpi.EUR.rate);
            }));
}

function getVal(clef) {

    return localStorage.getItem(clef);
}
