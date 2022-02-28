import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StudentModule { }
