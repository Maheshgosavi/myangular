import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'

})
export class FilterPipe implements PipeTransform {

  transform(val: any, searchTearm:any): any {
    return val.filter(function(search) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }
}
//   transform(items: any[], field: string, value: string): any[] {
//     if (!items) {
//     return [];
//       }
//      if (!field || !value) {
//       return items;
//     }
  
//   return items.filter(singleItem =>
//     singleItem[field].toLowerCase().includes(value.toLowerCase())
//   );
// }
