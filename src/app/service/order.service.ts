import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../pojo/result';
import {OrderInfo} from '../pojo/order-info';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrder(orderId: number): Observable<Result<OrderInfo>> {
    return this.http.get<Result<OrderInfo>>(environment.url + 'order/' + orderId);
  }
}
