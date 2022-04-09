import { NgModule } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


const MaterialComponents = [
  MatFormField,
  MatButtonModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
