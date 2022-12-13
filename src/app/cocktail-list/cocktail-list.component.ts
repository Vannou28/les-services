import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailServiceService } from '../cocktail-service.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
    cocktails: any;
    
    constructor(private cocktailService:CocktailServiceService){}

    ngOnInit(): void {
        console.log("this.cocktails");
        this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
          this.cocktails = cocktailsFromJsonFile;
        });
        console.log("recupe tableau");
        console.log(this.cocktails);
    }
}