"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const $api = document.querySelector('footer div');
  const URL = 'https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-annuaire-education&q=&rows=25';

  fetch(URL, {method: 'GET'})
    .then((response) =>
      response.json().then((data) => {

        let display = '<ul>';
        let limit = 25;
        let i = 0;

        while (limit) {
          display += `<li><em>Commune</em> : ${data.records[i].fields.nom_commune}, <em>Établissement</em> : ${data.records[i].fields.nom_etablissement}, <em>Courriel</em> : ${data.records[i].fields.mail}</li>`;
          limit--;
          i++;
        }
        
        display += '</ul>';
        $api.innerHTML = display;
      })
    )
    .catch((err) => console.error("error : " + err));
});