import { Component } from '@angular/core';
import { BeerList } from '../beer-list/beer-list';
import { Cart } from '../cart/cart';
@Component({
  selector: 'app-brewery-beers',
  imports: [BeerList, Cart],
  templateUrl: './brewery-beers.html',
  styleUrl: './brewery-beers.css',
})
export class BreweryBeers {}
