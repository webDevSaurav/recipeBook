import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import {ShoppingListService} from './shopping-list.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients : Ingredient[] = []
  private subscription : Subscription
  constructor( private shoppingListService : ShoppingListService) { }

  onEditItem(index : number){
    this.shoppingListService.startedEditing.next(index) 
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.changedIngredient.subscribe(
      data => {
        this.ingredients = data
      }
    )
   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}