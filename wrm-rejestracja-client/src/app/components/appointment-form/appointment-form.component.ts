import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-appointment-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './appointment-form.component.html',
    styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  
    
    appointmentForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.appointmentForm = this.fb.group({
      doctor: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      visitType: ['', Validators.required],
      symptoms: ['', Validators.required],
      nfzVisit: [false, Validators.required]
    });
  }

  appointmentFormSubmit() {
    if (this.appointmentForm.valid) {
        const urls = ['/add-visit', '/add-test'];
        const data = this.appointmentForm.value;

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        urls.forEach(url => {
            this.http.post(url, data, { headers }).subscribe(
                (response: any) => {
                    console.log(response);
                    this.router.navigate(['/personal-data-form']);
                },
                (error: any) => {
                    console.error(error);
                }
            );
        });
    }
  }

  goBack() {
        this.router.navigate(['/client-menu']);
  }
}
