import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  heading = "Student-Login";
  uName = "";
  passWord = "";
  content: string="";
  constructor() { }

  ngOnInit(): void {
  }
  addInfo() {
    this.content=this.uName;
    this.content=this.passWord;
    this.uName = "";
    this.passWord="";
  }
  

}
