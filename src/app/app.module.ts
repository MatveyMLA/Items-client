import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
