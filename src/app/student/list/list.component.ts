import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CanDeactivate, Router } from '@angular/router';
import { Student, StudentService } from '../services/student.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentInfo: Array<Student> = [];
  totalRecords: any;
  limit: number = 5;
  page: any = 1;
  arrange: any;
  nameFilter: string = "";
  options: any = this.nameFilter;
  readData: any;
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private student: StudentService, private router: Router) {
    this.student.getAllStudents().subscribe((result) => {
      this.studentInfo = result;
      this.totalRecords = this.studentInfo.length;
      console.log(this.studentInfo)
    }, (error) => {
      console.log("Error: ", error);
    });
  }
  //girdListData: MatTableDataSource<any>;
  displayedColumns: string[] = ["regNo", "name", "dept"];

  ngOnInit(): void {
    this.fillGrid();
    //this.girdListData.paginator = this.paginator;
    //console.log("pavithraravi", this.girdListData);
    this.student.getAllStudents().subscribe((res) => {
      console.log(res, 'res==>');
      this.readData = res.data;
    });
  }

  fillGrid() {
    this.student.getAllStudents().subscribe(data => {
      //this.girdListData = new MatTableDataSource(data);
    });
  }

  onEdit(student: Student): void {
    this.router.navigateByUrl(`students/${student.id}/edit`);
  }

  onView(student: Student): void {
    this.router.navigate(["students", student.id, "view"]);
  }

  sortRegNo() {
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

    if (this.arrange) {
      this.studentInfo.sort(function (a: any, b: any) {
        let x = a.dept.toLowerCase(), y = b.dept.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.studentInfo.sort(function (a: any, b: any) {
        let x = a.dept.toLowerCase(), y = b.dept.toLowerCase();
        return x < y ? 1 : x > y ? -1 : 0;
      });
    }
    this.arrange = !this.arrange;
  }
}