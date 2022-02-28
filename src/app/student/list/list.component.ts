import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentInfo: Student[] = [];
  constructor(private student: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentInfo = this.student.Students;
  }

  onEdit(student: Student): void {
    this.router.navigate(["students", student.regNo ]);
  }
}