import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs'
import { NGXLogger } from 'ngx-logger';
import { Item } from 'src/domains/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private BASE_URL = 'http://localhost:8080/items';

  constructor(private http: HttpClient, private log: NGXLogger) {
   }

  getAll(): Observable<Item[]>{
    this.log.info("Start getAll in ItemService");
    return this.http.get<Item[]>(this.BASE_URL + '/all');
  }
  
  getByObjectId(itemID: string): Observable<Item>{
    this.log.info("Start getByObjectId in ItemService");
    const url = `${this.BASE_URL}/${itemID}`;
    return this.http.get<Item>(url);
  }

  deleteItem(itemID: string): Observable<Boolean> {
    this.log.info(`Start deleteItem() ${itemID} in ItemService`);
    const url = `${this.BASE_URL}/${itemID}`;
    return this.http.delete<Boolean>(url);
  }

  saveItem(item: Item): Observable<Item> {
    this.log.info(`Start saveItem() ${item.name} in ItemService`);
    console.log(item)
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 
    const options = {
      headers: httpHeaders
    }; 
    return this.http.post<Item>(this.BASE_URL, item, options);
  }
}

