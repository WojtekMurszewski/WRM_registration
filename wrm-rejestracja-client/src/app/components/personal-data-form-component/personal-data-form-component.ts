import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-personal-data-form',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './personal-data-form-component.html',
    styleUrl: './personal-data-form-component.scss',
})

export class PersonalDataFormComponent{

    constructor(private router: Router) {}

    personalData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        street: '',
        houseNumber: '',
        zipcode: '',
      };

    personalDataForm() {
        console.log(this.personalData);
    }

    goBack() {
        this.router.navigate(['/appoinment-form']);
    }

}
