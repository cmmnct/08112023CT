
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorpatchModel } from 'src/models/colorpatchModel';

@Component({
  selector: 'ct-color-patch',
  templateUrl: './color-patch.component.html',
  styleUrls: ['./color-patch.component.css']
})
export class ColorPatchComponent {

  @Input({required: true}) patchInput!:ColorpatchModel
  @Output() delete:EventEmitter<ColorpatchModel> = new EventEmitter();
  @Output() edit:EventEmitter<ColorpatchModel> = new EventEmitter();

  onClickDelete(){
    this.delete.emit(this.patchInput);
  }

  onClickEdit(){
    this.edit.emit(this.patchInput);
  }

  randomColor(patch:ColorpatchModel, decimals:string){
    patch.r = Math.floor(Math.random() * 256);
    patch.g = Math.floor(Math.random() * 256);
    patch.b = Math.floor(Math.random() * 256);
    patch.a = Number(Math.random().toFixed(Number(decimals)));
   }
}
