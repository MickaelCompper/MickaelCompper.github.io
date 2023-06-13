"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const $form = document.querySelector("form");
    const $input = $form.querySelector('input')

    $form.addEventListener("submit", function (event) {

        event.preventDefault();
        const file = $input.files[0];

        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
        reader.onload = function () {

            const arrayBuffer = reader.result;
            const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = file.name;
            a.click();
        };
    });
});