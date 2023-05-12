import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

  listRandomClothes(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?
    apiKey=70719f5541ee46f496aea3b17f007f66&number=${take}`

    return this.http.get(apiUrl);
  }
}
