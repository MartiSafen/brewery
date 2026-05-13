
import { RouterOutlet,RouterLink } from '@angular/router';
import { Component,NgModule,signal } from '@angular/core';
import { BeerList } from './beer-list/beer-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BeerList], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title :string = 'Cerveceria Delpech';
}
