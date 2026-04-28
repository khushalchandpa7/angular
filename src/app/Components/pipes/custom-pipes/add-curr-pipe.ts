import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCurr',
})
export class AddCurrPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    if (args[0] === 'INR') {
      return `₹${value}.00`;
    } else if (args[0] === 'USD') {
      return `$${value}.00`;
    } else if (args[0] === 'EUR') {
      return `€${value}.00`;
    } else if (args[0] === 'JPY') {
      return `¥${value}.00`;
    } else {
      return `₹${value}.00`;
    }
  }
}
