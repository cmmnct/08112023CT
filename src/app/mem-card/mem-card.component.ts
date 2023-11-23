import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/custom-types';

@Component({
  selector: 'ct-mem-card',
  templateUrl: './mem-card.component.html',
  styleUrls: ['./mem-card.component.css']
})
export class MemCardComponent {

  @Input({ required: true }) cardInput!:Card;
  @Output() turn:EventEmitter<Card> = new EventEmitter<Card>();
  @Input() uncovered:Boolean = false;

  onClickCard(){
    this.turn.emit(this.cardInput);
    this.uncovered = !this.uncovered;
  }

}
