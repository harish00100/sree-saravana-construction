import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEOMetadata } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {}

  setMetadata(metadata: SEOMetadata): void {
    this.titleService.setTitle(metadata.title);
    this.metaService.updateTag({ name: 'description', content: metadata.description });

    if (metadata.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: metadata.keywords });
    }

    this.metaService.updateTag({ property: 'og:title', content: metadata.title });
    this.metaService.updateTag({ property: 'og:description', content: metadata.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: metadata.title });
    this.metaService.updateTag({ name: 'twitter:description', content: metadata.description });

    if (metadata.image) {
      this.metaService.updateTag({ property: 'og:image', content: metadata.image });
      this.metaService.updateTag({ name: 'twitter:image', content: metadata.image });
    }

    if (metadata.url) {
      this.metaService.updateTag({ property: 'og:url', content: metadata.url });
    }
  }

  setDefaultMetadata(): void {
    this.setMetadata({
      title: 'Sree Saravana Construction Chemicals | Epoxy Resin',
      description: 'Explore epoxy resin, colour possibilities and project enquiries from Sree Saravana Construction Chemicals.',
      keywords: 'epoxy resin, coloured epoxy resin, construction chemicals'
    });
  }

  setStructuredData(data: object): void {
    const oldScript = document.head.querySelector('script[data-structured-data="business"]');
    oldScript?.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset['structuredData'] = 'business';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  setOrganizationSchema(): void {
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Sree Saravana Construction Chemicals',
      description: 'Supplier of epoxy resin for project enquiries.'
    });
  }

  setProductSchema(product: { name: string; description: string; image: string }): void {
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      brand: {
        '@type': 'Brand',
        name: 'Sree Saravana Construction Chemicals'
      }
    });
  }
}
