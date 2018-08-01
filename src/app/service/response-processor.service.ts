import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseProcessorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((res: HttpErrorResponse) => {
          console.dir(res);
          let errorMessage = '';
          switch (res.status) {
            case 500:
              errorMessage = res.error.error;
              console.dir(res.error.message);
              break;
            case 400:
              errorMessage = res.error.message;
              break;
          }
          // 抛出的是用来提示用户的errorInfo
          return throwError(errorMessage);
        })
      );
  }
}
