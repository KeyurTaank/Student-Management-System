import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge',
  standalone: true
})
export class ConvertAgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const type = args[0]
    switch(type) {
      case 'month' : {
        return Number(value) * 12;
      }
      case 'days' : {
        return Number(value) * 365;
      }
      default : {
        return value;
      }
    }
  }
}