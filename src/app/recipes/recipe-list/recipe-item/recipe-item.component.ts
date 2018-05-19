import { Component, OnInit, Input, Output} from '@angular/core';
import {Recipe} from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe
  @Input() index : Number
  ngOnInit() {
  }

}