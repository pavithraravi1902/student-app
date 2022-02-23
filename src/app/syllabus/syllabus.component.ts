import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
type Unit = {
  unit: string
}
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
          <li> {{"Algebra: unit-" + (i+1)}}  {{(item.unit)}}</li>
          </ul>
       </tr>
       <tr>
          <button (click)="trignoFn()">Syllabys</button>
          <ul *ngFor="let item1 of data1; index as i">
          <li> {{"Trignometry: unit-" + (i+1)}}  {{(item1.unit)}}</li>
          </ul>
       </tr>
       <tr>
          <button (click)="diffEqfn()">Syllabys</button>
          <ul *ngFor="let item2 of data2; index as i">
          <li> {{"Differential Equation: unit-" + (i+1)}}  {{(item2.unit)}}</li>
          </ul>
       </tr>
        <tr>
          <button (click)="financialAccFn()">Syllabys</button>
          <ul *ngFor="let item3 of data3; index as i">
          <li> {{"Financial Accounting: unit-" + (i+1)}}  {{(item3.unit)}}</li>
          </ul>
        </tr>
        <tr>
          <button (click)="costFn()">Syllabys</button>
          <ul *ngFor="let item4 of data4; index as i">
          <li> {{"Cost Accounting: unit-" + (i+1)}}  {{(item4.unit)}}</li>
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
  public data: Array<Unit> = [];
  public data1: Array<Unit> = [];
  public data2: Array<Unit> = [];
  public data3: Array<Unit> = [];
  public data4: Array<Unit> = [];
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
    this.data = this.algebra.filter((item: any) => item.unit);
  }

  trignoFn() {
    this.data1 = this.trigno.filter((item: any) => item.unit);
  }

  diffEqfn() {
    this.data2 = this.diffEq.filter((item: any) => item.unit);
  }

  financialAccFn() {
    this.data3 = this.financialAcc.filter((item: any) => item.unit);
  }

  costFn() {
    this.data4 = this.costAcc.filter((item: any) => item.unit);
  }
}

