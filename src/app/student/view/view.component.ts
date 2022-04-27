import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  routeParameter;
  student: Student = {} as Student;


  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.routeParameter = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.studentService.getStudentById(this.routeParameter).subscribe((response) => {
      this.student = response;
    }, (error) => {
      console.log("Error: ", error);
    });
  }

  onDelete(): void {
    alert("Are you sure to delete this data?");
    this.studentService.removeStudentById(this.routeParameter).subscribe(() => {
      alert("Deleted successfully!");
      this.router.navigate(["students"]);
    }, (error) => {
      console.log("Error: ", error);
    });
  }
}
