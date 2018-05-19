import { Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.modal'
import {RecipeService} from '../recipe.service'
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes : Recipe [] 
  subscription : Subscription
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChnaged.subscribe(
      recipes => {
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipe()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}