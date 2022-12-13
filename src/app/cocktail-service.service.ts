import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './cocktail';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CocktailServiceService {

    constructor(public http: HttpClient) {}
 
    getCocktails(): Observable<Cocktail[]> {
        console.log("this.http.get<Cocktail[]>");
        return this.http.get<Cocktail[]>("assets/cocktails.json");
    }

}
