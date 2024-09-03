import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../domains/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @Input()
  item!: Item;

  public isLike = false;

  @Output()
  deleteEvent = new EventEmitter<Item>();

  constructor(private router: Router){}

  deleteItem(){
    this.deleteEvent.emit(this.item);
  }

  redirectToEdit(){
      this.router.navigate(['items-edit'],{state: {item: this.item}})
  }

  // like(){
  //   if(this.isLike){
  //   this.isLike = true;
  //   }
  //   else {
  //     this.isLike = true;
  //   }
  // }
}
