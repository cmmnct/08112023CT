import { Pipe, PipeTransform } from '@angular/core';
import { ColorpatchModel } from 'src/models/colorpatchModel';

@Pipe({
  name: 'rgba',
  pure: false
})
export class RgbaPipe implements PipeTransform {

  transform(patch:ColorpatchModel): string {
    return `rgba(${patch.r},${patch.g},${patch.b},${patch.a})`;
  }

}
