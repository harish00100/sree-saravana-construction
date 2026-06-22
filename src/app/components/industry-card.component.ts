import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Industry } from '../models';

@Component({
  selector: 'app-industry-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
      <!-- Image -->
      <div class="h-40 overflow-hidden bg-gray-200 relative">
        <img 
          [src]="industry.image" 
          [alt]="industry.name"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <span class="text-5xl p-4">{{ industry.icon }}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-primary mb-2">{{ industry.name }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ industry.description }}</p>

        <!-- Applications -->
        <div class="mb-4">
          <h4 class="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-2">Applications</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              *ngFor="let app of industry.applications"
              class="text-xs bg-accent-light text-primary px-3 py-1 rounded-full"
            >
              {{ app }}
            </span>
          </div>
        </div>

        <!-- Benefits -->
        <div class="mb-4">
          <h4 class="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-2">Benefits</h4>
          <ul class="space-y-1">
            <li *ngFor="let benefit of industry.benefits" class="text-sm text-gray-600 flex items-start gap-2">
              <span class="text-accent font-bold">✓</span>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <button class="w-full border-2 border-accent text-accent py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors">
          Explore
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class IndustryCardComponent {
  @Input() industry!: Industry;
}
