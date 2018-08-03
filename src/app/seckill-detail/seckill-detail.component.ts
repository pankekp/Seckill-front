import {Component, OnInit} from '@angular/core';
import {GoodSeckillVo} from '../pojo/good-seckill-vo';
import {ActivatedRoute, Router} from '@angular/router';
import {GoodService} from '../service/good.service';
import {UserService} from '../service/user.service';
import {InfoStorageService} from '../service/info-storage.service';
import {NzMessageService} from 'ng-zorro-antd';
import {mergeMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {SeckillService} from '../service/seckill.service';

@Component({
  selector: 'app-seckill-detail',
  templateUrl: './seckill-detail.component.html',
  styleUrls: ['./seckill-detail.component.css']
})
export class SeckillDetailComponent implements OnInit {

  private goodId: number;
  goodSeckill: GoodSeckillVo;

  constructor(private routeInfo: ActivatedRoute,
              private goodService: GoodService,
              private userService: UserService,
              private infoStorageService: InfoStorageService,
              private messageService: NzMessageService,
              private seckillService: SeckillService,
              private router: Router) {
    this.goodId = 0;
    this.goodSeckill = null;
  }

  ngOnInit() {
    this.routeInfo.params
      .pipe(
        mergeMap(
          (params) => {
            return params['id'];
          }
        ),
        mergeMap(
          (goodId) => {
            return this.goodService.getGood(Number(goodId));
          }
        )
      )
      .subscribe(
        (data) => {
          data.data.cover = environment.imgUrl + data.data.cover + '.jpg';
          data.data.start = this.parseTimestamp(data.data.start);
          data.data.end = this.parseTimestamp(data.data.start);
          this.goodSeckill = data.data;
        }
      );
  }

  seckill(goodId: number) {
    if (this.infoStorageService.getUser() == null) {
      this.messageService.info('Please login');
      return;
    }
    this.seckillService.seckill(this.infoStorageService.getUser().id, goodId)
      .subscribe(
        (data) => {
          this.infoStorageService.saveOrder(data.data);
          this.messageService.create('success', data.message);
          this.router.navigate(['/order']);
        },
        (error) => {
          this.messageService.create('error', error);
        }
      );
  }

  parseTimestamp(timeStamp: string): string {
    const date = new Date(timeStamp);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }
}
