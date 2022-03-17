import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentInfo: Array<Student> = [];
  record: any;
  record1: any;
  arrange: any;
  nameFilter: string="";

  constructor(private student: StudentService, private router: Router) {
    this.student.getAllStudents().subscribe((result) => {
      this.studentInfo = result;
    });
  }

  ngOnInit(): void {
  }
  onEdit(student: Student): void {
    // this.router.navigate(["students", student.id, "edit"]);
    this.router.navigateByUrl(`students/${student.id}/edit`);
    // this.router.navigateByUrl("students/" + student.id + "/edit");
  }

  onView(student: Student): void {
    this.router.navigate(["students", student.id, "view"]);
  }

  onAdd(student: Student): void {
    this.router.navigate(["students", student]);
  }
  sortData() {
    if (this.arrange) {
      this.studentInfo.sort((a: any, b: any) => a.regNo - b.regNo);
    } else {
      this.studentInfo.sort((a: any, b: any) => b.regNo - a.regNo);
    }
    this.arrange = !this.arrange;
  }
  sortAge() {
    if (this.arrange) {
      this.studentInfo.sort((a: any, b: any) => a.age - b.age);
    } else {
      this.studentInfo.sort((a: any, b: any) => b.age - a.age);
    }
    this.arrange = !this.arrange;
  }
  sortName() {
    if (this.arrange) {
      this.studentInfo.sort(function (a: any, b: any) {
        let x = a.name.toLowerCase(), y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.studentInfo.sort(function (a: any, b: any) {
        let x = a.name.toLowerCase(), y = b.name.toLowerCase();
        return x < y ? 1 : x > y ? -1 : 0;
      });
    }
    this.arrange = !this.arrange;
  }
  sortDept() {
    if(this.arrange){
    this.studentInfo.sort(function (a: any, b: any) {
      let x = a.dept.toLowerCase(), y = b.dept.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }else{
    this.studentInfo.sort(function (a: any, b: any) {
      let x = a.dept.toLowerCase(), y = b.dept.toLowerCase();
      return x < y ? 1 : x > y ? -1 : 0;
    });
  }
  this.arrange = !this.arrange;
  }
}