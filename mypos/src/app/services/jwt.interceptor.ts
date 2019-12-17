import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){ }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwtToken = localStorage.getItem(environment.keyLocalAuthenInfo)

    if (jwtToken != null) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + jwtToken)
      });

      // simple way
      // return next.handle(cloned);

      // Intercept response too
      // npm i rxjs-compat
      return next.handle(cloned).do(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
              this.authService.logout(); 
            }
          }
        }
      );
    } else {
      return next.handle(req);
    }
  }
}
