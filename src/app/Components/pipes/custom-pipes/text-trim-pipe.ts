import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim',
})
export class TextTrimPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    if (args.length) {
      return value.substring(0, args[0]).concat('...');
    } else {
      return value.substring(0, 3).concat('...');
    }
  }
}
