import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Item } from 'src/app/item';
import { ItemsService } from 'src/app/services/item-service/items.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  editItemForm!: FormGroup;
  item!: Item;

  constructor(private formBuilder: FormBuilder, 
              private location: Location,
              private itemService: ItemsService,
              private log: NGXLogger){}

  ngOnInit(){
   this.initItem();
   this.initForm();
  }

  initItem(){
    let val = this.location.getState() as {item: Item};
    this.item = val.item;
  }

  initForm(){
    this.editItemForm = this.formBuilder.group({
      name: [this.item.name, Validators.required],
      description: [this.item.description, Validators.required],
      price: [this.item.price, Validators.required]
    })
  }

  onSubmit() {
    this.log.info('Start ItemEditComponent.onSubmit()');
    const editedItem = this.editItemForm.value
    this.item.name = editedItem.name;
    this.item.description = editedItem.description;
    this.item.price = editedItem.price;

    this.itemService.saveItem(this.item)
    .subscribe(item => {
      console.log(item)
    });
  }
}
