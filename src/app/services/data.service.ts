import { Injectable } from '@angular/core';
import { Product, Industry, Infrastructure, GalleryItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Advanced Automation Systems',
      description: 'State-of-the-art automation solutions for manufacturing lines.',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      features: ['Real-time monitoring', 'AI-powered optimization', 'Predictive maintenance', 'Cloud integration'],
      specifications: {
        'Processing Speed': '10,000 units/hour',
        'Accuracy': '±0.1mm',
        'Power': '50kW',
        'Warranty': '5 years'
      }
    },
    {
      id: '2',
      name: 'Precision Control Units',
      description: 'High-precision control systems for complex industrial processes.',
      category: 'Control Systems',
      image: 'https://images.unsplash.com/photo-1581092162562-40038fbbb237?w=500&h=500&fit=crop',
      features: ['Nanosecond accuracy', 'Multi-axis control', 'Fail-safe mechanisms', 'Remote diagnostics'],
      specifications: {
        'Resolution': '1 micron',
        'Response Time': '< 1ms',
        'Channels': '256',
        'Interface': 'Ethernet, Modbus, Profibus'
      }
    },
    {
      id: '3',
      name: 'IoT Sensor Network',
      description: 'Comprehensive IoT solutions for complete factory digitalization.',
      category: 'IoT',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      features: ['Wireless connectivity', 'Real-time analytics', 'Predictive insights', 'Scalable architecture'],
      specifications: {
        'Sensor Types': '50+',
        'Range': 'Up to 5km',
        'Battery Life': '5 years',
        'Data Transfer Rate': '256 Mbps'
      }
    },
    {
      id: '4',
      name: 'Energy Management Platform',
      description: 'Smart energy optimization and monitoring for industrial facilities.',
      category: 'Energy',
      image: 'https://images.unsplash.com/photo-1581092163192-966c6b3eded1?w=500&h=500&fit=crop',
      features: ['Energy forecasting', 'Load balancing', 'Cost optimization', 'Sustainability tracking'],
      specifications: {
        'Monitoring Channels': '1000+',
        'Accuracy': '±0.5%',
        'Reporting': 'Real-time & Historical',
        'Integration': 'All major vendors'
      }
    }
  ];

  private industries: Industry[] = [
    {
      id: 'automotive',
      name: 'Automotive Manufacturing',
      description: 'Specialized solutions for vehicle production and assembly.',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      applications: ['Assembly line automation', 'Quality control systems', 'Precision machining'],
      benefits: ['50% increased efficiency', 'Zero-defect manufacturing', 'Reduced downtime']
    },
    {
      id: 'semiconductor',
      name: 'Semiconductor & Electronics',
      description: 'Ultra-precise systems for microelectronics manufacturing.',
      icon: '🔌',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      applications: ['Cleanroom automation', 'Wafer processing', 'Component testing'],
      benefits: ['99.99% uptime', 'Contamination reduction', 'Yield improvement']
    },
    {
      id: 'pharmaceutical',
      name: 'Pharmaceutical & Healthcare',
      description: 'Compliant solutions meeting strict regulatory requirements.',
      icon: '💊',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop',
      applications: ['Batch processing', 'Track & trace', 'Validation & compliance'],
      benefits: ['FDA compliance', 'Traceability', 'Quality assurance']
    },
    {
      id: 'food',
      name: 'Food & Beverage',
      description: 'Hygienic and efficient production systems.',
      icon: '🍔',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
      applications: ['Packaging lines', 'Quality sorting', 'Temperature control'],
      benefits: ['Hygiene standards met', 'Waste reduction', 'Production speed']
    }
  ];

  private infrastructure: Infrastructure[] = [
    {
      id: 'manufacturing',
      title: 'Advanced Manufacturing Facilities',
      description: 'State-of-the-art manufacturing plants equipped with the latest technology.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      capabilities: ['10+ production lines', '24/7 operation', 'In-house R&D', 'Quality testing labs']
    },
    {
      id: 'rd',
      title: 'Research & Development Center',
      description: 'Cutting-edge R&D facility for continuous innovation.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      capabilities: ['Prototype development', 'Testing facilities', 'Patent generation', 'Collaboration labs']
    },
    {
      id: 'logistics',
      title: 'Global Logistics Network',
      description: 'Efficient distribution and supply chain management.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      capabilities: ['30+ warehouses', 'Real-time tracking', 'Express delivery', 'Same-day shipping']
    }
  ];

  private gallery: GalleryItem[] = [
    {
      id: '1',
      title: 'Manufacturing Floor',
      description: 'Our state-of-the-art manufacturing facility',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      category: 'Facilities',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Assembly Line',
      description: 'Automated assembly process in action',
      image: 'https://images.unsplash.com/photo-1581092162562-40038fbbb237?w=800&h=600&fit=crop',
      category: 'Operations',
      date: '2024-02-20'
    },
    {
      id: '3',
      title: 'Quality Control',
      description: 'Precision testing and quality assurance',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      category: 'Quality',
      date: '2024-03-10'
    },
    {
      id: '4',
      title: 'Product Showcase',
      description: 'Latest product innovations',
      image: 'https://images.unsplash.com/photo-1581092163192-966c6b3eded1?w=800&h=600&fit=crop',
      category: 'Products',
      date: '2024-03-25'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getIndustries(): Industry[] {
    return this.industries;
  }

  getIndustryById(id: string): Industry | undefined {
    return this.industries.find(i => i.id === id);
  }

  getInfrastructure(): Infrastructure[] {
    return this.infrastructure;
  }

  getGallery(): GalleryItem[] {
    return this.gallery;
  }

  getGalleryByCategory(category: string): GalleryItem[] {
    return this.gallery.filter(item => item.category === category);
  }
}
