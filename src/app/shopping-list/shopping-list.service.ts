import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  startedEditing = new Subject<number>();
  changedIngredient = new Subject<Ingredient[]>()
  private ingredients : Ingredient[] = []  
  constructor() { }
  addIngredient(e : Ingredient){
    this.ingredients.push(e)
    this.changedIngredient.next(this.ingredients.slice())
  }
  getIngredients(){
    return this.ingredients.slice()
  }
  getIngredient(index : number){
    return this.ingredients[index]
  }
  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients)
    this.changedIngredient.next(this.ingredients.slice())
  }
  updateIngredient(index, newIng : Ingredient){
    this.ingredients[index] = newIng
    this.changedIngredient.next(this.ingredients.slice())
  }
  deleteIngredient(index : number){
    this.ingredients.splice(index,1)
    this.changedIngredient.next(this.ingredients.slice())
  }
  
}