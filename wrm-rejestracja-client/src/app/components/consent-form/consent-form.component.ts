import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-consent-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './consent-form.component.html',
    styleUrl: './consent-form.component.scss'
})

export class ConsentFormComponent {

    consentForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
      this.consentForm = this.fb.group({
        registrationType: ['', Validators.required],
        marketingConsent: [false],
        personalDataConsent: [false],
        additionalInfoConsent: [false],
        emergencyContactConsent: [false],
        dataSharingConsent: [false],
      });
    }

    consentFormSubmit() {
      if (this.consentForm.valid) {
          const urls = ['/add-visit', '/add-test']; 
          const data = this.consentForm.value;

          const headers = new HttpHeaders({
              'Content-Type': 'application/json',
          });

          urls.forEach(url => {
              this.http.post(url, data, { headers }).subscribe(
                  (response: any) => {
                      console.log(response);
                  },
                  (error: any) => {
                      console.error(error);
                  }
              );
          });


          //this.router.navigate(['/']); Jakiś end screen czy coś można by dodać?
      }
  }

    goBack() {
        this.router.navigate(['/personal-data-form']);
    } 
}
