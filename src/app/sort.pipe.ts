import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(collection: Array<any>, column: string): any[] {
    let sortArray=collection.sort((a: any, b: any): any => {
      if (a[column] > b[column]) {
        return 1;
      }
      if (a[column] < b[column]) {
        return -1;
      }
      return 0
    })
    return sortArray;
  }

}
