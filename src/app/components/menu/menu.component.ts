import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail.model';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PlaceOrderComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch cocktails from the CocktailService
    this.cocktailService.getMenu().subscribe((data) => {
      this.cocktails = data;
    });
  }

  // Method to navigate to different views
  navigateTo(view: string): void {
    if (view === 'index') {
      this.router.navigate(['/index']); 
    }
  }
}

