import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(input: String): String {
    // return '฿' + value.replace(/,/g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '฿' + input;
  }

}
