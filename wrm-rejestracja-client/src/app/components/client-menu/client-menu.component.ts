import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './client-menu.component.html',
    styleUrl: './client-menu.component.scss',
})

export class ClientMenuComponent{

    constructor(private router: Router) {}

    toVisitForm() {
        this.router.navigate(['/appointment-form']);
    }

    toTestForm() {
        this.router.navigate(['/examination-form']);
    }
}

