import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-employee-test-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule, RouterLink],
    templateUrl: './employee-test-list.component.html',
    styleUrl: './employee-test-list.component.scss'
})

export class EmployeeTestVisitComponent implements OnInit {
    tests: any[] = [];

    private url = 'http://localhost:3000';

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {
      this.loadData();
    }

    loadData() {
      this.http.get<any[]>(`${this.url}/get-all-tests`).subscribe(
        (tests) => {
          this.tests = tests;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    removeTest(testId: string) {
      this.http.post<any>(`${this.url}/remove-test`, { id: testId }).subscribe(
        (response) => {
          this.loadData();
        },
        (error) => {
          console.error(error);
        }
      );
    }

    viewTest(testId: string) {
      this.router.navigate(['/test-view', testId]);
    }

    goBack() {
      this.router.navigate(['/employee-menu']);
  }
  }
