import { Injectable, Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './student/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent) {
    /*if (component.isDirty == true && component.student.regNo != null &&  component.student.name != "" && component.student.age != null && component.student.dept != "") {
      return window.confirm("you have some unsaved data");
    }else{
      return false;
    }*/
    return true;
  }
  /*currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/
}
