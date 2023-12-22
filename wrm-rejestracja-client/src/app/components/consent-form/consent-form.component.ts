import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-consent-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './consent-form.component.html',
    styleUrl: './consent-form.component.scss'
})

export class ConsentFormComponent {

    consentForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
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
          this.dataService.consentFormData = this.consentForm.value;
          const combinedData = {
            doctor: this.dataService.appointmentFormData,
            patient: this.dataService.personalDataFormData,
            consent: this.dataService.consentFormData,
          };
    
          const url = 'http://localhost:3000/add-visit';
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
          });
    
          this.http.post(url, combinedData, { headers }).subscribe(
            (response: any) => {
              console.log(response);
              this.dataService.resetData(); 
              this.router.navigate(['/client-menu']);
            },
            (error: any) => {
              console.error(error);
            }
          );
        }
      }

    goBack() {
        this.router.navigate(['/personal-data-form']);
        this.dataService.consentFormData = {};
    } 
}
