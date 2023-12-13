import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-personal-data-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './personal-data-form.component.html',
    styleUrl: './personal-data-form.component.scss',
})

export class PersonalDataFormComponent {

    personalDataForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
        this.personalDataForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            city: ['', Validators.required],
            street: ['', Validators.required],
            houseNumber: ['', Validators.required],
            zipcode: ['', Validators.required],
        });
    }

    personalDataFormSubmit() {
        if (this.personalDataForm.valid) {
          const urls = ['/add-visit', '/add-test'];
          const data = this.personalDataForm.value;
    
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
          });
    
          urls.forEach(url => {
            this.http.post(url, data, { headers }).subscribe(
              (response: any) => {
                console.log(response);
                this.router.navigate(['/consent-form']);
              },
              (error: any) => {
                console.error(error);
              }
            );
          });
        }
      }

    goBack() {
        this.router.navigate(['/app-appointment-form']);
    }
}
