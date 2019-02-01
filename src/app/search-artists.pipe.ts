import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
