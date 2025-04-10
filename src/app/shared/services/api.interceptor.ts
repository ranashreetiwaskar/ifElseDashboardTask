import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiRequest = req.clone();

    console.log('Intercepted request:', apiRequest);

    return next.handle(apiRequest).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          
          console.log('Successful response:', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        
        console.error('API Error:', error);
        
        return throwError(() => error);
      })
    );
  }
}
