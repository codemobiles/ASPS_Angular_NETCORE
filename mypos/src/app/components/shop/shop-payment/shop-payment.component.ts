import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-payment',
  templateUrl: './shop-payment.component.html',
  styleUrls: ['./shop-payment.component.css']
})
export class ShopPaymentComponent implements OnInit {
  @Input("total") totalPayment: number;

  @Output("submit") mSubmit = new EventEmitter<void>();
  @Output("nickname") mNickName = new EventEmitter<String>();


  givenNumber = '0.00';

  constructor() { }

  ngOnInit() {
  }

  public get mChange(): number {
    const cash = Number(this.givenNumber.replace(/,/g, ''));
    const result = cash - this.totalPayment;
    if (result >= 0) {
      return result;
    } else {
      return 0;
    }
  }

  public get isPaidEnough() {
    var given = Number(this.givenNumber);
    if (given > 0 && given >= this.totalPayment) {
      return true;
    }
    return false;
  }

  onClickExact() {
    this.givenNumber = String(this.totalPayment);
  }

  onClickGiven(addGiven: number) {
    this.givenNumber = String(Number(this.givenNumber) + addGiven + '.00');
  }

  onClickReset() {
    this.givenNumber = '0.00';
  }

  onClickSubmit() {
     this.mSubmit.emit();
     this.mNickName.emit("YAI")
  }
}
