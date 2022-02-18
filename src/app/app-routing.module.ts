import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {
    path: "studentData",
    component: StudentDataComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
