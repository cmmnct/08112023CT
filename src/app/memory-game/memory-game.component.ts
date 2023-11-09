import { Component } from '@angular/core';
import { Card } from '../../models/custom-types'

@Component({
  selector: 'ct-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent {

  cardArray: Card[] =
    [
      {
        set: "eend",
        card1: "duck",
        card2: "duck"
      },
      {
        "set": "kitten",
        "card1": "kitten",
        "card2": "kitten"
      },
      {
        "set": "big",
        "card1": "piglet",
        "card2": "piglet"
      },
      {
        "set": "puppy",
        "card1": "puppy",
        "card2": "puppy"
      },
      {
        "set": "kalf",
        "card1": "calf",
        "card2": "calf"
      },
      {
        "set": "veulen",
        "card1": "veal",
        "card2": "veal"
      },
      {
        "set": "lam",
        "card1": "lamb",
        "card2": "lamb"
      },
      {
        "set": "haan",
        "card1": "rooster",
        "card2": "rooster"
      },
      {
        "set": "paard",
        "card1": "horse",
        "card2": "horse"
      },
      {
        "set": "muis",
        "card1": "mouse",
        "card2": "mouse"
      },
      {
        "set": "hond",
        "card1": "dog",
        "card2": "dog"
      },
      {
        "set": "kat",
        "card1": "cat",
        "card2": "cat"
      },
      {
        "set": "gans",
        "card1": "goose",
        "card2": "goose"
      },
      {
        "set": "geit",
        "card1": "goat",
        "card2": "goat"
      },
      {
        "set": "schaap",
        "card1": "sheep",
        "card2": "sheep"
      },
      {
        "set": "varken",
        "card1": "pig",
        "card2": "pig"
      },
      {
        "set": "koe",
        "card1": "cow",
        "card2": "cow"
      },
      {
        "set": "kuiken",
        "card1": "chick",
        "card2": "chick"
      },
      {
        "set": "kip",
        "card1": "hen",
        "card2": "hen"
      }
    ]

}


interface Cardd {
  set: string,
  card1: string,
  card2: string
}