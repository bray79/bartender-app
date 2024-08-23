import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private apiUrl = 'http://localhost:3000/cocktails';

  constructor(private http: HttpClient) { }

  // Method to get all cocktails
  getMenu(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  // Method to fetch a cocktail by it's Id
  getCocktailById(cocktailId: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.apiUrl}/${cocktailId}`);
  }
}
