import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from 'src/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from 'src/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from 'src/product-card/product-card.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavBarComponent,
      ShoppingCartComponent,
      ProductCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
