import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("URL", request);

    if (!request.headers.get("x-client-key")) {
      request = request.clone({
        setHeaders: {
          "x-client-key": "student-app"
        }
      });
    }

    return next.handle(request);
  }
}
