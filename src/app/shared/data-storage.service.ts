import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.modal';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService {

  constructor(private http : Http, 
              private recipeService  : RecipeService,
              private authService : AuthService) { }


  storeRecipes(){
    return this.http.put("https://ng-recipe-book-8810c.firebaseio.com/recipes.json", this.recipeService.getRecipe())
  }

  fetchData(){
    
    const token = this.authService.getToken()
    console.log("token", token)
    return this.http.get("https://ng-recipe-book-8810c.firebaseio.com/recipes.json?auth=" + token)
    .subscribe(
      response => {
        const recipes : Recipe[] = response.json()
        this.recipeService.setRecipes(recipes)
      }
    )
  }
}
