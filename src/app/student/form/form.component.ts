import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { ComponentCanDeactivate } from 'src/app/common-module/component-can-deactivate';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, ComponentCanDeactivate {
  routeParameter: number = -1;
  student: Student = {} as Student;
  validate = false;
  isDirty = false;
  isDisable = false;

  public get RouteParameter(): number {
    return this.routeParameter;
  }

  public get ValidRegNo(): boolean {
    return this.validate;
  }

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
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
      }, (error) => {
        console.log("Error: ", error);
      });
    }
  }

  canDeactivate(): boolean {
    return !this.isDirty;
  };

  save() {
    if (this.student.reg_no != null && this.student.username != "" && this.student.age != null && this.student.dept != "") {
      if (this.routeParameter && this.routeParameter > 0) {
        this.studentService.updateStudent(this.routeParameter, this.student)
          .subscribe((response) => {
            confirm("Updated successfully!");
            this.router.navigate(["students"]);
          }, (error) => {
            console.log("Error: ", error);
          });
      }
      else {
        this.studentService.createData(this.student)
          .subscribe((response) => {
            confirm("Saved successfully!");
            this.router.navigate(["students"]);
          }, (error) => {
            console.log("Error: ", error);
          }
          );
      };
      this.resetForm();
    }
  }
  private resetForm() {
    this.student.username = "";
    this.student.dept = "";
    this.student.reg_no = NaN;
    this.student.age = NaN;
  }

  public validateReg(): any {
    this.studentService.getByRegNo(this.student.reg_no).subscribe(this.studentByRegNoSuccess.bind(this));
  }

  studentByRegNoSuccess(result: Student[]): void {
    if (result) {
      if (result.length > 0 && this.routeParameter == -1) {
        this.validate = true;
      } else {
        this.validate = false;
      }
    } else {
      this.validate = true;
    }
  }

  disablefn(): any {
    if (this.routeParameter > 0) {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
  }
}
