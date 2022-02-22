import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-syllabus',
  template: `
  <table>
  <thead>
    <th>Subject Name</th>
    <th>Subject Code</th>
    </thead>
    <tbody>
    <td>
    <div *ngFor="let elt of subjectData">
    <td colspan="2"><a>{{elt.subName}}</a></td>
      <td>{{elt.subCode}} </td>
      <td><button (click)="onclick()">syllabus</button>
      </div>
    </td>
    </tbody>
    </table>
  `,
  styles: [
  ]
})
export class SyllabusComponent implements OnInit {
  public subjectData: any = [];
  public algebra: any = [];
  public data: string="";
  constructor(private dataServie: DataService) { }
  ngOnInit(): void {
    this.subjectData = this.dataServie.getData()
    this.algebra = this.dataServie.getAlgebra();
  }
  onclick(){
    this.data=this.algebra[this.data.length].unit1;
    console.log(this.data);
    }
  }

