import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return "N/A";
    }
    let str_value = value.toString();
    // Limit numbers to 3 decimal places
    if (str_value.split('.').length > 1) {
      return value.toFixed(3);
    }
    let mantissa = str_value.split('.')[0];
    let new_str = "";
    for (let i = 0; i < mantissa.length; i++) {
      // Check that index is non-zero and if offset correct
      // for pre-pending a comma
      if (i && i % 3 == mantissa.length % 3) {
        new_str += ","
      }
      new_str += mantissa[i];
    }

    return new_str;
  }
}
