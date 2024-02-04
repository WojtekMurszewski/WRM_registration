import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'test-view',
    standalone: true,
    imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
    templateUrl: './test-view.component.html',
    styleUrl: './test-view.component.scss',
})

export class TestViewComponent implements OnInit {
  testId!: string;
  testForm!: FormGroup;
  private url = 'http://localhost:3000'; 

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const testIdParam = params.get('testId');
      this.testId = testIdParam !== null ? testIdParam : '';

      this.initForm();
      this.loadData();
    });
  }

  initForm() {
    this.testForm = this.fb.group({
      testType: this.fb.group({
        testType: [''],
        preferredDate: [''],
        preferredTime: [''],
        additionalInfo: [''],
        nfzTest: [''],
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
// Pobieranie badania nie działa :(
  loadData() {
    this.http.get<any>(`${this.url}/get-test`, { params: { id: this.testId } }).subscribe(
      (test) => {
        this.testForm.patchValue({
          testType: {
            testType: test.testType.testType,
            preferredDate: test.testType.preferredDate,
            preferredTime: test.testType.preferredTime,
            additionalInfo: test.testType.additionalInfo,
            nfzTest: test.testType.nfzTest,
          },
          patient: {
            firstName: test.patient.firstName,
            lastName: test.patient.lastName,
            email: test.patient.email,
            phoneNumber: test.patient.phoneNumber,
            city: test.patient.city,
            street: test.patient.street,
            houseNumber: test.patient.houseNumber,
            zipcode: test.patient.zipcode,
          },
          consent: {
            registrationType: test.consent.registrationType,
            marketingConsent: test.consent.marketingConsent,
            personalDataConsent: test.consent.personalDataConsent,
            additionalInfoConsent: test.consent.additionalInfoConsent,
            emergencyContactConsent: test.consent.emergencyContactConsent,
            dataSharingConsent: test.consent.dataSharingConsent,
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/employee-test-list']);
}
}