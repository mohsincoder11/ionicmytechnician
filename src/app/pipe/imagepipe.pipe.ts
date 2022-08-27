import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagepipe'
})
export class ImagepipePipe implements PipeTransform {

  transform(value: any): any{
    let images = value.replace(/["]+/g, '');
    return images;
    }

}
