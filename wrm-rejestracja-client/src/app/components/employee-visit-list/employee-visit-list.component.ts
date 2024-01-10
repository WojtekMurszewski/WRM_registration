import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-employee-visit-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './employee-visit-list.component.html',
    styleUrl: './employee-visit-list.component.scss'
})

export class EmployeeVisitListComponent implements OnInit {
    visits: any[] = [];
  
    private url = 'http://localhost:3000'; 
  
    constructor(private http: HttpClient) {}
  
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
            console.log('Usunięto wizytę:', response);
            this.loadData(); 
          },
          (error) => {
            console.error(error);
          }
        );
      }
}