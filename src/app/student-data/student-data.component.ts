import { Component, OnInit } from '@angular/core';
type requiredType = {
  username: "string"
  password: "string"
};
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  public heading: Array<string> = ["Student-Login"];
  public uName: string = "";
  public passWord: string = "";
  public typeName: string = "text";
  public typeName1: string = "password"
  public dataHolder: Array<string> = [];
  public dataHolder1: Array<string> = [];
  public isEmpty=true;
  constructor() { }

  ngOnInit(): void {
  }
  addInfo(): any {
    if (this.uName == "") {
      return this.uName="Enter username";
    }
    if (this.passWord == "" && this.passWord.length <= 8) {
      return this.passWord="Enter Strong password";
    } else {
      this.dataHolder.push(this.uName);
      this.dataHolder1.push(this.passWord);
      this.uName="";
      this.passWord="";
    }
  }
  editData(){
      return this.dataHolder.push(this.uName);
  }
}
