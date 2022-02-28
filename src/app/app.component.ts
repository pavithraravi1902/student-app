import { Component } from '@angular/core';
import { StudentService } from './student/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-app';
  /**
   *
   */
  constructor(private student: StudentService) {
    this.student.Students = [
      {name: "sathish", age: 37, dept: "IT", regNo: 1 },
      {name: "pavithra", age: 23, dept: "IT", regNo: 2 }
    ];
  }
}
