import { Morpion } from './modules/morpion.js';
let morpion = new Morpion (document.querySelector('#grid'));

document.addEventListener('DOMContentLoaded', function () {
    const $cells = [...document.getElementsByClassName('cell')];
    const $status = document.getElementsByClassName('win-display');
    const $winner = $status[0];
    const $refresh = document.getElementById('replay');
    const $currentPlayer = document.getElementById('currentPlayer');

    $currentPlayer.textContent = 'Joueur 1';

    $cells.forEach(element => {
        element.addEventListener('click', function (e) {
            if (!morpion.endGame) {
                e.preventDefault();

                if (morpion.isEmptyCase(element)) {
                    morpion.setSymbol(element, morpion.playerActuel);
                    if (morpion.isWinRow($cells) || morpion.isWinCol($cells) || morpion.isWinDiag($cells)) {
                        $winner.textContent = `Joueur ${morpion.playerActuel} a gagné !`;
                        morpion.winner();
                        morpion.endGame = true;
                    }
                    
                    if (morpion.tour == 10 && !morpion.endGame) {
                        $winner.textContent = `Match nul !`;
                        morpion.grid.classList.add("won");
                        morpion.endGame = true;
                    }
                morpion.playerActuel = morpion.playerActuel == 1 ? 2 : 1;
                $currentPlayer.textContent = `Joueur ${morpion.playerActuel}`;
            }
            }
        })
    });

    $refresh.addEventListener('click', function (e) {
        e.preventDefault();

        $cells.forEach(element => {
            element.textContent = '';
        });

        morpion.playerActuel = 1;
        morpion.endGame = false;
        morpion.tour = 1;
        morpion.grid.classList.remove("won");
    })
})