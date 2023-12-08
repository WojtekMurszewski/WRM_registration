import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-appointment-form',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './appointment-form.component.html',
    styleUrl: './appointment-form.component.scss'
})

export class AppointmentFormComponent{

    constructor(private router: Router) {}

    appointment = {
        doctor: '',
        preferredDate: '',
        preferredTime: '',
        visitType: '',
        symptoms: '',
        nfzVisit: false
    };
    
    goBack() {
        this.router.navigate(['/client-menu']);
    }

    appointmentForm() {
        console.log(this.appointment);
        this.router.navigate(['/personal-data-form']);
    }
}