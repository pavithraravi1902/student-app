import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UniqueRegnoDirective } from './unique-regno.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule} from 'ngx-pagination';
import { AppInterceptor } from './app.interceptor';
import { TeacherModule } from './teacher/teacher.module';
//import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UniqueRegnoDirective,
   // SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    TeacherModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
