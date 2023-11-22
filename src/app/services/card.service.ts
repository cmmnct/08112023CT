import { Injectable, inject } from '@angular/core';
import { Card } from 'src/models/custom-types';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  http = inject(HttpClient)

  constructor() { }

  getCards$(amount:number): Observable<Card[]> {
    return this.http.get<Card[]>("assets/cards.json").pipe(
      map(cards => {
        cards = this.shuffle(cards);
        cards = cards.slice(0, amount);
        cards = cards.concat(cards.slice())
        this.shuffle(cards);
      return cards
      })
    )
  
  }

  shuffle(array:any[]): any[] {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
}
