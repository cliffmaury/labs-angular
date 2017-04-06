import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decToStr'
})
export class DecToStrPipe implements PipeTransform {

  transform(value: number, nbDecimal: number): any {
    return `0${value}`.slice(-2);
  }

}
