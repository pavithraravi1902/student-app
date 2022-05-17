import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { MaterialModule } from '../common-module/material/material.module';

import { SortingPipe } from '../common-module/common-pipe/sort.pipe';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { ItemPopoverComponent } from './item-popover/item-popover.component';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    SortingPipe,
    ItemPopoverComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class TeacherModule { }
