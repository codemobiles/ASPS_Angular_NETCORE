import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPaymentComponent } from './shop-payment.component';

describe('ShopPaymentComponent', () => {
  let component: ShopPaymentComponent;
  let fixture: ComponentFixture<ShopPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
