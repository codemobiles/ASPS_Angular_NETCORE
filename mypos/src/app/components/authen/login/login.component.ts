import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { $ } from 'protractor';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';


// meta data
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private networkService: NetworkService) { }

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.router.navigate(["/stock"])
    }
  }

  login(formValue: NgForm) {
    this.networkService.login(formValue.value).subscribe(
      data => {
        if(data.token !== ''){
          this.authService.login(data.token);
          this.router.navigate(["/stock"])
        }else{
          //todo
        }
      },
      error => {
        alert(JSON.stringify(error))
      }
    );
  }

}
