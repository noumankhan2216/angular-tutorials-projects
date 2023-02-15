import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

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

  getRecipes(){
      return this.recipes.slice();
  }    
}