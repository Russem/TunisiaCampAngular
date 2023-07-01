// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  clearCart() {
    throw new Error('Method not implemented.');
  }
  cartItems: Product[] = [];

  addToCart(product: Product): void {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: Product): void {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
      }
    }
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
