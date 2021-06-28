import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    constructor(private shoppingListService:ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();

    recipes:Recipe[] = [
        new Recipe('Test Recipe', 
        'This is Test Recipe', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Vegi', 3)
        ]),
        new Recipe('Test Recipe 2', 
        'This is another Test Recipe', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
        [
            new Ingredient('Buns', 3),
            new Ingredient('Meat', 2)
        ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}
