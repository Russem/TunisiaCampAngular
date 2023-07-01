// shopping-cart.component.ts

import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartItems: Product[] = [];
  isPopupOpen = false;

  @ViewChild('cartIcon') cartIconRef!: ElementRef;
  @ViewChild('cartPopup') cartPopupRef!: ElementRef;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getCartItems();
  }

  togglePopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const cartIconElement = this.cartIconRef.nativeElement;
    const cartPopupElement = this.cartPopupRef.nativeElement;

    if (cartPopupElement.contains(event.target as Node) || cartIconElement.contains(event.target as Node)) {
      // Click occurred inside the cart icon or the popup, do nothing
      return;
    }

    this.isPopupOpen = false;
  }

  removeFromCart(product: Product): void {
    this.shoppingCartService.removeFromCart(product);
    this.cartItems = this.shoppingCartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  getCartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
