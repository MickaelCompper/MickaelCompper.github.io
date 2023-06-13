"use strict";

document.addEventListener('DOMContentLoaded', function () {
    
    const $button = document.querySelector('button');
    const apiLink = document.querySelector('a').href;

    $button.addEventListener('click', function () {
        fetch(apiLink)
        .then(response => response.blob())
        .then(blob => {
            download(blob, 'api.txt', 'text/plain');
        }
            );
    });
});

function download(data, filename, type) {

    const file = new Blob([data], {type: type});

    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others

        const a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//Bonus : compatibilité IE10