import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../models/custom-types'
import { CardService } from '../services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ct-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent {

  cardService = inject(CardService);

  cardArray$: Observable<Card[]> = this.cardService.getCards$(8);
  cardArray:Card[] = [];

  ngOnInit(){
    this.cardService.getCards$(8).subscribe(cards => this.cardArray = cards)
  }
  

    onClickMemoryCard(card:Card){
      //alert(`U klikte op kaartje ${card.card1}`);
    }
}


interface Cardd {
  set: string,
  card1: string,
  card2: string
}