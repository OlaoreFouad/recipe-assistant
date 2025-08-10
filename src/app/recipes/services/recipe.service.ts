import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Recipe } from '../models/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Honey Garlic Salmon',
      description:
        'Pan-seared salmon with a sweet and savory honey garlic glaze',
      protein: 'Salmon',
      ingredients: [
        '4 salmon fillets (6 oz each)',
        '3 cloves garlic, minced',
        '1/4 cup honey',
        '3 tbsp soy sauce',
        '2 tbsp olive oil',
        '1 tbsp lemon juice',
        'Salt and pepper to taste',
        'Green onions for garnish',
      ],
      notes:
        'Store leftovers in refrigerator for up to 3 days. Can be reheated gently in the oven at 300°F.',
    },
    {
      id: 2,
      name: 'Mediterranean Chicken Bowl',
      description:
        'Grilled chicken with quinoa, cucumber, tomatoes, and tzatziki sauce',
      protein: 'Chicken breast',
      ingredients: [
        '4 chicken breasts',
        '2 cups quinoa',
        '1 cucumber, diced',
        '2 cups cherry tomatoes, halved',
        '1/2 red onion, sliced',
        '1/2 cup kalamata olives',
        '1/2 cup feta cheese',
        '1/4 cup olive oil',
        '2 tbsp lemon juice',
        'Greek seasoning',
        'Tzatziki sauce',
      ],
      notes:
        'Meal prep friendly! Store components separately and assemble when ready to eat. Keeps fresh for 4-5 days.',
    },
    {
      id: 3,
      name: 'Beef Stir Fry',
      description:
        'Quick and colorful beef stir fry with fresh vegetables and ginger soy sauce',
      protein: 'Beef sirloin',
      ingredients: [
        '1 lb beef sirloin, sliced thin',
        '2 bell peppers, sliced',
        '1 broccoli head, cut into florets',
        '1 carrot, julienned',
        '3 cloves garlic, minced',
        '1 inch fresh ginger, grated',
        '3 tbsp soy sauce',
        '2 tbsp oyster sauce',
        '1 tbsp sesame oil',
        '2 tbsp vegetable oil',
        '2 green onions, chopped',
        'Sesame seeds for garnish',
      ],
      notes:
        'Best served immediately. If storing, keep sauce separate and reheat quickly to maintain vegetable crispness.',
    },
    {
      id: 4,
      name: 'Lemon Herb Cod',
      description:
        'Baked cod with fresh herbs, lemon, and a crispy breadcrumb topping',
      protein: 'Cod',
      ingredients: [
        '4 cod fillets (6 oz each)',
        '1 cup panko breadcrumbs',
        '1/4 cup fresh parsley, chopped',
        '2 tbsp fresh dill, chopped',
        '3 cloves garlic, minced',
        '1 lemon (zested and juiced)',
        '3 tbsp olive oil',
        '2 tbsp butter, melted',
        'Salt and pepper to taste',
      ],
      notes:
        'Fish is best consumed fresh. Can be stored in refrigerator for 1-2 days maximum. Reheat gently to avoid overcooking.',
    },
    {
      id: 5,
      name: 'Turkey Meatball Pasta',
      description:
        'Lean turkey meatballs in marinara sauce over whole wheat pasta',
      protein: 'Ground turkey',
      ingredients: [
        '1 lb ground turkey (93% lean)',
        '1/2 cup breadcrumbs',
        '1 egg',
        '1/4 cup parmesan cheese, grated',
        '2 cloves garlic, minced',
        '1 onion, finely diced',
        '24 oz marinara sauce',
        '12 oz whole wheat pasta',
        '2 tbsp olive oil',
        'Fresh basil leaves',
        'Italian seasoning',
        'Salt and pepper',
      ],
      notes:
        'Meatballs can be made ahead and frozen for up to 3 months. Sauce keeps well for 5-6 days in refrigerator.',
    },
    {
      id: 6,
      name: 'Vegetarian Buddha Bowl',
      description:
        'Nutrient-packed bowl with roasted vegetables, quinoa, and tahini dressing',
      protein: 'Chickpeas and quinoa',
      ingredients: [
        '1 can chickpeas, drained and rinsed',
        '1.5 cups quinoa',
        '2 sweet potatoes, cubed',
        '1 bunch kale, massaged',
        '1 avocado, sliced',
        '1/2 cucumber, diced',
        '1/4 cup pumpkin seeds',
        '3 tbsp tahini',
        '2 tbsp lemon juice',
        '2 tbsp olive oil',
        '1 clove garlic, minced',
        'Cumin, paprika, salt, and pepper',
      ],
      notes:
        'Components can be prepped separately and stored for 4-5 days. Add avocado fresh before serving.',
    },
  ];

  constructor() {}

  getRandomRecipe(): Observable<Recipe> {
    const randomIndex = Math.floor(Math.random() * this.recipes.length);
    const recipe = this.recipes[randomIndex];

    // Simulate API call with 3-second delay
    return of(recipe).pipe(delay(3000));
  }

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }
}
