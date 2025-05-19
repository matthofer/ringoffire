import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {
      title: 'Waterfall',
      description:
        'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.',
    },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    {
      title: 'Category',
      description:
        'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.',
    },
    {
      title: 'Thumbmaster',
      description:
        'You are the thumb master until the next 5 is picked. Put your thumb on a surface. Everyone must copy you. The last person to do so drinks.',
    },
    { title: 'Chicks', description: 'All girls drink.' },
    {
      title: 'Heaven',
      description: 'Put your hands up! The last player drinks!',
    },
    {
      title: 'Mate',
      description:
        'Pick a mate. Your mate must always drink when you drink and the other way around.',
    },
    {
      title: 'Rhyme',
      description:
        'Say a word. In a clockwise direction, the other players have to rhyme with that word until someone cannot find a rhyme or repeats a word. This player then has to drink.',
    },
    { title: 'Men', description: 'All men drink.' },
    {
      title: 'Never have i ever...',
      description:
        'Say something you never did. Everyone who did it has to drink.',
    },
    {
      title: 'Quizmaster',
      description:
        'You are now the question master until the next Queen is picked. If you ask someone a question and they answer, they have to drink.',
    },
    {
      title: 'Rule',
      description:
        'Make a rule. Everyone needs to drink when he breaks the rule.',
    },
  ];

  title = '';
  description = '';
  @Input() card!: string;

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
