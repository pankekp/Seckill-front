import {Component, OnInit} from '@angular/core';
import {InfoStorageService} from '../service/info-storage.service';
import {OrderInfo} from '../pojo/order-info';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderInfo: OrderInfo;

  constructor(private infoStorageService: InfoStorageService) {
  }

  ngOnInit() {
    this.orderInfo = this.infoStorageService.getOrder();
    this.orderInfo.createTime = this.parseTimestamp(this.orderInfo.createTime);
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

  pay(id: number) {

  }
}
