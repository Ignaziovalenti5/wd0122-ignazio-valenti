import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.method == 'GET') {
      console.log('Chiamata GET intercettata')
    }
    if(request.method == 'DELETE') {
      console.log('Chiamata DELETE intercettata')
    }

    return next.handle(request);
  }
}
