import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.interface';

@Component({
  selector: 'app-recipe-loading',
  templateUrl: './recipe-loading.component.html',
  styleUrls: ['./recipe-loading.component.css']
})
export class RecipeLoadingComponent implements OnInit {
  loadingMessages: string[] = [
    'Searching through our recipe collection...',
    'Finding the perfect ingredients...',
    'Preparing your culinary adventure...',
    'Almost ready with your recipe!'
  ];
  
  currentMessageIndex: number = 0;
  currentMessage: string = this.loadingMessages[0];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.startLoadingAnimation();
    this.loadRecipe();
  }

  private startLoadingAnimation(): void {
    const interval = setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.loadingMessages.length;
      this.currentMessage = this.loadingMessages[this.currentMessageIndex];
    }, 750);

    // Clear interval after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  }

  private loadRecipe(): void {
    this.recipeService.getRandomRecipe().subscribe({
      next: (recipe: Recipe) => {
        // Navigate to recipe display with the selected recipe
        this.router.navigate(['/recipes/display'], { 
          state: { recipe: recipe }
        });
      },
      error: (error) => {
        console.error('Error loading recipe:', error);
        // Handle error - maybe navigate back to welcome or show error message
        this.router.navigate(['/welcome']);
      }
    });
  }

  onRetry(): void {
    // This method can be called if there's an error state
    this.currentMessageIndex = 0;
    this.currentMessage = this.loadingMessages[0];
    this.startLoadingAnimation();
    this.loadRecipe();
  }
}
