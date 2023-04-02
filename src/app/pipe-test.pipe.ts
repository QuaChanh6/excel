import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTest'
})
export class PipeTestPipe implements PipeTransform {

  transform(value: number, multiply: number): number {
 
    return value*multiply;
  }

}
