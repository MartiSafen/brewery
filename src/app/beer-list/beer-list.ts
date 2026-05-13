import { Component,OnInit } from '@angular/core';
import { Beer } from './beer';  
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { InputInteger } from '../input-integer/input-integer';
@Component({
  selector: 'app-beer-list',
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.css',
})
export class BeerList implements OnInit {
beers : Beer []= [
  {
      name: "Blonde",
      type: "rubia",
      price: 5000,
      stock: 10,
      image: '/assets/blonde.jpeg',    
      clearence: true,
      quantity: 0,
    },
    {
      name: "Session IPA",
      type: "ipa",
      price: 6500,
      stock: 150,
      image: '/assets/ipa.jpeg',    
      clearence: false,
      quantity: 0,
    },
    {
      name: "Porter",
      type: "negra",
      price: 7000,
      stock: 0,
      image: '/assets/porter.jpeg',    
      clearence:false,
      quantity: 0,
    } ,
  {
      name: "Honey",
      type: "rubia",
      price: 6000,
      stock: 50,
      image: '/assets/honey.jpeg',    
      clearence:false,
      quantity: 0,
  },
  {
      name: "Irish red",
      type: "roja",
      price: 6000,
      stock: 50,
      image: '/assets/roja.jpeg',    
      clearence:false,
      quantity: 0,
  },
{
      name: "Golden",
      type: "rubia",
      price: 5000,
      stock: 10,
      image: '/assets/golden.jpeg',    
      clearence:true,
      quantity: 0,
}
];


  constructor() { }

  ngOnInit() :void {

   }
 maxReached(message: string) {
  console.log(message);
 }

}
