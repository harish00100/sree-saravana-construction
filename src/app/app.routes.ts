import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { HomeComponent } from './pages/home.component';
import { ProductsComponent } from './pages/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sree Saravana Construction Chemicals' },
  { path: 'product', component: ProductsComponent, title: 'Epoxy Resin | Sree Saravana' },
  { path: 'products', redirectTo: 'product', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'About | Sree Saravana' },
  { path: 'contact', component: ContactComponent, title: 'Enquire | Sree Saravana' },
  { path: '**', redirectTo: '' }
];
