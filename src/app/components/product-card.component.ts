import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
      <!-- Image -->
      <div class="relative h-48 overflow-hidden bg-gray-200">
        <img 
          [src]="product.image" 
          [alt]="product.name"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          {{ product.category }}
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-primary mb-2">{{ product.name }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>

        <!-- Features -->
        <div class="mb-4">
          <h4 class="font-semibold text-gray-700 text-sm mb-2">Key Features:</h4>
          <ul class="space-y-1">
            <li *ngFor="let feature of product.features" class="text-sm text-gray-600 flex items-start gap-2">
              <span class="text-accent font-bold">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <button class="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  @Input() product!: Product;
}
