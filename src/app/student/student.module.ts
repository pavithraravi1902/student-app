import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemPopoverComponent } from './item-popover/item-popover.component';
import { StudentFilterPipe } from '../common-module/common-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../common-module/material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    FormComponent,
    ItemPopoverComponent,
    StudentFilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ], providers: [],

})
export class StudentModule { }
