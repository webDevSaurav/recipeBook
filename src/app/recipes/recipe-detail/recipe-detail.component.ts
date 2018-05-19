import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.modal"
import { Ingredient } from '../../shared/ingredient.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id : number
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.
      subscribe(
        (params: Params) => {
          this.id = params["id"]
          this.recipe = this.recipeService.getOneRecipe(this.id) 
        }
      )
         
  }
  pushToShopping(ingredient: Ingredient[]) {
    this.recipeService.addIngredintToShoppingList(ingredient)
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(["/recipes"])
  }
}