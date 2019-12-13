import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mPosition = ['Admin', 'Cashier'];

  constructor() { }

  ngOnInit() {
  }

  register(formValue: NgForm){
    alert(JSON.stringify(formValue.value))
  }

  validatePassword(value){
    return value.password !== value.confirm_password || value.password === '';
  }
}
