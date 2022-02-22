import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreviousDataComponent } from './previous-data/previous-data.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  { path: "student-login", component: StudentLoginComponent },
  { path: "syllabus", component: SyllabusComponent },
  { path: "previous-data", component: PreviousDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SyllabusComponent, PreviousDataComponent]