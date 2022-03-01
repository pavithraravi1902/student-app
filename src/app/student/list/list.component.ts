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

  studentInfo: Observable<Array<Student>>;
  
  constructor(private student: StudentService, private router: Router) { 
    this.studentInfo  = this.student.getAllStudents();
  }

  ngOnInit(): void {
  }

  onEdit(student: Student): void {
    this.router.navigate(["students", student.id ]);
  }
}
