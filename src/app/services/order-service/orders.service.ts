import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { Order } from 'src/domains/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private BASE_URL = 'http://localhost:8080/orders';

  constructor(private http: HttpClient, private log: NGXLogger) {
  }

  getAll(): Observable<Order[]>{
    this.log.info("Start getAll in OrdersService");
    return this.http.get<Order[]>(this.BASE_URL + '/all');
  }
}
