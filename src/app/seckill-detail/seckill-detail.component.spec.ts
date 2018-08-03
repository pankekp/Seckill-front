import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillDetailComponent } from './seckill-detail.component';

describe('SeckillDetailComponent', () => {
  let component: SeckillDetailComponent;
  let fixture: ComponentFixture<SeckillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
