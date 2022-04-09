import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UniqueRegnoDirective } from './common-module/common-directory/unique-regno.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import { AppInterceptor } from './common-module/common-interceptor/app.interceptor';
import { TeacherModule } from './teacher/teacher.module';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MaterialModule } from './common-module/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    UniqueRegnoDirective,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    TeacherModule,
    //MaterialModule
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
