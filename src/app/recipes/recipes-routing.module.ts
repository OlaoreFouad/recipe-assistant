import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeLoadingComponent } from './recipe-loading/recipe-loading.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

const routes: Routes = [
  { path: 'loading', component: RecipeLoadingComponent },
  { path: 'display', component: RecipeDisplayComponent },
  { path: '', redirectTo: 'loading', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
