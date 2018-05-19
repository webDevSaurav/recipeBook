import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.modal"
import {ShoppingListService} from "../shopping-list.service"
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") shListForm : NgForm
  name : string
  amt : number
  editedItemIndex : number
  subscription : Subscription
  editMode = false
  editedItem : Ingredient
  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index : number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex)
        this.shListForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        })
      } 
    )
  }

  onAddItem(form : NgForm){
    const value = form.value
    const ingredient : Ingredient = {name : value.name, amount : value.amount}
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient)
    } else {  
      this.shoppingListService.addIngredient(ingredient)
    }
    this.editMode = false
    form.reset()
  }

  onClear(){
    this.shListForm.reset()
    this.editMode = false
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}