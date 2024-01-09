import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-examination-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
    templateUrl: './examination-form.component.html',
    styleUrls: ['./examination-form.component.scss']
})
export class ExaminationmentFormComponent {
  
    
    examinationForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private dataService: DataService) {
    this.examinationForm = this.fb.group({
      testType: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      additionalInfo: ['', Validators.required],
      nfzTest: [false, Validators.required]
    });
  }

  examinationFormSubmit() {
    if (this.examinationForm.valid) {
      this.dataService.examinationFormData = this.examinationForm.value;
      this.router.navigate(['/personal-data-form']);
    }
  }

  goBack() {
        this.router.navigate(['/client-menu']);
        this.dataService.examinationFormData = {};
  }
}
