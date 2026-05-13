import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private cart : BeerCartService) {
  
  }
}
