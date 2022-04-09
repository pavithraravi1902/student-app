import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortingPipe implements PipeTransform {
  transform(collection: Array<any>, column: string, orderType: string): any[] {
  //transform(collection: Array<any>, direction: string, column: string, type: string): any[] {
    /*let sortedItems = [];
    sortedItems = direction === "asc" ?
      this.sortAscending(collection, column, type) :
      this.sortDescending(collection, column, type)
    return sortedItems;
  }
  sortAscending(collection: any, column: any, type: any) {
    return [...collection.sort((a: any, b: any) => {
      if (type === "string") {
        if (a[column].toUpperCase() < b[column].toUpperCase())
          return -1;
      } else {
        return a[column] - b[column];
      }
    })]
  }

  sortDescending(collection: any, column: any, type: any){
    return [...collection.sort((a: any, b: any)=> {
      if (type === "string") {
        if (a[column].toUpperCase() > b[column].toUpperCase())
          return -1;
      } else {
        return b[column] - a[column];
      }
    })]
  }
}
      })
  }

let arrange: any;
let sortArray: any;
if (arrange) {
  sortArray = collection.sort(function (a: any, b: any) {
    let x = a[column].toLowerCase(), y = b[column].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
} else {
  sortArray = collection.sort(function (a: any, b: any) {
    let x = a[column].toLowerCase(), y = b[column].toLowerCase();
    return x < y ? 1 : x > y ? -1 : 0;
  });
}
arrange = !arrange;*/
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
    //type-2
    /*collection.sort( ( a: any, b: any ) => {
      let val1 = a[ column ];
      let val2 = b[ column ];
      if ( val1 == undefined && val2 == undefined ) return 0;
      if ( val1 == undefined && val2 != undefined ) return orderType ? 1 : -1;
      if ( val1 != undefined && val2 == undefined ) return orderType ? -1 : 1;
      if ( val1 == val2 ) return 0;
      return orderType ? (val1.toString().toLowerCase() > val2.toString().toLowerCase() ? -1 : 1) : (val2.toString().toLowerCase() > val1.toString().toLowerCase() ? -1 : 1);
    } );
    return collection;*/
    return sortArray;
  }
}

