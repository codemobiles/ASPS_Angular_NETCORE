import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  mProduct: Product = null
  mImageSrc: string | ArrayBuffer = null

  // Don't forget import { Location }
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private networkService: NetworkService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.networkService.getProduct(params.id).subscribe(
          data => {
            this.mProduct = data.result;
            if(this.mProduct.image !== null){
              this.mProduct.image = this.networkService.productImageURL + "/" + this.mProduct.image
            }
          },
          error => {
            console.log(JSON.stringify(error));
            this.location.back();
          }
        );
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.networkService.updateProduct(this.mProduct, this.mProduct.productId.toString()).subscribe(
      data => {
        alert(data.message);
        this.location.back();
      },
      error => {
        console.log(JSON.stringify(error));
        this.location.back();
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
