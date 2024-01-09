import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

export class LoginComponent {
  showClientForm = true;
  showWorkerForm = false;
  isClientLoggedIn = false
  isEmployeeLoggedIn = false;
  clientForm: FormGroup;
  workerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.clientForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.workerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onClientLogin() {
    this.login(this.clientForm.value, '/client-menu');
  }

  onEmployeeLogin() {
    this.login(this.workerForm.value, '/employee-menu');
  }

  login(credentials: { username: string; password: string }, redirectRoute: string) {
    const url = 'http://localhost:3000/login';
    const data = credentials;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(url, data, { headers }).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate([redirectRoute]);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  toggleForm() {
    this.showClientForm = !this.showClientForm;
    this.showWorkerForm = !this.showWorkerForm;
  }
}
