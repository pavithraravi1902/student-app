import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UniqueRegnoDirective } from './unique-regno.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { StudentFilterPipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UniqueRegnoDirective,
    // StudentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
