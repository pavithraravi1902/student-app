import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


const MaterialComponents = [
  MatFormField,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
