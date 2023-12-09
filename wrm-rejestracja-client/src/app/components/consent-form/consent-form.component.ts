import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-consent-form',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './consent-form.component.html',
    styleUrl: './consent-form.component.scss'
})

export class ConsentFormComponent {

    consentForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
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
        console.log(this.consentForm.value);
    }
  }

    goBack() {
        this.router.navigate(['/personal-data-form']);
    } 
}
