"use strict";

document.addEventListener('DOMContentLoaded', function () {
    
    const $inputs = document.querySelectorAll('input');
    const $input = $inputs[0]
    const $submit = $inputs[1]
    
    //$input.addEventListener('change', function () {
        //$submit.addEventListener('click', function (e) {
            
            const file = document.querySelector('input').files;
            //console.log(e)
            //getFileType(file) 

            $input.addEventListener('change', function () {
                if(file.length)
                {
                    const reader = new FileReader();
                    const blob = new Blob(file)
                    console.log(blob)
                    
                    reader.onload = function(e)
                    {
                        e.preventDefault()
                        document.querySelector('.content_display').innerHTML = e.target.result;
                    };
                    
                    if (getFyleType(reader)) {
                        
                    }
                    reader.readAsBinaryString(file);
                }
            })
        //})
    //})
})

function getFileType(fileUrl) {

    return new Promise((resolve, reject) => {
    fetch(fileUrl)
        .then(response => {
            if (response.ok) {
                let contentType = response.headers.get('content-type');
                resolve(contentType);
            } else {
                reject(new Error('File not found'));
            }
        })
        .catch(error => reject(error));
    });
}



function checkFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}