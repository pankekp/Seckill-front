import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  seckill(goodId: number): Observable<Result<string>> {
    const orderInfo: OrderInfo = {
      id: null,
      userId: null,
      goodId: goodId,
      contactInfoId: null,
      goodName: null,
      num: null,
      price: null,
      status: null,
      createTime: null,
      payTime: null
    };
    return this.http.post<Result<string>>(environment.url + 'seckill', orderInfo);
  }

  getSeckillResult(goodId: number): Observable<Result<number>> {
    const params = new HttpParams()
      .set('goodId', String(goodId));
    return this.http.get<Result<number>>(environment.url + 'seckillResult', {params: params});
  }
}
