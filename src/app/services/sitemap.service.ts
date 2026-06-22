import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {
  private baseUrl = 'https://techflow-industrial.com';

  private routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: 'about', priority: '0.9', changefreq: 'monthly' },
    { path: 'products', priority: '0.9', changefreq: 'weekly' },
    { path: 'industries', priority: '0.8', changefreq: 'monthly' },
    { path: 'infrastructure', priority: '0.7', changefreq: 'monthly' },
    { path: 'gallery', priority: '0.7', changefreq: 'weekly' },
    { path: 'contact', priority: '0.8', changefreq: 'monthly' }
  ];

  generateSitemap(): string {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    this.routes.forEach(route => {
      xml += '  <url>\n';
      xml += `    <loc>${this.baseUrl}${route.path ? '/' + route.path : ''}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  generateRobots(): string {
    return `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /private

Sitemap: ${this.baseUrl}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`;
  }
}
