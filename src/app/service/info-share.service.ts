import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {InfoStorageService} from './info-storage.service';
import {User} from '../pojo/user';

@Injectable({
  providedIn: 'root'
})
export class InfoShareService {

  private subject: Subject<User>;
  private logoutUser: User;

  constructor(private infoStorageService: InfoStorageService) {
    this.subject = new Subject<User>();
    this.logoutUser = {
      id: 0,
      username: '',
      password: ''
    };
  }

  updateUserInfo(user: User): void {
    this.infoStorageService.saveUser(user);
    this.subject.next(user);
  }

  clearUserInfo(): void {
    this.subject.next(this.logoutUser);
  }

  getUserInfo(): Observable<User> {
    return this.subject.asObservable();
  }
}
