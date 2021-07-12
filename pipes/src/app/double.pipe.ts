import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
})
export class DoublePipe implements PipeTransform {
  transform(value: number, loop: number = 1, flip: boolean = false): number {
    for (let i = 0; i < loop; i++) {
      value = value * 2;
    }

    if (flip) {
      value = value * -1;
    }

    return value * 2;
  }
}
