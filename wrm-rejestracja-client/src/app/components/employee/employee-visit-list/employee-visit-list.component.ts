import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-employee-visit-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule, RouterLink],
    templateUrl: './employee-visit-list.component.html',
    styleUrl: './employee-visit-list.component.scss'
})

export class EmployeeVisitListComponent implements OnInit {
    visits: any[] = [];

    private url = 'http://localhost:3000';

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {
      this.loadData();
    }

    loadData() {
      this.http.get<any[]>(`${this.url}/get-all-visits`).subscribe(
        (visits) => {
          this.visits = visits;
        },
        (error) => {
          console.error(error);
        }
      );
    }

    removeVisit(visitId: string) {
        this.http.post<any>(`${this.url}/remove-visit`, { id: visitId }).subscribe(
          (response) => {
            this.loadData();
          },
          (error) => {
            console.error(error);
          }
        );
    }

    viewVisit(visitId: string) {
      this.router.navigate(['/visit-view', visitId]);
    }

    goBack() {
      this.router.navigate(['/employee-menu']);
  }
}
