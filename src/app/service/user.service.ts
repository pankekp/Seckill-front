import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../pojo/user';
import {Result} from '../pojo/result';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<Result<User>> {
    const params = new HttpParams()
      .set('username', String(user.username))
      .set('password', String(user.password));
    return this.http.get<Result<User>>(environment.url + 'login', {params: params, withCredentials: true});
  }

  testSession(): Observable<Result<User>> {
    const headers = new HttpHeaders()
      .set('Cookie', document.cookie);
    return this.http.get<Result<User>>(environment.url + 'session', {headers, withCredentials: true});
  }
}
