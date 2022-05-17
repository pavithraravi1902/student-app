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
// import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../common-module/material/material.module';
//import { MatFormField } from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

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
