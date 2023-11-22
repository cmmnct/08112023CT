import { Injectable, inject } from '@angular/core';
import { ColorpatchModel } from 'src/models/colorpatchModel';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ColorpatchDto } from 'src/models/custom-types';

@Injectable({
  providedIn: 'root'
})
export class PatchesService {

  http = inject(HttpClient);

  patchArray: ColorpatchModel[] = [
    new ColorpatchModel(0, 0, 0, 1, 'black'),
    new ColorpatchModel(255, 255, 255, 1, 'white'),
    new ColorpatchModel(255, 0, 0, 1, 'red'),
    new ColorpatchModel(0, 255, 0, 1, 'green'),
    new ColorpatchModel(0, 0, 255, 1, 'blue'),
    new ColorpatchModel(255, 255, 0, 1, 'yellow'),
    new ColorpatchModel(255, 0, 255, 1, 'magenta'),
    new ColorpatchModel(0, 255, 255, 1, 'cyan')
  ];

  constructor() { }

  getPatches(): ColorpatchModel[] {
    return this.patchArray;
  }

  getPatches$(): Observable<ColorpatchModel[]> {
    return this.http.get<ColorpatchDto[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
    .pipe(
    map(patches => patches.map(patch => new ColorpatchModel(patch.r, patch.g, patch.b, patch.a, patch.name)))
    )
  }

}


