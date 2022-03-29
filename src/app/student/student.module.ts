import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { StudentFilterPipe } from '../name.pipe';
import { SortPipe } from '../sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemPopoverComponent } from './item-popover/item-popover.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    FormComponent,
    StudentFilterPipe,
    ItemPopoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule

  ], providers: [],

})
export class StudentModule { }
