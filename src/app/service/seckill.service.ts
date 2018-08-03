import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../pojo/result';
import {OrderInfo} from '../pojo/order-info';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeckillService {

  constructor(private http: HttpClient) {
  }

  seckill(userId: number, goodId: number): Observable<Result<OrderInfo>> {
    const orderInfo: OrderInfo = {
      id: null,
      userId: userId,
      goodId: goodId,
      contactInfoId: null,
      goodName: null,
      num: null,
      price: null,
      status: null,
      createTime: null,
      payTime: null
    };
    return this.http.post<Result<OrderInfo>>(environment.url + 'seckill', orderInfo);
  }
}
