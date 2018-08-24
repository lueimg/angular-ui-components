import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  // tslint:disable-next-line:pipe-naming
  name: 'dateformat',
  pure: false
})
export class DateFormatPipe implements PipeTransform {
  transform(date: Date, format: string ): string {
    return moment(date).format(format);
  }
}
