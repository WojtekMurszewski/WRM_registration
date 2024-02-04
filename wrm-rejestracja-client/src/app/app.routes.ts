import { Routes } from '@angular/router';
import { ClientMenuComponent } from './components/client/client-menu/client-menu.component';
import { EmployeeMenuComponent } from './components/employee/employee-menu/employee-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentFormComponent } from './components/client/appointment-form/appointment-form.component';
import { PersonalDataFormComponent } from './components/client/personal-data-form-component/personal-data-form.component';
import { ConsentFormComponent } from './components/client/consent-form/consent-form.component';
import { ExaminationmentFormComponent } from './components/client/examination-form/examination-form.component';
import { EmployeeTestVisitComponent } from './components/employee/employee-test-list/employee-test-list.component';
import { EmployeeVisitListComponent } from './components/employee/employee-visit-list/employee-visit-list.component';
import { VisitViewComponent } from './components/employee/visit-view/visit-view.component';
import { TestViewComponent } from './components/employee/test-view/test-view.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'client-menu', component: ClientMenuComponent},
    {path: 'employee-menu', component: EmployeeMenuComponent},
    {path: 'appointment-form', component: AppointmentFormComponent},
    {path: 'personal-data-form', component: PersonalDataFormComponent},
    {path: 'consent-form', component: ConsentFormComponent},
    {path: 'examination-form', component: ExaminationmentFormComponent},
    {path: 'employee-test-list', component: EmployeeTestVisitComponent},
    {path: 'employee-visit-list', component: EmployeeVisitListComponent},
    {path: 'visit-view/:visitId', component: VisitViewComponent},
    {path: 'test-view/:visitId', component: TestViewComponent},
];
