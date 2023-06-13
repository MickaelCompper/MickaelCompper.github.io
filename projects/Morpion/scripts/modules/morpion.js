class Morpion {
    constructor(grid) {
        this.grid = grid;
        this.playerActuel = 1;
        this.endGame = false;
        this.tour = 1;
        this.player1 = 'X';
        this.player2 = 'O';
        this.winner1 = 0;
        this.winner2 = 0;
     }

     isEmptyCase(cell) {
        return cell.textContent.length == 0;
    }

    setSymbol(cell, player) {
        this.player = player == 1 ? this.player1 : this.player2;
        cell.textContent = this.player;
        this.tour++;
    }

    isWinRow($cells) {
        if (($cells[0].textContent.length != 0 && ($cells[0].textContent == $cells[1].textContent && $cells[0].textContent == $cells[2].textContent)) ||
            ($cells[3].textContent.length != 0 && ($cells[3].textContent == $cells[4].textContent && $cells[3].textContent == $cells[5].textContent)) ||
            ($cells[6].textContent.length != 0 && ($cells[6].textContent == $cells[7].textContent && $cells[6].textContent == $cells[8].textContent))) {
            return true;
        }
        return false;
    }

    isWinCol($cells) {
        if (($cells[0].textContent.length != 0 && ($cells[0].textContent == $cells[3].textContent && $cells[0].textContent == $cells[6].textContent)) ||
            ($cells[1].textContent.length != 0 && ($cells[1].textContent == $cells[4].textContent && $cells[1].textContent == $cells[7].textContent)) ||
            ($cells[2].textContent.length != 0 && ($cells[2].textContent == $cells[5].textContent && $cells[2].textContent == $cells[8].textContent))) {
            return true;
        }
        return false;
    }

    isWinDiag($cells) {
        if ($cells[4].textContent.length != 0 && (($cells[0].textContent == $cells[4].textContent && $cells[0].textContent == $cells[8].textContent) ||
            ($cells[2].textContent == $cells[4].textContent && $cells[2].textContent == $cells[6].textContent))) {
            return true;
        }
        return false;
    }

    winner(){
        const $win1 = document.getElementById('playerOne');
        const $win2 = document.getElementById('playerTwo');
        
        if (this.playerActuel == 1) {
            this.winner1++;
        } else {
            this.winner2++;
        }

        $win1.textContent = this.winner1;
        $win2.textContent = this.winner2;

        this.grid.classList.add("won");
    }
}
export { Morpion };