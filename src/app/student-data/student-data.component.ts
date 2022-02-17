import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  public heading = "Student-Login";
  public uName = "";
  public passWord = "";
  public content: string = "";
  public container: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addInfo() {
    this.content = this.uName;
    this.content = this.passWord;
    this.container.push("username:" + this.uName);
    this.container.push("password:" + this.passWord);
    this.uName = "";
    this.passWord = "";
    console.log(this.container);
  }
}
