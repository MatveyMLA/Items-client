import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { OrderComponent } from './components/order/order/order.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemComponent},
  {path: 'items-edit', component: ItemEditComponent},
  {path: 'orders', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
