
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPipe'
})
export class AddPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    args = args ? args : '3'
    console.log(args);
    return value.split("").reverse().join("");
  }

}