import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
    selector: 'app-client-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './client-menu.component.html',
    styleUrl: './client-menu.component.scss',
})

export class ClientMenuComponent{

    constructor(private router: Router, private authService: AuthService) {}

    toVisitForm() {
        this.router.navigate(['/appointment-form']);
    }

    toTestForm() {
        this.router.navigate(['/examination-form']);
    }

    logout() {
        this.authService.logout();
      }
}

