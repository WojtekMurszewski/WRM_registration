import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../../data.service';

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
      additionalInfoConsent: [false],
      personalDataConsent: [false, Validators.required],
      emergencyContactConsent: [false, Validators.required],
      dataSharingConsent: [false, Validators.required],
    });
  }

  consentFormSubmit() {
    if (this.consentForm.valid) {
      this.dataService.consentFormData = this.consentForm.value;

      let combinedData;
      let url = "";

      if (this.dataService.appointmentFormData && Object.keys(this.dataService.appointmentFormData).length !== 0)  {
        combinedData = {
          doctor: this.dataService.appointmentFormData,
          patient: this.dataService.personalDataFormData,
          consent: this.dataService.consentFormData,
        };
        url = 'http://localhost:3000/add-visit';
      } else if (this.dataService.examinationFormData && Object.keys(this.dataService.examinationFormData).length !== 0) {
        combinedData = {
          testType: this.dataService.examinationFormData,
          patient: this.dataService.personalDataFormData,
          consent: this.dataService.consentFormData,
        };
        url = 'http://localhost:3000/add-test';
      }

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http.post(url, combinedData, { headers, responseType: 'text' as 'text' }).subscribe(
        (response: any) => {
          this.dataService.resetData();
          this.router.navigate(['/finish-form']);
        },
        (error: any) => {
          console.error(error);
        });
    }
  }

  goBack() {
      this.router.navigate(['/personal-data-form']);
      this.dataService.consentFormData = {};
  }
}
