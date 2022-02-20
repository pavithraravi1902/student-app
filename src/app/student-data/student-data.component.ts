import { Component, OnInit } from '@angular/core';
type requiredType = {
  id: "number",
  username: "string",
  password: "string"
};
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  public heading: string = "Student Login";
  public userName: string = "";
  public passWord: string = "";
  public data: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  login() {
    if (this.userName == "") {
      alert("Enter Username");
    }
    if (this.passWord == "") {
      alert("Enter Strong Password");
    }
    if (this.userName != "" && this.passWord != "") {
      this.data.push({ id: this.data.length, username: this.userName, password: this.passWord })
      console.log(this.data);
    }
    this.userName = "";
    this.passWord = "";
  }
  edit() {
    this.userName = this.data.username;
    this.passWord = this.data.password;
  }
  delete(id:number) {
    this.data=this.data.filter((value: any)=>value.id!==id);
  }
}

