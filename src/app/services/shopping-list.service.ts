import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

  // Event Emmiter because I am sending the copy so original data not changed on new ingredient addition
  changedIngredient = new EventEmitter<Ingredient[]>()

  // Making a Subject to hold the data
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Banana', 12)
  ];

  constructor() { }

  //Function to get all ingredients
  getAllIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  //Function to get single ingredient
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //Function to add new ingredient
  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.changedIngredient.emit(this.ingredients.slice())
  }

  //Function to update the exiting ingredients
  onUpdateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.changedIngredient.next(this.ingredients.slice())
  }

  // Function to delete the ingredient
  onDeleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.changedIngredient.next(this.ingredients.slice())
  }

  // This Function add ingredients that is coming from Recipe
  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.onAddIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.changedIngredient.emit(this.ingredients.slice());
  }
}
