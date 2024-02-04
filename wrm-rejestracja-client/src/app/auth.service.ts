import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isClientLoggedIn = false;
  private isEmployeeLoggedIn = false;

  constructor(private router: Router) {}

  clientLogin() {
    this.isClientLoggedIn = true;
    this.isEmployeeLoggedIn = false;
  }

  employeeLogin() {
    this.isEmployeeLoggedIn = true;
    this.isClientLoggedIn = false;
  }

  isLoggedInClient() {
    return this.isClientLoggedIn;
  }

  isLoggedInEmployee() {
    return this.isEmployeeLoggedIn;
  }

  logout() {
    this.isClientLoggedIn = false;
    this.isEmployeeLoggedIn = false;
    this.router.navigate(['']); 
  }
}
