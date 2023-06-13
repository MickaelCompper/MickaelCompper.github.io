"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const $footer = document.querySelector('footer');

    $footer.innerHTML = '<input type="date">&nbsp;&nbsp;<p></p>';

    const $input = document.querySelector('input');
    const $p = $footer.querySelector('p');

    $p.setAttribute('style', 'display: inline');

    const jours = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mois = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    $input.addEventListener('change', function () {

        if (checkDate($input.value)) {
            
            const date = new Date($input.value);
            const month = mois[date.getUTCMonth()];
            const année = date.getFullYear();
            const jour = date.getUTCDate();
            const day = jours[date.getDay()];
    
            $p.textContent = day + ' ' + jour + ' ' + month + ' ' + année;
        } else {
            $p.textContent = 'Le format de la date est invalide';
        }
    });
});

function checkDate(date) {
    return /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(date);
}
//Bonus : vérif format date