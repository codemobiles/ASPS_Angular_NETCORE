import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  mProductArray = [111, 444, 556, 77];

  constructor(private router: Router) { }

  searchTextChanged = new Subject<String>();

  ngOnInit() {
    this.searchTextChanged.pipe(
      debounceTime(1000)
    ).subscribe(term => this.onSearch(term));
  }

  onSearch(text: String) {
    console.log(text);
  }

  getOutOfStock() {
    return 123;
  }

  deleteProduct(id: Number) {
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  editProduct(id: Number) {
    this.router.navigate([`stock/edit/${id}`])
  }

}
