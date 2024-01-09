import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public appointmentFormData: any = {};
  public personalDataFormData: any = {};
  public consentFormData: any = {};
  public examinationFormData: any = {};

  resetData() {
    this.appointmentFormData = {};
    this.personalDataFormData = {};
    this.consentFormData = {};
    this.examinationFormData = {};
  }
}