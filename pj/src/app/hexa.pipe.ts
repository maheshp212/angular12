import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(value:any): any {
    return value.toString(16);
  }

}
