import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  // Function to store the recipe data
  onSaveRecipeData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  // Function to fetch the recipes
  onFetchRecipeData() {
    this.dataStorageService.fetchRecipe();
  }

  // Function to logout 
  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}


