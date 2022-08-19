import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public sortData(param1: any, param2: any) {
    let arrange: any;
    if (arrange) {
      param1.sort((a: any, b: any) => a.param2 - b.param2);
    } else {
      param1.sort((a: any, b: any) => b.param2 - a.param2);
    }
    arrange = !arrange;
  }
}
