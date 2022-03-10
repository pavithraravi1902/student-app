import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './student/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent) {
    if (component.isDirty == true) {
      return window.confirm("you have some unsaved data")
    }
    return true;
  }
  /*currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/
}
