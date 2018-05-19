import { Injectable} from '@angular/core';
import { Recipe } from './recipe.modal'
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {
  recipesChnaged = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    new Recipe("pizza",
      "yummy recipe",
      "https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_5185_2277.JPEG",
      [
        new Ingredient("Tomato", 1),
        new Ingredient("Onion", 4)
      ]
    ),
    new Recipe("Fruit Salad",
      "fresh",
      "https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_5185_2277.JPEG",
      [
        new Ingredient("Pinapple", 3),
        new Ingredient("Tarbuj", 2)
      ]
    ),
    new Recipe("Butter Chicken",
      "Best",
      "https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_5185_2277.JPEG",
      [
        new Ingredient("Butter", 1),
        new Ingredient("Chicken", 1)
      ]
    )]
  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes
    this.recipesChnaged.next(this.recipes.slice())
  }
    
  getRecipe() {
    return this.recipes.slice() //returs an exact copy of the array
  }

  getOneRecipe(id) {
    return this.recipes[id] //returs an exact copy of the array
  }

  addIngredintToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe)
    this.recipesChnaged.next(this.recipes.slice())
  }

  updateRecipe(index : number, recipe : Recipe){
    this.recipes[index] = recipe
    this.recipesChnaged.next(this.recipes.slice())
  }

  deleteRecipe(index :number){
    this.recipes.splice(index,1)
    this.recipesChnaged.next(this.recipes.slice())
  }
}