import { Component, OnInit } from '@angular/core';
type Student = {
  id: number,
  username: string,
  password: string,
}
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
  public title: string = "Student-login";
  public typeName: string = "text";
  public typeName1: string = "password";
  public uName: any = "";
  public passWord: any = "";
  public dataHolder: Array<Student> = [];
  public onChange: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(item: any) {
    if (this.uName == "") {
      alert("Enter Userrname");
    }
    if (this.passWord == "") {
      alert("Enter password");
    }
    if (this.uName != "" && this.passWord != "") {
      this.dataHolder.push({ id: this.dataHolder.length, username: this.uName, password: this.passWord })
    }
    this.uName = "";
    this.passWord = "";
  }
  onEdit(id: number) {
    this.uName = this.dataHolder[id].username;
    this.passWord = this.dataHolder[id].password;
    this.onChange = true;
  }
  onDelete(id: number) {
    alert("Are you sure to delete this data");
    this.dataHolder = this.dataHolder.filter((value) => value.id != id);
    //this.dataHolder = this.dataHolder.splice(id, id);
  }
}
