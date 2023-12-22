import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-appointment-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './appointment-form.component.html',
    styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  
    
    appointmentForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
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
      this.dataService.appointmentFormData = this.appointmentForm.value;
      this.router.navigate(['/personal-data-form']);
    }
  }

  goBack() {
        this.router.navigate(['/client-menu']);
        this.dataService.appointmentFormData = {};
  }
}
