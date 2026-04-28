import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceText',
})
export class ReplaceTextPipe implements PipeTransform {
  transform(value: string, searchVal: string, replaceVal: string): string {
    if (!searchVal && !replaceVal) return value;
    return value.replace(searchVal, replaceVal);
  }
}
