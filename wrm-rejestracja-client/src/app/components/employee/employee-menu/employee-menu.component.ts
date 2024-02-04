import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './employee-menu.component.html',
    styleUrl: './employee-menu.component.scss'
})

export class EmployeeMenuComponent {

    constructor(private router: Router) {}

    toVisitList() {
        this.router.navigate(['/employee-visit-list']);
    }

    toTestList() {
        this.router.navigate(['/employee-test-list']);
    }
  }