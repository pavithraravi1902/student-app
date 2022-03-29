import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent as StudentFormComponent } from './student/form/form.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { ViewComponent as StudentViewComponent, ViewComponent } from './student/view/view.component';
import { FormsModule } from '@angular/forms';
import { UnsavedGuard } from './unsaved.guard';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';
import { FormComponent as TeacherFormComponent } from './teacher/form/form.component';
import { ViewComponent as TeacherViewComponent } from './teacher/view/view.component';

const routes: Routes = [
  {
    path: "students",
    component: StudentListComponent
  },
  {
    path: "students/add",
    component: StudentFormComponent,
    canDeactivate: [UnsavedGuard]
  },
  {
    path: "students/:id/edit",
    component: StudentFormComponent,
    canDeactivate: [UnsavedGuard],
  },
  {
    path: "students/:id/view",
    component: StudentViewComponent
  },
  {
    path: "",
    redirectTo: "students",
    pathMatch: "full"
  },
  {
    path: "teachers",
    component: TeacherListComponent
  },
  {
    path: "teachers/add",
    component: TeacherFormComponent
  },
  {
    path: "teachers/:id/edit",
    component: TeacherFormComponent,
  },
  {
    path: "teachers/:id/view",
    component: TeacherViewComponent
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
