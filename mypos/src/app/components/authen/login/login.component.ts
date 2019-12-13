import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


// meta data
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  // DI
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(formValue: NgForm){
   // alert(JSON.stringify(formValue.value))
    this.router.navigate(["/stock"])
  }

}
