import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './student/form/form.component';
import { ListComponent } from './student/list/list.component';
import { ViewComponent } from './student/view/view.component';
import { FormsModule } from '@angular/forms';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {
    path: "students",
    component: ListComponent
  },
  {
    path: "students/add",
    component: FormComponent
  },
  {
    path: "students/:id/edit",
    component: FormComponent,
    canDeactivate: [UnsavedGuard]
  },
  {
    path: "students/:id/view",
    component: ViewComponent
  },
  {
    path: "",
    redirectTo: "students",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
