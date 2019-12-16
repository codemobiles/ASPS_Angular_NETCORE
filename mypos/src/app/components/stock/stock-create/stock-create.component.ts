import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct: Product = new Product();
  mImageSrc: string | ArrayBuffer = null

  // Don't forget import { Location }
  constructor(private location: Location) {}

  ngOnInit() {
    this.mProduct.price = 0;
    this.mProduct.qty = 0;
    this.mProduct.stock = 0;
  }

  onCancel(){
    this.location.back();
  }

  onSubmit(){
    alert(JSON.stringify(this.mProduct));
  }

  onUploadImage(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.mImageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }

}
