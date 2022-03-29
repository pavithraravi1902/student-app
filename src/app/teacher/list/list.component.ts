import { Component, OnInit } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Teacher, TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-list' ,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  teacherInfo: Array<Teacher> = [];

  constructor(private teacher: TeacherService, private router: Router) {
    this.teacher.getAllTeacher().subscribe((result: any) => {
      this.teacherInfo = result;
    });
  }

  ngOnInit(): void {
  }

  onEdit(teacher: Teacher): void {
    this.router.navigateByUrl(`teachers/${teacher.id}/edit`);
  }

  onView(teacher: Teacher): void {
    this.router.navigate(["teachers", teacher.id, "view"]);
  }

  onAdd(teacher: Teacher): void {
    this.router.navigate(["teachers", teacher]);
  }
}