import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descPipe'
})
export class DescPipePipe implements PipeTransform {

  transform(desc: any, id: any, name: any, website: any): any {
  
    return desc + '= ' + 'Your ID is ' + id + '. Your Name is ' + name + '. Your Website is ' + website + '.';
  
  }

}
