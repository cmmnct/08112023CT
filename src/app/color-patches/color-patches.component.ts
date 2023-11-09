import { Component } from '@angular/core';
import { Colorpatch } from '../../models/colorpatch'

@Component({
  selector: 'ct-color-patches',
  templateUrl: './color-patches.component.html',
  styleUrls: ['./color-patches.component.css']
})
export class ColorpatchesComponent {

  myPatch:Colorpatch = new Colorpatch(23,127,222,0.8,'random')

  patchArray:Colorpatch[] =[
    new Colorpatch(0,0,0,1,'black'),
    new Colorpatch(255,255,255,1,'white'),
    new Colorpatch(255,0,0,1,'red'),
    new Colorpatch(0,255,0,1,'green'),
    new Colorpatch(0,0,255,1,'blue'),
    new Colorpatch(255,255,0,1,'yellow'),
    new Colorpatch(255,0,255,1,'magenta'),
    new Colorpatch(0,255,255,1,'cyan')
  ];

  randomColor(patch:Colorpatch, decimals:string){
   patch.r = Math.floor(Math.random() * 256);
   patch.g = Math.floor(Math.random() * 256);
   patch.b = Math.floor(Math.random() * 256);
   patch.a = Number(Math.random().toFixed(Number(decimals)));
  }

}
