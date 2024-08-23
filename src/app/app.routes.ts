import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderQueueComponent } from './components/order-queue/order-queue.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

// Define the routes for the application
export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'order-queue', component: OrderQueueComponent },
    { path: 'place-order/:id', component: PlaceOrderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
