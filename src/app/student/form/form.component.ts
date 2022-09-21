import { HttpClient } from '@angular/common/http';
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
  selectedFile: File;

  public get RouteParameter(): number {
    return this.routeParameter;
  }

  public get ValidRegNo(): boolean {
    return this.validate;
  }

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private Http: HttpClient) {
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
        this.student = res;
        console.log(this.student, "pavithraravi")
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
          .subscribe((res) => {
            console.log(res, "update")
            confirm("Updated successfully!");
            console.log(this.student);
            this.router.navigate(["students"]);
          }, (error) => {
            console.log("Error: ", error);
          });
      }
      else {
        this.studentService.createData(this.student)
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

  onFileSelected(event: any) {
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const filedata = new FormData();
    filedata.append('image', this.selectedFile, this.selectedFile.name);
    //this.Http.post(`http://localhost:3000/student/image`, filedata)
  }
  
}
