import { Component, OnInit } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Teacher, TeacherService } from '../service/teacher.service';
import { SharedService } from 'src/app/common-module/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { keys } from 'lodash';



@Component({
  selector: 'app-teacher-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  teacherInfo: Array<Teacher> = [];
  columns: string[] = [];
  sortedColumn: any;
  totalRecords: any;
  page = 1;
  limit:number= NaN;
  asc: any;
  arrange: any
  filteredUsers: Array<Teacher> = [];
  options:any = this.filteredUsers;

  constructor(private teacher: TeacherService, private router: Router, private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
    this.teacher.getAllTeacher().subscribe((result: Teacher[]) => {
      this.teacherInfo = result;
      this.filteredUsers = this.teacherInfo;
      this.columns = Object.keys(this.teacherInfo[0]);
      console.log(this.teacherInfo);
      this.totalRecords = this.teacherInfo.length;
    }, (error) => {
      console.log("Teacher list loading failed", error);
      this.teacherInfo = [];
    }).add(() => {
      this.SpinnerService.hide();
    });
  }
  ngOnInit(): void {
  }

  onEdit(teacherId: number): void {
    this.router.navigateByUrl(`teachers/${teacherId}/edit`);
  }

  onView(teacher: Teacher): void {
    this.router.navigate(["teachers", teacher.id, "view"]);
  }

  updateParam(limitVal: number) {
    this.limit = limitVal;
  }
  filterArray(value: string): any {
    if (value) {
      this.filteredUsers = this.teacherInfo.filter((user: any) => user.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.filteredUsers = this.teacherInfo;
    }
  }
  sortData(fieldName: string) {
   // console.log("pavi", fieldName);
    if (this.arrange) {
      this.teacherInfo.sort(function (a: any, b: any) {
        let x = typeof a[fieldName] == "string" ? (a[fieldName] as string).toLowerCase() : a[fieldName];
        let y = typeof b[fieldName] == "string" ? (b[fieldName] as string).toLowerCase() : b[fieldName];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.teacherInfo.sort(function (a: any, b: any) {
        let x = typeof a[fieldName] == "string" ? (a[fieldName] as string).toLowerCase() : a[fieldName];
        let y = typeof b[fieldName] == "string" ? (b[fieldName] as string).toLowerCase() : b[fieldName];
        return x < y ? 1 : x > y ? -1 : 0;
      });
    }
    this.arrange = !this.arrange;
  }
  orderFn() {
    let order: any;
    if (order) {
      Object.keys(this.teacherInfo[0]) == this.columns;
    }
  }
}