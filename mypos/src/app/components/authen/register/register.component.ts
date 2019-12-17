import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mPosition = ['Admin', 'Cashier'];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }

  register(formValue: NgForm) {
    this.networkService.register(formValue.value).subscribe(
      data => {
        alert(data.result);
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

  validatePassword(value) {
    return value.password !== value.confirm_password || value.password === '';
  }
}
