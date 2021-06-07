import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector: 'app-recipe-book',
    templateUrl: 'recipe-book.component.html'
})

export class RecipeBookComponent implements OnInit {
    seletedRecipe: Recipe;
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) =>{
                this.seletedRecipe = recipe;
            }
        )
     }
}