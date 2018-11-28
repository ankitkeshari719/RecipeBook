import { Injectable } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    // Function to store the recipe data
    storeRecipes() {
        const token = this.authService.getToken();
        const req = new HttpRequest('PUT','https://recipe-book-bfce8.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{reportProgress:true});
        return this.httpClient.request(req);
        // return this.httpClient.put('https://recipe-book-bfce8.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(),{observe:'body'});
    }

    // Function to fetch the recipe data 
    fetchRecipe() {
        const token = this.authService.getToken();
        //const headers = new HttpHeaders().set('Content-Type','application/json').append('Authorization','Bearer abcdefghijklmnopqrstuvwxyz');
        const headers = new HttpHeaders().set('Content-Type','application/json');
        //const params = new HttpParams().set('auth',token);
        this.httpClient.get<Recipe[]>('https://recipe-book-bfce8.firebaseio.com/recipes.json', {observe:'body', responseType:'json'})
            .pipe(map(
                (recipes) => {
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }),
                catchError(
                    error => {
                        //    return throwError(error);
                        return throwError("Something went wrong!!");
                    }
                )
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

}