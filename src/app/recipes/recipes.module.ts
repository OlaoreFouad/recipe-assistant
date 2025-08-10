import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeLoadingComponent } from './recipe-loading/recipe-loading.component';


@NgModule({
  declarations: [
    RecipeDisplayComponent,
    RecipeLoadingComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
