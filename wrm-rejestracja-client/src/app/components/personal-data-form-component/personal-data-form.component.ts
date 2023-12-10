import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-personal-data-form',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './personal-data-form.component.html',
    styleUrl: './personal-data-form.component.scss',
})

export class PersonalDataFormComponent {

    personalDataForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
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
            this.router.navigate(['/consent-form']);
            console.log(this.personalDataForm.value);
            }
    }

    goBack() {
        this.router.navigate(['/app-appointment-form']);
    }
}
