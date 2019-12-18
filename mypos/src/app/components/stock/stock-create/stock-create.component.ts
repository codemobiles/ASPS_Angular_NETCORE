import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct: Product = new Product();
  mImageSrc: string | ArrayBuffer = null

  // Don't forget import { Location }
  constructor(private location: Location, private networkService: NetworkService) { }

  ngOnInit() {
    this.mProduct.price = 0;
    this.mProduct.qty = 0;
    this.mProduct.stock = 0;
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.networkService.addProduct(this.mProduct).subscribe(
      data => {
        alert(data.message);
        this.location.back();
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
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
