import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from '../../student/services/student.service';

@Directive({
  selector: '[uniqueRegNo]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueRegnoDirective, multi: true }]
})
export class UniqueRegnoDirective implements AsyncValidator {

  constructor(private studentService: StudentService) {
    console.log("ctor unique");
   }
  validate(reg: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.studentService.getByRegNo(reg.value);
  }
}
