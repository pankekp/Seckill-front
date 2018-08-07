import {Injectable} from '@angular/core';
import {User} from '../pojo/user';

@Injectable({
  providedIn: 'root'
})
export class InfoStorageService {

  public saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public clearUser(): void {
    localStorage.clear();
  }

  public saveOrderId(orderInfoId: number): void {
    localStorage.setItem('orderId', JSON.stringify(orderInfoId));
  }

  public getOrderId(): number {
    return Number(localStorage.getItem('orderId'));
  }

  public setCookie(cookie: string): void {
    localStorage.setItem('cookie', cookie);
  }

  public getCookie(): string {
    return localStorage.getItem('cookie');
  }
}
