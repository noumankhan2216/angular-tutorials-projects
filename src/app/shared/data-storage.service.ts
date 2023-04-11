import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeServcie: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        this.authService.user.pipe(take(1)).subscribe( user => {

        });
        const recipes = this.recipeServcie.getRecipes();
        this.http.put('https://ng-course-recipe-book-4d0ad-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes)
        .subscribe( res => {
            console.log(res);
         })
    }
    fetchRecipes() {
        return this.http.get<Recipe[]>(
            'https://ng-course-recipe-book-4d0ad-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),
            tap(recipes => {
                this.recipeServcie.setRecipes(recipes)
            }))
    }
}