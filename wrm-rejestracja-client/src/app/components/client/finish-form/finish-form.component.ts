import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'finish-form',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './finish-form.component.html',
    styleUrls: ['./finish-form.component.scss']
})
export class FinishFormComponent {
  
    

  constructor(private router: Router) {}

  goBack() {
        this.router.navigate(['/client-menu']);
  }
}
