import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notAvail'
})
export class NotAvailPipe implements PipeTransform {

  transform(value: string): any {
    if(value == null || typeof value === undefined || value.length == 0) {
      return "N/A";
    } else {
      return value;
    }
  }

}
