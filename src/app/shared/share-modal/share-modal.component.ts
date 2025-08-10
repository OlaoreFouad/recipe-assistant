import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { Recipe } from '../../recipes/models/recipe.interface';
import { ClipboardService } from '../services/clipboard.service';
import { NotificationService } from '../services/notification.service';
import { RecipeFormatterService } from '../services/recipe-formatter.service';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css'],
})
export class ShareModalComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe | null = null;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  formattedText: string = '';
  isCopying: boolean = false;

  constructor(
    private clipboardService: ClipboardService,
    private notificationService: NotificationService,
    private recipeFormatter: RecipeFormatterService
  ) {}

  ngOnInit(): void {
    this.updateFormattedText();
  }

  ngOnChanges(): void {
    this.updateFormattedText();

    // Auto-copy to clipboard when modal opens
    if (this.isOpen && this.recipe) {
      setTimeout(() => this.copyToClipboard(), 100);
    }
  }

  private updateFormattedText(): void {
    if (this.recipe) {
      this.formattedText = this.recipeFormatter.formatRecipeToText(this.recipe);
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  async copyToClipboard(): Promise<void> {
    if (!this.formattedText || this.isCopying) return;

    this.isCopying = true;

    try {
      const success = await this.clipboardService.copyToClipboard(
        this.formattedText
      );

      if (success) {
        this.notificationService.showSuccess(
          'Recipe copied to clipboard! 📋',
          2000
        );
      } else {
        this.notificationService.showError(
          'Failed to copy recipe. Please try selecting and copying manually.',
          3000
        );
      }
    } catch (error) {
      this.notificationService.showError(
        'Failed to copy recipe. Please try selecting and copying manually.',
        3000
      );
    } finally {
      this.isCopying = false;
    }
  }

  selectAllText(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.select();
  }
}
