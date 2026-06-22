import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { SEOService } from '../services/seo.service';
import { DataService } from '../services/data.service';
import { Infrastructure } from '../models';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  template: `
    <!-- Hero -->
    <app-hero 
      title="Our Infrastructure"
      subtitle="World-class facilities supporting innovation and excellence"
    ></app-hero>

    <!-- Facilities Overview -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            *ngFor="let facility of infrastructure" 
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
          >
            <!-- Image -->
            <div class="h-48 overflow-hidden bg-gray-200">
              <img 
                [src]="facility.image" 
                [alt]="facility.title"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-primary mb-3">{{ facility.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ facility.description }}</p>

              <div class="space-y-2 mb-4">
                <h4 class="font-semibold text-gray-700 text-sm">Capabilities:</h4>
                <ul class="space-y-1">
                  <li *ngFor="let cap of facility.capabilities" class="text-sm text-gray-600 flex items-start gap-2">
                    <span class="text-accent font-bold">▸</span>
                    <span>{{ cap }}</span>
                  </li>
                </ul>
              </div>

              <button class="w-full border-2 border-accent text-accent py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Facilities -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary mb-12 text-center">Facility Details</h2>

        <div class="space-y-16">
          <div 
            *ngFor="let facility of infrastructure; let i = index"
            class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-slide-in-up"
            [attr.data-index]="i"
          >
            <!-- Image (alternating) -->
            <div [class.order-2]="i % 2 === 0" [class.md:order-2]="i % 2 === 0">
              <img 
                [src]="facility.image" 
                [alt]="facility.title"
                class="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div [class.order-1]="i % 2 === 0" [class.md:order-1]="i % 2 === 0">
              <h3 class="text-3xl font-bold text-primary mb-4">{{ facility.title }}</h3>
              <p class="text-gray-600 mb-6 text-lg leading-relaxed">{{ facility.description }}</p>

              <div class="bg-white rounded-lg p-6 shadow-lg">
                <h4 class="font-bold text-gray-700 mb-4 text-lg">Key Capabilities</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div *ngFor="let cap of facility.capabilities" class="flex items-start gap-3">
                    <span class="text-accent font-bold text-xl">✓</span>
                    <span class="text-gray-600">{{ cap }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary mb-12 text-center">Certifications & Standards</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let cert of certifications" class="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
            <div class="text-4xl mb-4">{{ cert.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-600">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Reach -->
    <section class="py-20 bg-primary text-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Global Operations</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let region of regions" class="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
            <div class="text-4xl mb-4">{{ region.icon }}</div>
            <h3 class="text-xl font-bold mb-2">{{ region.name }}</h3>
            <p class="text-blue-100 text-sm mb-3">{{ region.offices }} offices</p>
            <p class="text-blue-200 text-sm">{{ region.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class InfrastructureComponent implements OnInit {
  infrastructure: Infrastructure[] = [];

  certifications = [
    { icon: '📋', name: 'ISO 9001:2015', description: 'Quality Management' },
    { icon: '🔒', name: 'ISO 27001', description: 'Information Security' },
    { icon: '⚙️', name: 'IEC 61508', description: 'Functional Safety' },
    { icon: '🌱', name: 'ISO 14001', description: 'Environmental Management' }
  ];

  regions = [
    {
      icon: '🌍',
      name: 'North America',
      offices: '5',
      description: 'Headquarters and major manufacturing facility in the USA'
    },
    {
      icon: '🇪🇺',
      name: 'Europe',
      offices: '3',
      description: 'Regional headquarters with distribution centers'
    },
    {
      icon: '🌏',
      name: 'Asia Pacific',
      offices: '4',
      description: 'Growing presence with local support and manufacturing'
    }
  ];

  constructor(
    private seoService: SEOService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Infrastructure - TechFlow Industrial Solutions',
      description: 'Explore our world-class manufacturing facilities, R&D centers, and global logistics network.',
      keywords: 'manufacturing facilities, R&D center, industrial infrastructure, distribution network'
    });

    this.infrastructure = this.dataService.getInfrastructure();
  }
}
