import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe(
        'A Test Recipe',
        'This is simply a test',
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]
      ),
      new Recipe(
        'Another Test Recipe',
        'This is simply a test',
        'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]
      ),
  ];
  constructor(private shoppingListService: ShoppingListService){ }

  getRecipes(){
      return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index]
  }   
  
  addIngredientsToShoppingList(ingredients: Ingredient[])  {
    this.shoppingListService.addIngredients(ingredients)
  }
}