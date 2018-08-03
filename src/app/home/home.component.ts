import {Component, OnInit} from '@angular/core';
import {Good} from '../pojo/good';
import {GoodService} from '../service/good.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[];

  constructor(private goodService: GoodService) {
  }

  ngOnInit() {
    this.goodService.getGoods()
      .subscribe(
        (data) => {
          data.data.map((good) => good.cover = environment.imgUrl + good.cover + '.jpg');
          this.goods = data.data;
        }
      );
  }

}
