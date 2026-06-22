import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { GalleryLightboxComponent } from '../components/gallery-lightbox.component';
import { SEOService } from '../services/seo.service';
import { DataService } from '../services/data.service';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HeroComponent, GalleryLightboxComponent],
  template: `
    <!-- Hero -->
    <app-hero 
      title="Gallery"
      subtitle="Showcasing our facilities, projects, and innovations"
    ></app-hero>

    <!-- Filter -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap gap-3 justify-center">
          <button 
            (click)="filterCategory = null"
            [class.bg-accent]="!filterCategory"
            [class.text-white]="!filterCategory"
            [class.bg-gray-200]="filterCategory"
            [class.text-gray-700]="filterCategory"
            class="px-6 py-2 rounded-full font-semibold transition-colors"
          >
            All
          </button>
          <button 
            *ngFor="let category of categories"
            (click)="filterCategory = category"
            [class.bg-accent]="filterCategory === category"
            [class.text-white]="filterCategory === category"
            [class.bg-gray-200]="filterCategory !== category"
            [class.text-gray-700]="filterCategory !== category"
            class="px-6 py-2 rounded-full font-semibold transition-colors"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            *ngFor="let item of filteredGallery"
            (click)="openLightbox(item)"
            class="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group animate-fade-in"
          >
            <!-- Image -->
            <img 
              [src]="item.image" 
              [alt]="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
              <div class="text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="font-bold text-lg">{{ item.title }}</h3>
                <p class="text-sm text-gray-200">{{ item.category }}</p>
              </div>
            </div>

            <!-- View Icon -->
            <div class="absolute top-3 right-3 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              🔍
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="filteredGallery.length === 0" class="text-center py-12">
          <p class="text-gray-600 text-lg">No images found in this category.</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <app-gallery-lightbox 
      #lightbox
      [items]="galleryItems"
      [isOpen]="lightboxOpen"
      (closed)="lightboxOpen = false"
    ></app-gallery-lightbox>

    <!-- Stats -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary mb-12 text-center">Gallery Statistics</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
            <div class="text-5xl font-bold text-accent mb-3">{{ galleryItems.length }}</div>
            <h3 class="text-lg font-semibold text-gray-700">Total Images</h3>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
            <div class="text-5xl font-bold text-accent mb-3">{{ uniqueCategories }}</div>
            <h3 class="text-lg font-semibold text-gray-700">Categories</h3>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
            <div class="text-5xl font-bold text-accent mb-3">{{ galleryItems.length * 2 }}</div>
            <h3 class="text-lg font-semibold text-gray-700">Photos Captured</h3>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class GalleryComponent implements OnInit {
  @ViewChild(GalleryLightboxComponent) lightbox!: GalleryLightboxComponent;

  galleryItems: GalleryItem[] = [];
  categories: string[] = [];
  filterCategory: string | null = null;
  lightboxOpen = false;

  constructor(
    private seoService: SEOService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Gallery - TechFlow Industrial Solutions',
      description: 'Explore our facilities, projects, and operations through our comprehensive photo gallery.',
      keywords: 'gallery, industrial photos, manufacturing, facilities, projects'
    });

    this.galleryItems = this.dataService.getGallery();
    this.categories = [...new Set(this.galleryItems.map(item => item.category))];
  }

  openLightbox(item: GalleryItem): void {
    this.lightbox.open(item);
    this.lightboxOpen = true;
  }

  get filteredGallery(): GalleryItem[] {
    return this.filterCategory
      ? this.galleryItems.filter(item => item.category === this.filterCategory)
      : this.galleryItems;
  }

  get uniqueCategories(): number {
    return this.categories.length;
  }
}
