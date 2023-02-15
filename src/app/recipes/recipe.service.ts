import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg'
        ),
        new Recipe(
          'Another Test Recipe',
          'This is simply a test',
          'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg'
        ),
    ];

    getRecipes(){
        return this.recipes.slice();
    }

     
}