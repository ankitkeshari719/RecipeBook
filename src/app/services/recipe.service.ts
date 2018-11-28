import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  public selectedRecipe = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Burger', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Cold drink', 1)
      ]),
    new Recipe('Ricardo Larrivée',
      'What else you need to say?',
      'https://southsidestory.ca/wp-content/uploads/2016/07/Lasagna.jpg',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Cold drink', 1)
      ]),
    new Recipe('Ricardo Larrivée',
      'What else you need to say?',
      'https://southsidestory.ca/wp-content/uploads/2016/07/Lunch.jpg',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Cold drink', 1)
      ]),
    new Recipe('Ricardo Larrivée',
      'What else you need to say?',
      'https://i1.wp.com/cafedelites.com/wp-content/uploads/2017/12/Garlic-Herb-Butter-Roast-Chicken-1.jpg?w=1600&ssl=1',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Cold drink', 1)
      ]),
    new Recipe('Ricardo Larrivée',
      'What else you need to say?',
      'https://i1.wp.com/cafedelites.com/wp-content/uploads/2017/12/Perfect-Juicy-Roast-Chicken-IMAGE-28.jpg?w=1600&ssl=1',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Cold drink', 1)
      ]),

  ];

  constructor(private shoppingListService: ShoppingListService) { }

  // Function to get the single recipe
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  //Function to get the list of recipes
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  // Function to set the recipes
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  // Function  to add ingredient to shopping list
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  // Function to add new recipe
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }

  // Function to update the existing indexed recipe
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  // Function to delete a recipe
  deleteRecipe(index) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
