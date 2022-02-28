import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  routeParameter;
  student: Student;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.routeParameter =  Number(this.route.snapshot.paramMap.get("id"));
    this.student = this.studentService.Students.find((s) => s.regNo === this.routeParameter) || {} as Student;
   }

  ngOnInit(): void {
    
  }

  onDelete(): void {
    this.studentService.Students.splice(this.studentService.Students.findIndex((s) => s.regNo === this.routeParameter), 1)
    this.router.navigate(["students"]);
  }
}
