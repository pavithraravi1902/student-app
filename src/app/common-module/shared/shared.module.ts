import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPipe } from '../common-pipe';
import { AppInterceptor } from '../common-interceptor/app.interceptor';
import { UnsavedGuard } from '../common-guard/unsaved.guard';
import { UniqueRegnoDirective } from '../common-directory/unique-regno.directive';


@NgModule({
  declarations: [SortingPipe, AppInterceptor, UnsavedGuard, UniqueRegnoDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
