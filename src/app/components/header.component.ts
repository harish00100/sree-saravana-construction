import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="bg-forest px-4 py-2 text-center text-[11px] font-bold tracking-[0.13em] text-white uppercase">
      Epoxy resin · Multiple colour possibilities · Direct enquiries
    </div>

    <header class="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-xl">
      <div class="site-container flex h-[76px] items-center justify-between gap-6">
        <a routerLink="/" class="group flex min-w-0 items-center gap-3" aria-label="Sree Saravana home">
          <span class="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-[15px] bg-forest text-white shadow-lg shadow-forest/15">
            <svg class="size-6 transition-transform duration-500 group-hover:-rotate-12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.7S5.8 9.1 5.8 14.3A6.2 6.2 0 0 0 18.2 14.3C18.2 9.1 12 2.7 12 2.7Z" fill="currentColor"/>
              <path d="M9.2 15.1c.4 1.4 1.4 2.2 2.9 2.4" stroke="#d98b3d" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="min-w-0">
            <span class="block truncate text-sm font-extrabold tracking-[-0.025em] text-ink sm:text-[15px]">
              Sree Saravana
            </span>
            <span class="block truncate text-[9px] font-bold tracking-[0.14em] text-ink/50 uppercase sm:text-[10px]">
              Construction Chemicals
            </span>
          </span>
        </a>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="!text-forest after:!scale-x-100"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              class="relative py-2 text-sm font-bold text-ink/60 transition-colors hover:text-forest after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-amber after:transition-transform"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="hidden lg:block">
          <a
            routerLink="/contact"
            class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-forest hover:shadow-lg"
          >
            Enquire now
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          type="button"
          class="grid size-11 place-items-center rounded-full border border-ink/12 text-ink lg:hidden"
          (click)="mobileMenuOpen = !mobileMenuOpen"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-label="Toggle navigation"
        >
          @if (mobileMenuOpen) {
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18"/>
            </svg>
          } @else {
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          }
        </button>
      </div>

      @if (mobileMenuOpen) {
        <div class="border-t border-ink/8 bg-paper px-4 py-5 lg:hidden">
          <nav class="site-container flex flex-col gap-2">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                (click)="mobileMenuOpen = false"
                routerLinkActive="bg-cream text-forest"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="rounded-2xl px-4 py-3 text-sm font-bold text-ink/70"
              >
                {{ link.label }}
              </a>
            }
            <a routerLink="/contact" (click)="mobileMenuOpen = false" class="mt-2 rounded-2xl bg-forest px-4 py-3 text-center text-sm font-extrabold text-white">
              Send an enquiry
            </a>
          </nav>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  readonly navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Product', path: '/product' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];
}
