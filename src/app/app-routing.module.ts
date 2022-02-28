import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './student/form/form.component';
import { ListComponent } from './student/list/list.component';
import { ViewComponent } from './student/view/view.component';

const routes: Routes = [
  {
    path: "students",
    component: ListComponent
  },
  {
    path: "students/new",
    component: FormComponent
  },
  {
    path: "students/:id",
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
