import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'location' })
export class LocationPipe implements PipeTransform {
  transform(location: any, searchText: any): any {
    if(searchText == null) return location;

    return location.filter(function(location){
      return location.locationName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}