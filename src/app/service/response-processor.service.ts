import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {InfoStorageService} from './info-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResponseProcessorService implements HttpInterceptor {

  constructor(private infoStorageService: InfoStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cookieReq = null;
    if (req.url.indexOf('login')) {
      cookieReq = req.clone(
        {
          withCredentials: true
        }
      );
    } else {
      cookieReq = req.clone(
        {
          headers: req.headers.set('Cookie', this.infoStorageService.getCookie()),
          withCredentials: true
        }
      );
    }
    return next
      .handle(cookieReq)
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
