import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: any): string {
    if (value === '' || typeof value !== 'string') return '';
    return value[0].toUpperCase() + value.substr(1);
  }
}
