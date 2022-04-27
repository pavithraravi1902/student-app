import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { SortingPipe } from '../common-module/common-pipe/sort.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
//import { MaterialModule } from '../common-module/material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    SortingPipe,
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class TeacherModule { }
