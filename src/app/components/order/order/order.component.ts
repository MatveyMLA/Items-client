import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { OrdersService } from 'src/app/services/order-service/orders.service';
import { Order } from 'src/domains/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  orders: Order[] = [];


  constructor(private ordersService: OrdersService, private log: NGXLogger){}

  ngOnInit(): void {
    this.ordersService.getAll()
    .subscribe(orders => this.orders = orders);
  }

}
