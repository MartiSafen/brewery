import { Routes } from '@angular/router';
import { BreweryAbout } from './brewery-about/brewery-about';
import { BreweryBeers } from './brewery-beers/brewery-beers';
 export const routes: Routes = [
    {
        path : '',
        redirectTo: 'beers',
        pathMatch: 'full'   
    },
    {
        
        path : 'beers',
        component:BreweryBeers
    },
    {
        path : 'about',
        component:BreweryAbout
    }
];
export class AppRoutes {
}