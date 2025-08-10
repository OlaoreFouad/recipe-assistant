import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeLoadingComponent } from './recipe-loading/recipe-loading.component';
import { ShareModalComponent } from '../shared/share-modal/share-modal.component';
import { NotificationComponent } from '../shared/notification/notification.component';

@NgModule({
  declarations: [
    RecipeDisplayComponent,
    RecipeLoadingComponent,
    ShareModalComponent,
    NotificationComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}
