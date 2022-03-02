import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revers'
})
export class ReversPipe implements PipeTransform {

  nvalue: string=''

  transform(value: any): any {

  this.nvalue = value.split('').reverse().join('');

    return this.nvalue;

  }

}
