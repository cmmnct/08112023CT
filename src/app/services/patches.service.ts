import { Injectable, inject } from '@angular/core';
import { ColorpatchModel } from 'src/models/colorpatchModel';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ColorpatchDto } from 'src/models/custom-types';

@Injectable({
  providedIn: 'root'
})
export class PatchesService {

  http = inject(HttpClient);

  patchArray: ColorpatchModel[] = [];
  patchArray$: BehaviorSubject<ColorpatchModel[]> = new BehaviorSubject(this.patchArray);

  constructor() { }

  getPatches(): BehaviorSubject<ColorpatchModel[]> {
    this.http.get<ColorpatchDto[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
      .pipe(
        map(patches => patches.map(patch => new ColorpatchModel(patch.r, patch.g, patch.b, patch.a, patch.name)))
      ).subscribe((patches) => {
        this.patchArray = patches;
        this.patchArray$.next(this.patchArray);
      });
    return this.patchArray$;
  }

  getPatches$(): Observable<ColorpatchModel[]> {
    return this.http.get<ColorpatchDto[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
      .pipe(
        map(patches => patches.map(patch => new ColorpatchModel(patch.r, patch.g, patch.b, patch.a, patch.name)))
      )
  }
  deletePatch(cp:ColorpatchModel){
    this.patchArray.splice(this.patchArray.indexOf(cp), 1);
    this.patchArray$.next(this.patchArray);
  }

  addPatch(cp:ColorpatchModel){
    this.patchArray.push(cp);
  }

  updatePatch(cp:ColorpatchModel){
    this.patchArray[this.patchArray.indexOf(cp)] = cp;
  }

}


