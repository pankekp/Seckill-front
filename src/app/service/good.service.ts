import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../pojo/result';
import {Good} from '../pojo/good';
import {environment} from '../../environments/environment';
import {GoodSeckillVo} from '../pojo/good-seckill-vo';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private http: HttpClient) {
  }

  getGoods(): Observable<Result<Good[]>> {
    return this.http.get<Result<Good[]>>(environment.url + 'goods');
  }

  getGood(goodId: number): Observable<Result<GoodSeckillVo>> {
    return this.http.get<Result<GoodSeckillVo>>(environment.url + 'good/' + goodId);
  }
}
