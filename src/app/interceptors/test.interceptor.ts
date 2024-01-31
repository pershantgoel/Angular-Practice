import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = '123456';
    const modifiedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`).set('token','xyz')
    })
    return next.handle(modifiedReq);
  }
}
