import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  // Method to create a new order
  createOrder(cocktailId: string, customerName: string): Observable<Order> {
    const newOrder = {
      cocktailId,
      customerName,
      status: 'Preparing' // Default status for a new order
    };
    return this.http.post<Order>(this.apiUrl, newOrder);
  }

  // Method to get all orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  // Method to update the status of an existing order
  updateOrderStatus(orderId: string, status: string): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/${orderId}`, { status });
  }
}

