import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {
  transform(value: number, digits: number): string {
    return ('0'.repeat(digits) + value).substr(-digits);
  }
}
