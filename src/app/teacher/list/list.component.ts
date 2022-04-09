import { Component, OnInit } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Teacher, TeacherService } from '../service/teacher.service';
import { SharedService } from 'src/app/common-module/shared.service';


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
  page: any = 1;
  limit: any = 5;
  asc: any;
  filteredUsers: Array<Teacher> = [];

  constructor(private teacher: TeacherService, private router: Router, private sharedService: SharedService) {
    // Step:1 initiate loader/spinner
    // Success: Step 1, 2, 4
    // Error: Step 1, 3, 4
    this.teacher.getAllTeacher().subscribe((result: any) => {
      this.teacherInfo = result;
      this.filteredUsers = this.teacherInfo;
      this.columns = Object.keys(this.teacherInfo[0]);
      this.totalRecords = this.teacherInfo.length;
      // Step:2 on success disable loader/spinner
    }, (error) => {
      console.log("Teacher list loading failed", error);
      this.teacherInfo = [];
      // Step:3 on failure/error disable loader/spinner
    }).add(() => {
      // Step 4: Disable loader/spinner
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

  updateParam(limitVal: any) {
    this.limit = limitVal;
  }

  /*filter(filterVal: any) {
    this.nameFilter = filterVal;
    console.log(filterVal);
  }*/
  filterArray(value: string): any{
    // this.filteredUsers =  this.teacherInfo.filter((user: any) => user.name === value);
    if(value) {
      this.filteredUsers =  this.teacherInfo.filter((user: any) => user.name.toLowerCase().includes(value.toLowerCase()));
    } else  {
      this.filteredUsers = this.teacherInfo;
    }
  // if(this.filteredUsers.length > 0){
  //   console.log(this.filteredUsers);
  //   return this.filteredUsers;
  // }else{
  //   console.log(this.teacherInfo);
  //   return this.teacherInfo;
  // }
  }
}