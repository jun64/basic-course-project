import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    constructor() { }

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 10)
    ];
    getIngredients (){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}