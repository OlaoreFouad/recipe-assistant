import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe.interface';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {
  recipe: Recipe | null = null;
  isShareModalOpen: boolean = false;

  constructor(private router: Router) {
    // Get the recipe from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.recipe = navigation.extras.state['recipe'];
    }
  }

  ngOnInit(): void {
    // If no recipe was passed, redirect to welcome
    if (!this.recipe) {
      this.router.navigate(['/welcome']);
    }
  }

  onTryAnother(): void {
    this.router.navigate(['/recipes/loading']);
  }

  onBackHome(): void {
    this.router.navigate(['/welcome']);
  }

  onShareRecipe(): void {
    this.isShareModalOpen = true;
  }

  onCloseShareModal(): void {
    this.isShareModalOpen = false;
  }
}
