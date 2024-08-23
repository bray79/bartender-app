import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { Cocktail } from '../../models/cocktail.model';
import { OrderService } from '../../services/order.service';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-queue.component.html',
  styleUrls: ['./order-queue.component.css']
})
export class OrderQueueComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private cocktailService: CocktailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch orders from the OrderService
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;

      // Sort orders so that those with status not equal to "Pick Up" come first
      this.orders.sort((a, b) => {
        if (a.status !== 'Pick Up' && b.status === 'Pick Up') {
          return -1;
        } else if (a.status === 'Pick Up' && b.status !== 'Pick Up') {
          return 1;
        } else {
          return 0;
        }
      });

      // Fetch cocktail names for each order
      this.orders.forEach(order => {
        this.cocktailService.getCocktailById(order.cocktailId).subscribe((cocktail: Cocktail) => {
          order.cocktailName = cocktail.name;
        });
      });
    });
  }

  // Method to navigate to different views
  navigateTo(view: string): void {
    if (view === 'index') {
      this.router.navigate(['/index']); 
    }
  }

  // Method to set the status of an order to "Pick Up"
  setStatusToPickup(orderId: string): void {
    this.orderService.updateOrderStatus(orderId, 'Pick Up').subscribe(() => {
      this.ngOnInit(); // Refresh the list after updating the status
    });
  }
}
