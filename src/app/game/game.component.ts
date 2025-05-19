import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard?: string;
  game!: Game;
  gameOver: boolean = false;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (this.game.players.length === 0) {
      this.snackBar.open('Please add at least 1 player to play!', 'OK', {
        duration: 4000,
        panelClass: ['custom-snackbar'],
      });
      return;
    }
    if (this.gameOver) {
      return;
    }
    if (this.game.stack.length === 0) {
      this.gameOver = true;
      return;
    }
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop() || '';
      this.currentCard = card;
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(card);
        this.pickCardAnimation = false;
        this.game.currentPlayer++;
        this.game.currentPlayer =
          this.game.currentPlayer % this.game.players.length;
        if (this.game.stack.length === 0) {
        }
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
