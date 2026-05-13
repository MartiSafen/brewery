import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerCartService{

  //maneja la logica del carrito de compras, como agregar cervezas, eliminar cervezas, calcular el total, etc.
 
    constructor() {}
    cartList : Beer[] = [];

  addToCart(beer: Beer) {
    let item = this.cartList.find((v1) => v1.name === beer.name) ;
    if (!item) {
      this.cartList.push(beer);
    }
    console.log(this.cartList);
    }
}
