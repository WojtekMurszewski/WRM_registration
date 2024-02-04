import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataService } from '../../../data.service';

@Component({
    selector: 'app-personal-data-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './personal-data-form.component.html',
    styleUrl: './personal-data-form.component.scss',
})

export class PersonalDataFormComponent {

    personalDataForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
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
        this.dataService.personalDataFormData = this.personalDataForm.value;
        this.router.navigate(['/consent-form']);
      }
    }

    goBack() {
        if (this.dataService.appointmentFormData && Object.keys(this.dataService.appointmentFormData).length !== 0) {
        this.router.navigate(['/appointment-form']);
        this.dataService.personalDataFormData = {};
        }
        else if (this.dataService.examinationFormData && Object.keys(this.dataService.examinationFormData).length !== 0) {
            this.router.navigate(['/examination-form']);
            this.dataService.personalDataFormData = {};
            }
    }
}
