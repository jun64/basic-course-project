import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe-book',
    templateUrl: 'recipe-book.component.html'
})

export class RecipeBookComponent implements OnInit {
    seletedRecipe: Recipe;
    recipe:Recipe;
    showRecipe = false;
    constructor() { }

    ngOnInit() { }
}