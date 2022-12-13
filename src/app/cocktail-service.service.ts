import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
    providedIn: 'root'
})
export class CocktailServiceService {

    private cocktails: Cocktail[] = [];


    constructor() {
        this.addCocktails(new Cocktail("mojito", 8.5, "https://assets.afcdn.com/recipe/20180705/80255_w350h250c1cx2774cy1849.jpg"));
        this.addCocktails(new Cocktail("punch exotique", 9.5, "https://assets.afcdn.com/recipe/20180705/80348_w350h250c1cx1491cy2383.jpg"));
        this.addCocktails(new Cocktail("aperol spritz", 9.5, "https://assets.afcdn.com/recipe/20180705/80256_w350h250c1cx1665cy1865.jpg"));
        this.addCocktails(new Cocktail("pina colada", 9.5, "https://assets.afcdn.com/recipe/20180705/80258_w350h250c1cx974cy1535.jpg"));
        this.addCocktails(new Cocktail("margarita", 9.5, "https://assets.afcdn.com/recipe/20180705/80288_w350h250c1cx1473cy1313.jpg"));
    }

    addCocktails(cocktail: Cocktail) {
        this.cocktails.push(cocktail);
    }

    getCocktails(): Cocktail[] {
        return this.cocktails;
    }

}
