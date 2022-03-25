import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { ComponentCanDeactivate } from 'src/app/component-can-deactivate';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, ComponentCanDeactivate {
  routeParameter: number = -1;
  student: Student = {} as Student;
  validate = false;
  isDirty = false;
  isDisable = false;
  record: Student[] = [];
  public get RouteParameter(): number {
    return this.routeParameter;
  }
  public get ValidRegNo(): boolean {
    return this.validate;
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
  canDeactivate(): boolean {
    return !this.isDirty;
  };
  save() {
    if (this.student.regNo != null && this.student.name != "" && this.student.age != null && this.student.dept != "") {
      if (this.routeParameter && this.routeParameter > 0) {
        this.studentService.updateStudent(this.routeParameter, this.student)
          .subscribe((response) => {
            confirm("Updated successfully!")
            this.router.navigate(["students"]);
          });
      }
      else {
        this.studentService.createData(this.student)
          .subscribe((response) => {
            confirm("Saved successfully!");
           // this.dialogRef.close({result: "ok"});
            this.router.navigate(["students"]);
          },
          );
      };
      this.resetForm();
    }
  }
  private resetForm() {
    this.student.name = "";
    this.student.dept = "";
    this.student.regNo = NaN;
    this.student.age = NaN;
  }
  public validateReg(): any {
    this.studentService.getElementByregNo(this.student.regNo).subscribe(this.studentByRegNoSuccess.bind(this));
  }

  studentByRegNoSuccess(result: Student[]): void {
    if (result) {
      if (result.length > 0 && this.routeParameter==-1) {
        this.validate = true;
      } else {
        this.validate = false;
      }
    } else {
      this.validate = true;
    }
  }
  disablefn(): any {
    if (this.routeParameter >0) {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
  }
}
