import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router) {}

  // Method to navigate to different views
  navigateTo(view: string): void {
    if (view === 'customer') {
      this.router.navigate(['/menu']); 
    } else if (view === 'bartender') {
      this.router.navigate(['/order-queue']); 
    }
  }
}