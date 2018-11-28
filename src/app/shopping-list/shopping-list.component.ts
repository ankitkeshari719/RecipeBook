import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngredient();
    this.shoppingListService.changedIngredient.subscribe((ingredients : Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  OnEditShoppingItem(itemIndex: number){
    this.shoppingListService.startedEditing.next(itemIndex);
  }
}
