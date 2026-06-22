import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { IndustryCardComponent } from '../components/industry-card.component';
import { SEOService } from '../services/seo.service';
import { DataService } from '../services/data.service';
import { Industry } from '../models';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, HeroComponent, IndustryCardComponent],
  template: `
    <!-- Hero -->
    <app-hero 
      title="Industry Solutions"
      subtitle="Specialized expertise across automotive, semiconductor, pharmaceutical, and food & beverage sectors"
    ></app-hero>

    <!-- Industries Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <app-industry-card 
            *ngFor="let industry of industries" 
            [industry]="industry"
          ></app-industry-card>
        </div>
      </div>
    </section>

    <!-- Industry Deep-Dive -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary mb-12 text-center">Sector Expertise</h2>

        <div class="space-y-16">
          <div 
            *ngFor="let industry of industries" 
            class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-slide-in-up"
            [attr.data-industry]="industry.id"
          >
            <!-- Image -->
            <div class="order-2 md:order-1">
              <img 
                [src]="industry.image" 
                [alt]="industry.name"
                class="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="order-1 md:order-2">
              <h3 class="text-3xl font-bold text-primary mb-4">{{ industry.name }}</h3>
              <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                {{ industry.description }}
              </p>

              <!-- Applications -->
              <div class="mb-8">
                <h4 class="font-bold text-gray-700 mb-3 text-lg">Key Applications</h4>
                <ul class="space-y-2">
                  <li *ngFor="let app of industry.applications" class="flex items-start gap-3">
                    <span class="text-accent font-bold mt-1">▸</span>
                    <span class="text-gray-600">{{ app }}</span>
                  </li>
                </ul>
              </div>

              <!-- Benefits -->
              <div>
                <h4 class="font-bold text-gray-700 mb-3 text-lg">Industry Benefits</h4>
                <ul class="space-y-2">
                  <li *ngFor="let benefit of industry.benefits" class="flex items-start gap-3">
                    <span class="text-green-500 font-bold mt-1">✓</span>
                    <span class="text-gray-600">{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary mb-12 text-center">Client Success Stories</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            *ngFor="let testimonial of testimonials" 
            class="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                {{ testimonial.initials }}
              </div>
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic mb-4">"{{ testimonial.quote }}"</p>
            <div class="text-accent">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class IndustriesComponent implements OnInit {
  industries: Industry[] = [];

  testimonials = [
    {
      initials: 'JD',
      name: 'John Davis',
      company: 'Global Auto Manufacturing',
      quote: 'TechFlow solutions increased our production efficiency by 45% while reducing defects.'
    },
    {
      initials: 'SM',
      name: 'Sarah Miller',
      company: 'Advanced Semiconductors Inc',
      quote: 'The precision and reliability of their systems is unmatched in the industry.'
    },
    {
      initials: 'RC',
      name: 'Robert Chen',
      company: 'PharmaTech Solutions',
      quote: 'Perfect compliance with all regulatory requirements and exceptional support team.'
    }
  ];

  constructor(
    private seoService: SEOService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Industries - TechFlow Industrial Solutions',
      description: 'Specialized industrial solutions for automotive, semiconductor, pharmaceutical, and food & beverage sectors.',
      keywords: 'automotive solutions, semiconductor manufacturing, pharmaceutical industry, food processing automation'
    });

    this.industries = this.dataService.getIndustries();
  }
}
