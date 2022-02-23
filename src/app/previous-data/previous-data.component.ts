import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
type Syllabus = {
  subName: string,
  subCode: string
}
@Component({
  selector: 'app-previous-data',
  template: `
    <h1>{{title}}</h1>
    <table style="border:1px">
    <thead>
    <th>S No.</th>
    <th>Subject Name</th>
    <th>Subject code</th>
    <th>URL</th>
    </thead>
    <tbody>
    <tr *ngFor="let value of data; index as i">
    <td> {{i + 1}} </td>
    <td>{{value.subName}}</td>
    <td>{{value.subCode}}</td>
    <td>
    <li><a href="https://drive.google.com/file/d/1yMkqQhUenjJ2ILmyQjqtzeuQsOpuXKoz/view?usp=sharing">2019</a></li>
    <li><a href="https://drive.google.com/file/d/16hOwdUnr7-I9KZLTKGSxJjwzirfy1YAB/view?usp=sharing">2020</a></li>
    <li><a href="https://drive.google.com/file/d/1yMkqQhUenjJ2ILmyQjqtzeuQsOpuXKoz/view">2021</a></li>
    </td>
    </tr>
    </tbody>
    </table>
  `,
  styles: [
  ]
})
export class PreviousDataComponent implements OnInit {
  public title: string = "Previous year Question paper"
  public data: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getSubjectData();
  }

}
