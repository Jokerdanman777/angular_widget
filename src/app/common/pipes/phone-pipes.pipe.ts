import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipes'
})
export class PhonePipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
