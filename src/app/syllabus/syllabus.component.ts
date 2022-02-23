import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-syllabus',
  template: `
  <table>
  <thead>
    <th>Subject Name</th>
    <th>Subject Code</th>
    <th></th>
  </thead>
  <tbody>
    <tr>
       <td>
    <div *ngFor="let elt of subjectData">
      <td> {{elt.subName}} </td>
      <td>{{elt.subCode}} </td>
    </div>
      <td>
       <tr>
          <button (click)="algebraFn()">Syllabys</button>
          <ul *ngFor="let item of data; index as i">
          <li> {{"unit-" + (i+1)}}  {{(item)}}</li>
          </ul>
       </tr>
       <tr>
          <button (click)="trignoFn()">Syllabys</button>
          <ul *ngFor="let item1 of data1; index as i">
          <li> {{"unit-" + (i+1)}}  {{(item1)}}</li>
          </ul>
       </tr>
       <tr>
          <button (click)="diffEqfn()">Syllabys</button>
          <ul *ngFor="let item2 of data2; index as i">
          <li> {{"unit-" + (i+1)}}  {{(item2)}}</li>
          </ul>
       </tr>
        <tr>
          <button (click)="financialAccFn()">Syllabys</button>
          <ul *ngFor="let item3 of data3; index as i">
          <li> {{"unit-" + (i+1)}}  {{(item3)}}</li>
          </ul>
        </tr>
        <tr>
          <button (click)="costFn()">Syllabys</button>
          <ul *ngFor="let item4 of data4; index as i">
          <li> {{"unit-" + (i+1)}}  {{(item4)}}</li>
          </ul>
        </tr>
       </td>
       </tr>

    </tbody>
    </table>
  `,
  styles: [
  ]
})
export class SyllabusComponent implements OnInit {
  public subjectData: any = [];
  public algebra: any = [];
  public trigno: any = [];
  public diffEq: any = [];
  public financialAcc: any = [];
  public costAcc: any = [];
  public data: Array<string> = [];
  public data1: Array<string> = [];
  public data2: Array<string> = [];
  public data3: Array<string> = [];
  public data4: Array<string> = [];
  constructor(private dataServie: DataService) { }
  ngOnInit(): void {
    this.subjectData = this.dataServie.getData()
    this.algebra = this.dataServie.getAlgebra();
    this.trigno = this.dataServie.getTrigno();
    this.diffEq = this.dataServie.getDiff();
    this.financialAcc = this.dataServie.getFinancial();
    this.costAcc = this.dataServie.getCost();
  }
  algebraFn() {
    "Algebra syllabus:"
    this.data = this.algebra.filter((item: any) => Object.values(item));
    //this.data = Object.values(this.algebra)
    console.log(this.data)
    return this.data;
  }

  trignoFn() {
    this.data1=this.trigno.filter((item:any)=>item);
  }

  diffEqfn() {
    this.data2
  }

  financialAccFn() {
    this.data3
  }

  costFn() {
    this.data4
  }
}

