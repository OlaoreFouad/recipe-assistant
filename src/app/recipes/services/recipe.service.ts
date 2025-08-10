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
      name: 'Asaro (Yam Porridge) + Grilled Chicken',
      description:
        'Traditional Nigerian yam porridge cooked with vegetables and palm oil, served with grilled chicken',
      protein: '2 chicken thighs',
      ingredients: [
        '2-3 lbs white/yellow yam, peeled and cubed',
        '2 chicken thighs',
        '2 cups spinach or ugu leaves, chopped',
        '1/4 cup palm oil',
        '1 cup blended tomato-pepper mix',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp dried crayfish (optional)',
      ],
      notes:
        'Yam should be tender but not mushy. Store leftovers in refrigerator for up to 2 days. Reheat gently with a little water.',
    },
    {
      id: 2,
      name: 'Ewa Riro (Stewed Beans) + Beef',
      description:
        'Rich Nigerian honey bean stew cooked in palm oil with aromatic spices, served with tender beef',
      protein: '5-6 beef cubes',
      ingredients: [
        '2 cups honey beans (brown beans)',
        '5-6 beef cubes',
        '1 cup blended tomato-pepper mix',
        '1/4 cup palm oil',
        '1 tbsp ground crayfish',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 bay leaf',
      ],
      notes:
        'Soak beans overnight for faster cooking. Can be stored for 3-4 days in refrigerator. Freezes well for up to 2 months.',
    },
    {
      id: 3,
      name: 'Jollof Rice + Grilled Chicken',
      description:
        'The famous Nigerian one-pot rice dish cooked in rich tomato sauce, served with perfectly grilled chicken',
      protein: '2 chicken thighs',
      ingredients: [
        '3 cups long-grain parboiled rice',
        '2 chicken thighs',
        '1.5 cups blended tomato-pepper mix',
        '1 large onion, chopped',
        '1/4 cup vegetable oil',
        '2 bay leaves',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp curry powder',
        '1 tsp thyme',
      ],
      notes:
        'Let rice rest for 5 minutes after cooking. Best served fresh but can be refrigerated for 2-3 days.',
    },
    {
      id: 4,
      name: 'Boiled Yam + Garden Egg Sauce + Goat Meat',
      description:
        'Simple boiled yam served with spicy garden egg sauce and tender goat meat',
      protein: '5-6 goat chunks',
      ingredients: [
        '2-3 lbs white/yellow yam, peeled',
        '5-6 goat meat chunks',
        '8-10 garden eggs',
        '4 large tomatoes',
        '1 large onion, chopped',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '2 scotch bonnet peppers',
      ],
      notes:
        'Boil yam until fork-tender. Garden egg sauce can be made ahead and stored for 2-3 days in refrigerator.',
    },
    {
      id: 5,
      name: 'Adalu (Beans + Corn) + Beef',
      description:
        'Nigerian comfort food combining beans and corn in a hearty stew, served with beef',
      protein: '5-6 beef cubes',
      ingredients: [
        '1.5 cups honey beans',
        '1 cup sweet corn kernels',
        '5-6 beef cubes',
        '1 cup blended tomato-pepper mix',
        '1/4 cup palm oil',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tbsp ground crayfish',
      ],
      notes:
        'Cook beans until almost tender before adding corn. Store leftovers for up to 3 days in refrigerator.',
    },
    {
      id: 6,
      name: 'Peppered Irish Potatoes + Turkey',
      description:
        'Spicy Nigerian-style Irish potatoes cooked with hot peppers, served with turkey drumsticks',
      protein: '2 turkey drumsticks',
      ingredients: [
        '2 lbs Irish potatoes, peeled and cubed',
        '2 turkey drumsticks',
        '6-8 ata rodo (scotch bonnet peppers)',
        '1 large onion, sliced',
        '1/4 cup vegetable oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp ginger, minced',
      ],
      notes:
        'Adjust pepper quantity to taste. Potatoes should be firm, not mushy. Best served immediately.',
    },
    {
      id: 7,
      name: 'Moi Moi (Egg & Fish Loaded) + Grilled Tilapia',
      description:
        'Protein-rich Nigerian steamed bean pudding loaded with eggs and fish, served with grilled tilapia',
      protein: '3 moi moi portions + tilapia fillet',
      ingredients: [
        '2 cups honey beans (peeled) or bean flour',
        '3 boiled eggs, chopped',
        '1/2 cup mackerel/titus fish flakes',
        '1 tilapia fillet',
        '1/4 cup palm oil',
        '1 large onion, blended',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp ground crayfish',
      ],
      notes:
        'Steam moi moi for 45-60 minutes until firm. Can be made ahead and refrigerated for 3-4 days.',
    },
    {
      id: 8,
      name: 'Village Rice + Beef',
      description:
        'Traditional Nigerian local rice cooked with indigenous ingredients and aromatic leaves, served with beef',
      protein: '5-6 beef cubes',
      ingredients: [
        '3 cups local rice (or brown rice)',
        '5-6 beef cubes',
        '1 cup blended tomato-pepper mix',
        '1/4 cup palm oil',
        '1 cup scent leaves, chopped',
        '1/4 cup smoked fish, flaked (optional)',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
      ],
      notes:
        'Wash rice thoroughly before cooking. Scent leaves add authentic flavor. Store for 2-3 days in refrigerator.',
    },
    {
      id: 9,
      name: 'Ewa Agoyin + Grilled Chicken',
      description:
        'Soft mashed beans served with spicy pepper sauce (ata agoyin), accompanied by grilled chicken',
      protein: '2 chicken thighs',
      ingredients: [
        '2 cups honey beans',
        '2 chicken thighs',
        '1/2 cup dried pepper mix (ata agoyin)',
        '1 large onion, sliced',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp locust beans (iru)',
      ],
      notes:
        'Beans should be very soft and mashable. Ata agoyin can be stored separately for weeks in refrigerator.',
    },
    {
      id: 10,
      name: 'Sweet Potato Pottage + Goat Meat',
      description:
        'Nigerian sweet potato porridge cooked with vegetables and spices, served with goat meat',
      protein: '5-6 goat chunks',
      ingredients: [
        '2 lbs sweet potatoes (half-ripe), peeled and cubed',
        '5-6 goat meat chunks',
        '2 cups spinach or ugu leaves, chopped',
        '1 cup blended tomato-pepper mix',
        '1/4 cup palm oil',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
      ],
      notes:
        'Use half-ripe sweet potatoes for best texture. Store leftovers for up to 2 days in refrigerator.',
    },
    {
      id: 11,
      name: 'Boiled Yam + Ata Dindin + Beef',
      description:
        'Simple boiled yam served with traditional Nigerian pepper sauce and tender beef',
      protein: '5-6 beef cubes',
      ingredients: [
        '2-3 lbs white/yellow yam, peeled',
        '5-6 beef cubes',
        '6-8 scotch bonnet peppers',
        '1 large onion',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp locust beans (iru)',
      ],
      notes:
        'Ata dindin should be freshly blended for best flavor. Yam is best served hot.',
    },
    {
      id: 12,
      name: 'White Rice + Ayamase + Chicken',
      description:
        'Plain white rice served with the famous green pepper sauce (ayamase) and chicken',
      protein: '2 chicken thighs',
      ingredients: [
        '3 cups white rice',
        '2 chicken thighs',
        '8-10 green bell peppers',
        '4-6 ata rodo (scotch bonnet)',
        '1 large onion',
        '1 tbsp locust beans (iru)',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
      ],
      notes:
        'Ayamase gets its signature green color from bell peppers. Rice should be perfectly cooked and fluffy.',
    },
    {
      id: 13,
      name: 'Plantain Pottage (Unripe) + Beef',
      description:
        'Savory plantain porridge made with unripe plantains, vegetables, and spices, served with beef',
      protein: '5-6 beef cubes',
      ingredients: [
        '6-8 unripe plantains, peeled and chopped',
        '5-6 beef cubes',
        '2 cups spinach or ugu leaves, chopped',
        '1 cup blended tomato-pepper mix',
        '1/4 cup palm oil',
        '1 large onion, chopped',
        '2-3 seasoning cubes',
        'Salt to taste',
      ],
      notes:
        'Unripe plantains provide a starchy, filling base. Store leftovers for up to 2 days in refrigerator.',
    },
    {
      id: 14,
      name: 'Ofada Rice + Ayamase + Goat Meat',
      description:
        'Local Nigerian brown rice served with spicy green pepper sauce and goat meat',
      protein: '5-6 goat chunks',
      ingredients: [
        '3 cups ofada rice (or brown rice)',
        '5-6 goat meat chunks',
        '8-10 green bell peppers',
        '4-6 ata rodo (scotch bonnet)',
        '1 large onion',
        '1 tbsp locust beans (iru)',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
      ],
      notes:
        'Wash ofada rice thoroughly to remove stones. Ayamase should be spicy and aromatic with iru.',
    },
    {
      id: 15,
      name: 'Irish Potato & Garden Egg Sauce + Turkey',
      description:
        'Boiled Irish potatoes served with garden egg sauce and turkey drumsticks',
      protein: '2 turkey drumsticks',
      ingredients: [
        '2 lbs Irish potatoes, peeled',
        '2 turkey drumsticks',
        '8-10 garden eggs',
        '4 large tomatoes',
        '1 large onion, chopped',
        '1/4 cup palm oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '2 scotch bonnet peppers',
      ],
      notes:
        'Boil potatoes until tender but not mushy. Garden egg sauce can be made spicy or mild to preference.',
    },
    {
      id: 16,
      name: 'Coconut Rice + Grilled Chicken',
      description:
        'Fragrant Nigerian coconut rice cooked with fresh coconut milk and spices, served with grilled chicken',
      protein: '2 chicken thighs',
      ingredients: [
        '3 cups long-grain rice',
        '2 chicken thighs',
        '1.5 cups fresh coconut milk',
        '1 cup blended tomato-pepper mix',
        '1 large onion, chopped',
        '1/4 cup vegetable oil',
        '2-3 seasoning cubes',
        'Salt to taste',
        '1 tsp curry powder',
      ],
      notes:
        'Use fresh coconut milk for best flavor. Rice should be creamy but not mushy. Best served fresh.',
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
