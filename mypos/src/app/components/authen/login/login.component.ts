import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


// meta data
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(formValue: NgForm){
    alert(JSON.stringify(formValue.value))
  }

}
