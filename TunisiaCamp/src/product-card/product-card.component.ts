// product-card.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Skygazer Tent',
      price: 10.99,
      imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-skygazer-tenttentsheltersheets-of-fabriccampcampingpavilionencampmenttamponcamposit-17015284882735gxg8.png',
      description: 'Description of Product 1',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },
    {
      id: 5,
      name: 'Product 2',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },
    {
      id: 6,
      name: 'Product 2',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },
    {
      id: 7,
      name: 'Product 2',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    },    {
      id: 8,
      name: 'Product 2',
      price: 20.99,
      imageUrl: 'https://example.com/image2.jpg',
      description: 'Description of Product 2',
      quantity: 8,
    }
    // Add more dummy product objects as needed
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
  }
}
