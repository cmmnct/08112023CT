import { Component } from '@angular/core';
import { Colorpatch } from '../../models/colorpatch'

@Component({
  selector: 'ct-color-patches',
  templateUrl: './color-patches.component.html',
  styleUrls: ['./color-patches.component.css']
})
export class ColorpatchesComponent {

  myPatch:Colorpatch = new Colorpatch(23,127,222,0.8,'random')

  randomColor(decimals:string){
   this.myPatch.r = Math.floor(Math.random() * 256);
   this.myPatch.g = Math.floor(Math.random() * 256);
   this.myPatch.b = Math.floor(Math.random() * 256);
   this.myPatch.a = Number(Math.random().toFixed(Number(decimals)));
  }

}
