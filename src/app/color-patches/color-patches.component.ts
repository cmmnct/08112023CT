import { Component, ChangeDetectionStrategy, inject, OnDestroy } from '@angular/core';
import { ColorpatchModel } from '../../models/colorpatchModel'
import { PatchesService } from '../services/patches.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ct-color-patches',
  templateUrl: './color-patches.component.html',
  styleUrls: ['./color-patches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent {

patchesService = inject(PatchesService);

  //constructor(public patchesService:PatchesService){
 // }

  defaultPatch:ColorpatchModel = new ColorpatchModel(23,127,222,0.8,'')

  patchArray:ColorpatchModel[] = this.patchesService.getPatches();

  patchArray$:Observable<ColorpatchModel[]> = this.patchesService.getPatches$();

  onDeletePatch(cp:ColorpatchModel){
    this.patchArray.splice(this.patchArray.indexOf(cp), 1)
  }
  onEditPatch(cp:ColorpatchModel){
    this.defaultPatch = cp;
  }

  onAddPatch(){
    this.patchArray.push(this.defaultPatch);
    this.defaultPatch = new ColorpatchModel(0,0,0,1,'')
  }

  ngOnDestroy(){

  }

}
