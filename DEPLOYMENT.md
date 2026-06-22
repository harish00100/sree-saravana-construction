# TechFlow Industrial Solutions - Deployment Guide

## Project Overview

This is a production-ready Angular 20 industrial manufacturing website built with Tailwind CSS. It features 7 main pages, comprehensive SEO optimization, and modern animations.

## Features

- **7 Main Pages**: Home, About, Products, Industries, Infrastructure, Gallery, Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data (JSON-LD), sitemap.xml, robots.txt
- **Performance**: Lazy loading images, optimized animations, async routing
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Modern UI**: Smooth animations, gradient backgrounds, card-based layouts
- **Angular 20**: Latest Angular features with standalone components
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
src/
├── app/
│   ├── components/          # Shared components (Header, Footer, Hero, Cards)
│   ├── pages/              # Page components (Home, Products, Industries, etc.)
│   ├── services/           # Services (SEO, Data, Sitemap)
│   ├── models/             # TypeScript interfaces and types
│   ├── utils/              # Utility functions
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Route configuration
│   └── app.config.ts       # Application configuration
├── styles.css              # Global styles with animations
├── index.html              # HTML template with metadata
└── main.ts                 # Application entry point
public/
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # XML sitemap for search engines
└── favicon.ico             # Site icon
```

## Installation & Development

### Prerequisites
- Node.js (v20+)
- pnpm or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test
```

## Development Server

Run `pnpm dev` to start the development server. Open your browser to `http://localhost:4200/`. The application will automatically reload if you make changes to the source files.

## Build

Run `pnpm build` to build the project. The build artifacts will be stored in the `dist/` directory. This creates a production-optimized build with minification and tree-shaking.

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Angular and configure the build

### Environment Variables

No environment variables are required for this deployment. All data is handled through services with mock data.

### Build Settings

- **Framework**: Angular
- **Build Command**: `npm run build` (or `pnpm build`)
- **Output Directory**: `dist/industrial-site/browser`

## Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with custom theme colors:
- **Primary**: #003366 (Deep Blue)
- **Secondary**: #2c3e50 (Dark Gray)
- **Accent**: #0066cc (Bright Blue)
- **Accent Light**: #e8f0ff

Colors can be customized in `tailwind.config.js`.

### SEO Configuration

SEO metadata is managed through:
1. `src/app/services/seo.service.ts` - Dynamically sets meta tags and structured data
2. `src/index.html` - Base meta tags and Open Graph configuration
3. `public/sitemap.xml` - XML sitemap for search engines
4. `public/robots.txt` - Crawler directives

Each page component sets its own SEO metadata using the `SEOService`.

## Pages and Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomeComponent | Landing page with featured products and industries |
| `/about` | AboutComponent | Company mission, timeline, team, and values |
| `/products` | ProductsComponent | Product catalog with filtering |
| `/industries` | IndustriesComponent | Industry-specific solutions |
| `/infrastructure` | InfrastructureComponent | Facilities and global operations |
| `/gallery` | GalleryComponent | Photo gallery with lightbox |
| `/contact` | ContactComponent | Contact form and office locations |

## Performance Optimization

- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Route Lazy Loading**: Routes are configured for code splitting
- **Tree Shaking**: Unused Angular modules are removed in production builds
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Image Optimization**: Using external image URLs with responsive sizing

## Accessibility

The website meets WCAG 2.1 AA standards:
- Semantic HTML elements (`<main>`, `<header>`, `<footer>`, etc.)
- Proper heading hierarchy (h1, h2, h3, etc.)
- Alt text for all images
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible styling
- High contrast colors
- Readable font sizes and line heights

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers

## Customization

### Adding Products

Edit `src/app/services/data.service.ts` and add to the `products` array:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  category: 'Category Name',
  image: 'image-url',
  features: ['Feature 1', 'Feature 2'],
  specifications: { 'Spec': 'Value' }
}
```

### Adding Industries

Edit `src/app/services/data.service.ts` and add to the `industries` array.

### Updating Company Info

1. Update contact information in the components (Header, Footer, Contact Page)
2. Update social media links
3. Update office locations in `contact.component.ts`

## Maintenance

### Regular Updates

- Keep Angular and dependencies updated: `pnpm upgrade`
- Review and update product/industry data quarterly
- Update gallery images with new project photos
- Monitor analytics and SEO performance

### Analytics Integration

To add Google Analytics or similar:

1. Create an analytics service
2. Add tracking code in `main.ts`
3. Track page views in routing guards

## License

Copyright © 2024 TechFlow Industrial Solutions. All rights reserved.

## Support

For deployment support or technical issues, refer to:
- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Built with Angular 20, Tailwind CSS, and TypeScript**
