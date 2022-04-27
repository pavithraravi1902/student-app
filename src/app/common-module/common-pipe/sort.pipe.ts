import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortingPipe implements PipeTransform {
  /*transform(collection: Array<any>, column: string, orderType: string): any[] {
    let arrange: any;
    let asc: boolean = false;
    let sortArray = collection.sort((a: any, b: any): any => {
      if (a[column] > b[column]) {
        return 1;
      }
      if (a[column] < b[column]) {
        return -1;
      }
      return 0;
    });
    asc = !asc;
    return sortArray;
  }*/
  transform(collection: any[], criteria: SortCriteria): any[] {
    //console.log(collection);
    if (!collection || !criteria)
      return collection;
    
    let column: string = criteria.property;

    let sortFn:(a: any, b: any) => any = (a, b) => {
      let value: number;
      if (a[column] === undefined) value = -1;
      else if (b[column] === undefined) value = 1;
      else value = a[column] > b[column] ? 1 : (b[column] > a[column] ? -1 : 0);
      return criteria.descending ? (value * -1) : value;
    };

    collection.sort(sortFn);
    return collection;
  }
}

export interface SortCriteria {
  property: string;
  descending?: boolean;
}
