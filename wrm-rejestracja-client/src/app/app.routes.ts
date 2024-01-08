import { Routes } from '@angular/router';
import { ClientMenuComponent } from './components/client-menu/client-menu.component';
import { EmployeeMenuComponent } from './components/employee-menu/employee-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { PersonalDataFormComponent } from './components/personal-data-form-component/personal-data-form.component';
import { ConsentFormComponent } from './components/consent-form/consent-form.component';
import { ExaminationmentFormComponent } from './components/examination-form/examination-form.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'client-menu', component: ClientMenuComponent},
    {path: 'employee-menu', component: EmployeeMenuComponent},
    {path: 'appointment-form', component: AppointmentFormComponent},
    {path: 'personal-data-form', component: PersonalDataFormComponent},
    {path: 'consent-form', component: ConsentFormComponent},
    {path: 'examination-form', component: ExaminationmentFormComponent},
];
