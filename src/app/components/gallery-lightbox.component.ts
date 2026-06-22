import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-gallery-lightbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isOpen" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <!-- Close button -->
      <button 
        (click)="close()"
        class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
      >
        ✕
      </button>

      <!-- Image container -->
      <div class="relative max-w-4xl w-full animate-slide-in-up">
        <img 
          [src]="currentItem.image" 
          [alt]="currentItem.title"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation buttons -->
        <button 
          *ngIf="hasPrevious()"
          (click)="previous()"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-r-lg hover:bg-white/40 transition-colors text-2xl"
        >
          ‹
        </button>

        <button 
          *ngIf="hasNext()"
          (click)="next()"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-l-lg hover:bg-white/40 transition-colors text-2xl"
        >
          ›
        </button>

        <!-- Info -->
        <div class="bg-white/10 backdrop-blur-md text-white p-4 mt-4 rounded-lg">
          <h3 class="text-xl font-bold mb-2">{{ currentItem.title }}</h3>
          <p class="text-sm mb-2">{{ currentItem.description }}</p>
          <div class="flex justify-between text-xs text-gray-300">
            <span>{{ currentItem.category }}</span>
            <span>{{ currentIndex + 1 }} / {{ items.length }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class GalleryLightboxComponent {
  @Input() items: GalleryItem[] = [];
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;

  get currentItem(): GalleryItem {
    return this.items[this.currentIndex];
  }

  open(item: GalleryItem): void {
    this.currentIndex = this.items.indexOf(item);
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  next(): void {
    if (this.hasNext()) {
      this.currentIndex++;
    }
  }

  previous(): void {
    if (this.hasPrevious()) {
      this.currentIndex--;
    }
  }

  hasNext(): boolean {
    return this.currentIndex < this.items.length - 1;
  }

  hasPrevious(): boolean {
    return this.currentIndex > 0;
  }
}
