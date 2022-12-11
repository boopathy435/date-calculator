import { Pipe, PipeTransform } from '@angular/core';
import { getString } from 'src/Utils/date-functions';

@Pipe({name: 'datestring'})
export class DateStringPipe implements PipeTransform {
  transform(value: number, word = ''): string {
    return getString(value,word);
  }
}