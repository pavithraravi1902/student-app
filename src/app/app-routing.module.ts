import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExamInfoComponent } from './exam-info/exam-info.component';
import { HomeComponent } from './home/home.component';
import { PreviousDataComponent } from './previous-data/previous-data.component';
import { RegistationInfoComponent } from './registation-info/registation-info.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  { path: "student-login", component: StudentLoginComponent },
  { path: "syllabus", component: SyllabusComponent },
  { path: "previous-data", component: PreviousDataComponent },
  { path: "exam-info", component: ExamInfoComponent },
  { path: "reg-info", component: RegistationInfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SyllabusComponent, PreviousDataComponent, ExamInfoComponent, RegistationInfoComponent]