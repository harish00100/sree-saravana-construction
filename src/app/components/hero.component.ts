import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-gradient-to-r from-primary to-accent py-24 md:py-32 text-white overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-10">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 text-center animate-slide-in-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {{ primaryCTA || 'Get Started' }}
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
            {{ secondaryCTA || 'Learn More' }}
          </button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  @Input() title: string = 'Advanced Industrial Solutions';
  @Input() subtitle: string = 'Leading the future of manufacturing with cutting-edge technology and innovation.';
  @Input() primaryCTA: string = 'Get Started';
  @Input() secondaryCTA: string = 'Learn More';
}
