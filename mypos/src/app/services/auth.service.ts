import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLogin() {
    var token = localStorage.getItem(environment.keyLocalAuthenInfo)
    return (token != null)
  }

  login(token: string) {
    localStorage.setItem(environment.keyLocalAuthenInfo, token);
  }

  logout() {
    localStorage.removeItem(environment.keyLocalAuthenInfo);
    this.router.navigate(["/login"])
  }
}
