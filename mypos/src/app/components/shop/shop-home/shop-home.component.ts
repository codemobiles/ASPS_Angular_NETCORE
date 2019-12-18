import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  mIsPaymentShow = false;
  mProductArray = Array<Product>();
  mOrderArray = Array<Product>();
  mTotalPrice = 0;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.feedData();
  }

  onClickAddOrder(item: Product, isDecrease: boolean) {
    if (this.mOrderArray.indexOf(item) !== -1) {
      if (isDecrease) {
        if (item.qty > 1) {
          item.qty--;
        }
      } else {
        item.qty++;
      }
    } else {
      item.qty = 1;
      this.mOrderArray.unshift(item)
    }

    this.sumPrice();
  }

  sumPrice() {
    this.mTotalPrice = 0;
    this.mOrderArray.forEach(item => {
      this.mTotalPrice += item.qty * item.price;
    });
  }

  onClickRemoveOrder(item: Product) {
    this.mOrderArray.splice(this.mOrderArray.indexOf(item), 1)
    this.sumPrice();

    if (this.mOrderArray.length === 0 && this.mTotalPrice === 0) {
      this.mIsPaymentShow = false;
    }
  }

  isSelectItem(item: Product): boolean{
    return this.mOrderArray.indexOf(item) !== -1;
  }

  onClickPayment() {
    if (this.mTotalPrice > 0) {
      this.mIsPaymentShow = !this.mIsPaymentShow
    } else {
      alert("Order not empty")
    }
  }

  feedData() {
    this.networkService.getAllProduct().subscribe(
      data => {
        this.mProductArray = data.result.map(
          item => {
            var image = item.image
            if (image !== null) {
              item.image = this.networkService.productImageURL + "/" + image
            }
            return item
          }
        );
      },
      error => {
        alert(JSON.stringify(error))
      }
    );
  }

}
