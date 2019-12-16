import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { $ } from 'protractor';
import { AuthService } from 'src/app/services/auth.service';


// meta data
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.router.navigate(["/stock"])
    }
  }

  login() {
    // alert(JSON.stringify(formValue.value))
    this.router.navigate(["/stock"])
  }

}
