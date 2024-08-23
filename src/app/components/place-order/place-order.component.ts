import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})

export class PlaceOrderComponent implements OnInit {
  @Input() cocktail!: Cocktail; // Input property to receive the Cocktail object from the parent component
  orderForm: FormGroup; // Reactive form group for handling the order form

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    // Initialize the form group with a required customerName field
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required] // Customer name is required
    });
  }

  ngOnInit(): void {}

  // Method to handle order placement
  placeOrder(): void {
    // Check if the form is invalid and exit if true
    if (this.orderForm.invalid) {
      return;
    }

    // Extract customerName from the form value
    const { customerName } = this.orderForm.value;

    // Call the createOrder method from the OrderService
    this.orderService.createOrder(this.cocktail.id, customerName).subscribe({
      next: () => {
        window.alert('Your order has been placed successfully!');
        this.orderForm.reset(); // Reset the form after successful order
      },
      error: (err) => {
        console.error('Order placement failed:', err);
        window.alert('There was a problem placing your order. Please try again.');
      }
    });
  }
}


