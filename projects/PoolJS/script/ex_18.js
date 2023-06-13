"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const $footer = document.querySelector('footer div');

    const $image = document.createElement('img');
    
    $footer.appendChild($image);
    
    $image.style.display = "none";
    $footer.style.border = 'bisque 10px dashed';

    $footer.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    $footer.addEventListener("drop", function (event) {

        event.preventDefault();

        const file = event.dataTransfer.files[0];
        const reader = new FileReader();
        //console.log(file)
        if (file.type.startsWith("image")) {

            reader.onload = function (event) {
                $image.src = event.target.result;
                $image.style.display = "block";
                $image.style.width = "100%";
            };

            reader.readAsDataURL(file);
        } else {

            console.error("Soit ce fichier n'est pas de type image, soit vous avez oublié l'extension !");
        }
    });

    $image.addEventListener('dragover', function () {
        
        $image.style.display = "none";   
    })
})