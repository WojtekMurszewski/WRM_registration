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

    toForm() {
        this.router.navigate(['/appoinment-form']);
    }

}

