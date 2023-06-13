"use strict";

function $(balise) {
    const $balises = document.querySelectorAll(balise);

    let listeClasses = [];
    let listeIds = [];

    $balises.forEach(element => {
        if (element.id){
            listeIds.push(element.id);
        }
        element.classList.forEach(classe => {
            listeClasses.push(classe);
        });
    });
    
    return [listeClasses, listeIds];
}