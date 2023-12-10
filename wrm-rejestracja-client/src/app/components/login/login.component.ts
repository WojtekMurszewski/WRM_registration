import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(private router: Router) {}

    showClientForm = true;
    showWorkerForm = false;
    isClientLoggedIn = false
    isEmployeeLoggedIn = false;

    user ={
    username: '',
    password: '',
    };

    toggleForm() {
      this.showClientForm = !this.showClientForm;
      this.showWorkerForm = !this.showWorkerForm;
    }

      onClientLogin() {

        this.isClientLoggedIn = true;
        console.log(this.user);
        this.router.navigate(['/client-menu']);

      }

      onEmployeeLogin() {

        this.isEmployeeLoggedIn = true;
        console.log(this.user);
        this.router.navigate(['/employee-menu']);
      }

}
