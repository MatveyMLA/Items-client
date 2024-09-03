import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/item-service/items.service';
import { Item } from '../../../domains/item';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
 
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  isShowDetails: boolean = false;
  currentCardIndex: number = -1;
  item!: Item;

  constructor(private itemService: ItemsService,
     private log: NGXLogger,
     private router: Router){}

  ngOnInit(){
    this.itemService.getAll()
        .subscribe(items => this.items = items)
  }

  showItemDetails(cardIndex: number){
    this.currentCardIndex = cardIndex;
    this.isShowDetails ? this.isShowDetails = false : this.isShowDetails = true;
  }

  isCurrentCardToShowDetails(cardIndex: number): boolean{
    return this.currentCardIndex == cardIndex;
  }
  
  deleteItem(item: Item){
    this.log.info(`Start deleteItem in ItemComponent`);
    this.itemService.deleteItem(item.id).subscribe(isDeleted => {
      if(isDeleted){
        const itemInd = this.items.findIndex(arrItem => arrItem.id === item.id);
        this.items.splice(itemInd, 1);
        this.isShowDetails = false;
      }
    });
  }

  showOrders(){
    this.router.navigate(['orders']);
  }
}
