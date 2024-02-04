import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'visit-view',
    standalone: true,
    imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
    templateUrl: './visit-view.component.html',
    styleUrl: './visit-view.component.scss',
})

export class VisitViewComponent implements OnInit {
  visitId!: string;
  visitForm!: FormGroup;
  private url = 'http://localhost:3000'; 

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const visitIdParam = params.get('visitId');
      this.visitId = visitIdParam !== null ? visitIdParam : '';

      this.initForm();
      this.loadData();
    });
  }

  initForm() {
    this.visitForm = this.fb.group({
      doctor: this.fb.group({
        doctor: [''],
        preferredDate: [''],
        preferredTime: [''],
        visitType: [''],
        symptoms: [''],
        nfzVisit: [''],
      }),
      patient: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phoneNumber: [''],
        city: [''],
        street: [''],
        houseNumber: [''],
        zipcode: [''],
      }),
      consent: this.fb.group({
        registrationType: [''],
        marketingConsent: [''],
        personalDataConsent: [''],
        additionalInfoConsent: [''],
        emergencyContactConsent: [''],
        dataSharingConsent: [''],
      })
    });
  }

  loadData() {
    this.http.get<any>(`${this.url}/get-visit`, { params: { id: this.visitId } }).subscribe(
      (visit) => {
        this.visitForm.patchValue({
          doctor: {
            doctor: visit.doctor.doctor,
            preferredDate: visit.doctor.preferredDate,
            preferredTime: visit.doctor.preferredTime,
            visitType: visit.doctor.visitType,
            symptoms: visit.doctor.symptoms,
            nfzVisit: visit.doctor.nfzVisit,
          },
          patient: {
            firstName: visit.patient.firstName,
            lastName: visit.patient.lastName,
            email: visit.patient.email,
            phoneNumber: visit.patient.phoneNumber,
            city: visit.patient.city,
            street: visit.patient.street,
            houseNumber: visit.patient.houseNumber,
            zipcode: visit.patient.zipcode,
          },
          consent: {
            registrationType: visit.consent.registrationType,
            marketingConsent: visit.consent.marketingConsent,
            personalDataConsent: visit.consent.personalDataConsent,
            additionalInfoConsent: visit.consent.additionalInfoConsent,
            emergencyContactConsent: visit.consent.emergencyContactConsent,
            dataSharingConsent: visit.consent.dataSharingConsent,
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/employee-visit-list']);
}
}