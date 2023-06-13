"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const $input = document.querySelector('input');

  document.querySelector("button").addEventListener("click", function () {
    if (isNaN($input.value) || $input.value.length != 5) {
      document.querySelector("footer").innerHTML =
        "Merci d'entrer un code postal !";
    } else if ($input.value.length == 5) {
      const URL = `https://apicarto.ign.fr/api/codes-postaux/communes/${$input.value}`;

      fetch(URL)
        .then((response) =>
          response.json().then((data) => {

            let display = "<ul>";

            for (let ville of data) {
              display += `<li>${ville.nomCommune} : ${ville.libelleAcheminement}</li>`;
            }
            display += "</ul>";
            document.querySelector("footer").innerHTML = display;
          })
        )
        .catch((err) => console.error("error : " + err));
    }
  });
});