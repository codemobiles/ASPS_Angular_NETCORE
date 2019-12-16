import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  mProduct: Product = null
  mImageSrc: string | ArrayBuffer = null

  // Don't forget import { Location }
  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params.id);
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
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
