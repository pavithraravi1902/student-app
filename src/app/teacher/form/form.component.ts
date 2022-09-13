import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher, TeacherService } from '../service/teacher.service';
import { ComponentCanDeactivate } from 'src/app/common-module/component-can-deactivate';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-teacher-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}]
})
export class FormComponent implements OnInit, ComponentCanDeactivate {
  selectedFile: File = null;
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  };
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post(`http://localhost:3000/teachers`, fd)
      .subscribe(res => {
        console.log(res, "it worked");
      })
  }
  teacherForm: FormGroup;
  routeParameter: number = -1;
  isDirty: boolean = false;
  public get RouteParameter(): number {
    return this.routeParameter;
  }

  constructor(private formBuilder: FormBuilder, private teacherService: TeacherService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.params.subscribe((parameters) => {
      if (parameters["id"]) {
        this.routeParameter = Number(parameters["id"]);
      }
      this.teacherForm = this.getTeacherForm();
    }, (error) => {
      console.log("Error: ", error);
    });
  }

  public canDeactivate(): boolean {
    // return !this.teacherForm.dirty;
    return !this.isDirty;
  };

  ngOnInit(): void {
    if (this.routeParameter > 0) {
      this.teacherService.getTeacherById(this.routeParameter).subscribe((response: Teacher) => {
        this.populateForm(response);
      }, (error) => {
        console.log("Error: ", error);
      });
    }
  }
  onSubmit() {
    if (this.teacherForm.invalid) {
      console.log("Invalid form.");
      return;
    }
    if (this.teacherForm.value == " ") { }
    if (this.routeParameter && this.routeParameter > 0) {
      this.teacherService.updateTeacher(this.routeParameter, this.teacherForm.getRawValue())
        .subscribe((response) => {
          console.log(response);
          confirm("Updated successfully!");
          this.router.navigate(["teachers"]);
        }, (error) => {
          console.log("Error: ", error);
        });
    }
    else {
      const payload = this.teacherForm.getRawValue(); // To get disabled field value use getRawValue() else use just '<<form>>'.value
      if (payload.hasOwnProperty("id")) {
        delete payload.id;
      }
      this.teacherService.createData(payload)
        .subscribe((response) => {
          console.log(response);
          confirm("Saved successfully!");
          this.router.navigate(["teachers"]);
        }, (error) => {
          console.log("Error: ", error);
        }
        );
    };
  }

  getTeacherForm(): FormGroup {
    return this.formBuilder.group({
      name: [null || "", [Validators.required]],
      age: [{ value: null || "", disabled: this.routeParameter > 0 ? true : false }, [Validators.required]],
      dept: [null || "", [Validators.required]],
      id: [-1, [Validators.required]]
    });
  }

  private populateForm(teacher: Teacher): void {
    this.teacherForm.setValue(teacher);
  }

}
