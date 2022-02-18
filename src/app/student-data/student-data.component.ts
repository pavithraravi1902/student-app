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
  public unameContainer: Array<string> = [];
  public passwordContainer: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addInfo() {
    /* if (this.uName == "" && this.passWord=="") {
       console.log("Fill Required Field");
     } else*/
    if (this.uName == "") {
      console.log("Enter Your Name");
    } else if (this.passWord == "" && this.passWord.length <= 8) {
      console.log("Enter Strong Password");
    } else {
      this.unameContainer.push("username:" + this.uName);
      this.passwordContainer.push("password:" + this.passWord);
    };
    this.uName = "";
    this.passWord = "";
  }
}
