"use strict";

document.addEventListener('DOMContentLoaded', function () {

    modifP();
});
    
function modifP () {
    const $div = document.querySelector('footer div');
    $div.textContent = 'Hello World';
}

//Bonus : "use strict"; sur tous les exos