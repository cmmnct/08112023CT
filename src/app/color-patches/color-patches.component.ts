import { Component, ChangeDetectionStrategy, inject, OnDestroy, OnInit } from '@angular/core';
import { ColorpatchModel } from '../../models/colorpatchModel'
import { PatchesService } from '../services/patches.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'ct-color-patches',
  templateUrl: './color-patches.component.html',
  styleUrls: ['./color-patches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent implements OnInit {

  patchesService = inject(PatchesService);

  //constructor(public patchesService:PatchesService){
  // }
  patchArray: ColorpatchModel[];
  defaultPatch: ColorpatchModel;
  patchArray$: BehaviorSubject<ColorpatchModel[]> = new BehaviorSubject([] as ColorpatchModel[]);

  constructor() {
    this.patchArray = [];
    this.defaultPatch = new ColorpatchModel(23, 127, 222, 0.8, '');


  }

  ngOnInit() {
    // this.patchArray = this.patchesService.getPatches();
    this.patchArray$ = this.patchesService.getPatches();
  }






  onDeletePatch(cp: ColorpatchModel) {
    this.patchesService.deletePatch(cp);
  }

  onEditPatch(cp: ColorpatchModel) {
    this.defaultPatch = cp;
  }

  onUpdatePatch() {
    this.patchesService.updatePatch(this.defaultPatch);
    this.defaultPatch = new ColorpatchModel(0, 0, 0, 1, '');
  }

  onAddPatch() {
    this.patchesService.addPatch(this.defaultPatch);
    this.defaultPatch = new ColorpatchModel(0, 0, 0, 1, '');
  }

  ngOnDestroy() {

  }

}
