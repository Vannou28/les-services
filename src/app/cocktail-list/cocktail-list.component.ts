import { Component } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
    cocktails: Cocktail[] = [];
    
    constructor(private cocktailService:CocktailServiceService){
        this.cocktails=this.cocktailService.getCocktails();
        console.log(this.cocktails);
    }

    ngOnInit(){

    }

}