import {Injectable} from '@angular/core';
import {User} from '../pojo/user';
import {OrderInfo} from '../pojo/order-info';

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

  public saveOrder(orderInfo: OrderInfo): void {
    localStorage.setItem('order', JSON.stringify(orderInfo));
  }

  public getOrder(): OrderInfo {
    return JSON.parse(localStorage.getItem('order'));
  }
}
