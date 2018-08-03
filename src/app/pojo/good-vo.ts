import {Good} from './good';

export interface GoodVo extends Good {
  seckillPrice: number;
  seckillStock: number;
  start: string;
  end: string;
}
