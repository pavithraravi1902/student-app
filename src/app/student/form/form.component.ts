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
  /// student: Student = {} as Student;
  validate = false;
  isDirty = false;
  isDisable = false;
  readData: any;
  data: any;
  result: any;
  

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
      /*this.studentService.getStudentById(this.routeParameter).subscribe((response) => {
        this.student = response;
      }, (error) => {
        console.log("Error: ", error);
      });*/
      this.studentService.getStudentById(this.routeParameter).subscribe((res) => {
        console.log(res, 'res==>');
        this.readData = res;
        //this.data = this.readData;
        this.data= this.readData.data;
        this.result= this.data[0];
        console.log(this.result, "pavithra");
      });
    }
  }

  canDeactivate(): boolean {
    return !this.isDirty;
  };

  save() {
    if (this.result.reg_no != null && this.result.username != "" && this.result.age != null && this.result.dept != "") {
      if (this.routeParameter && this.routeParameter > 0) {
        this.studentService.updateStudent(this.routeParameter, this.result)
          .subscribe((res) => {
            console.log(res, "update")
            confirm("Updated successfully!");
            this.router.navigate(["students"]);
          }, (error) => {
            console.log("Error: ", error);
          });
      }
      else {
        this.studentService.createData(this.readData)
          .subscribe((res) => {
            console.log(res, "create");
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
    this.readData.username = "";
    this.readData.dept = "";
    this.readData.reg_no = NaN;
    this.readData.age = NaN;
  }

  public validateReg(): any {
    this.studentService.getByRegNo(this.readData.reg_no).subscribe(this.studentByRegNoSuccess.bind(this));
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
