import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { NetworkService } from 'src/app/services/network.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  mProductArray: Product[]

  constructor(private router: Router, private networkService: NetworkService) { }

  searchTextChanged = new Subject<String>();

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

  ngOnInit() {
    this.searchTextChanged.pipe(
      debounceTime(1000)
    ).subscribe(term => this.onSearch(term));

    this.feedData();
  }

  onSearch(text: String) {
    console.log(text);
  }

  getOutOfStock(): number {
    return this.mProductArray.filter(
      item => {
        return item.stock <= 0;
      }
    ).length;
  }

  deleteProduct(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.networkService.deleteProduct(id).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              data.message,
              'success'
            );

            this.feedData();
          },
          error => {
            alert(JSON.stringify(error))
          }
        );
      }
    })
  }

  editProduct(id: Number) {
    this.router.navigate([`stock/edit/${id}`])
  }

}
