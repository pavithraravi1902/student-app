import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  routeParameter: number = -1;
  student: Student = {} as Student;
  validate = false;
  isDirty = true;
  confirmation: string = "";
  confirmation1: string = "";
  record: any;
  public get RouteParameter(): number {
    return this.routeParameter;
  }
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    // this.routeParameter = Number(this.route.snapshot.paramMap.get("id"));
    this.route.params.subscribe((parameters) => {
      if (parameters["id"]) {
        this.routeParameter = Number(parameters["id"]);
      }
    });
  }
  ngOnInit(): void {
    if (this.routeParameter > 0) {
      this.studentService.getStudentById(this.routeParameter).subscribe((response) => {
        this.student = response;
      });
    }
  }
  save() {
    if (this.student.regNo != null && this.student.name != "" && this.student.age != null && this.student.dept != "") {
      if (this.routeParameter && this.routeParameter > 0) {
        this.studentService.updateStudent(this.routeParameter, this.student)
          .subscribe((response) => {
            this.confirmation1 = ("Updated successfully.");
            //this.router.navigate(["students"]);
          });
      }
      else {
        this.studentService.createData(this.student)
          .subscribe((response) => {
            this.confirmation = ("Saved successfully.");
            this.resetForm()
          },
          );
      }
      this.resetForm()
      this.studentService.getStudents().subscribe();
    }
  }
  private resetForm() {
    this.student.name = "";
    this.student.dept = "";
    this.student.regNo = NaN;
    this.student.age = NaN;
  }
  public validateReg(): any {
    this.studentService.getElementByregNo(this.student.regNo).subscribe((result) => { this.record = (result) });
    if (this.record.length > 0) {
      return this.validate = true;
    } else {
      return this.validate = false;
    }
  }
  public onCancel() {
    if (this.student.regNo != null && this.student.name != "" && this.student.age != null && this.student.dept != ""){
      alert("You have unsaved data");
    } else{
    this.router.navigate(["students"]);
    }
  }
  touchEvent(value: any){
    console.log(value);
  }
}
