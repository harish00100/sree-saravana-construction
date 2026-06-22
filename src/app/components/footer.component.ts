import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-ink text-white">
      <div class="site-container py-14 lg:py-18">
        <div class="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          <div>
            <a routerLink="/" class="inline-flex items-center gap-3">
              <span class="grid size-11 place-items-center rounded-[15px] bg-white text-forest">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2.7S5.8 9.1 5.8 14.3A6.2 6.2 0 0 0 18.2 14.3C18.2 9.1 12 2.7 12 2.7Z" fill="currentColor"/>
                  <path d="M9.2 15.1c.4 1.4 1.4 2.2 2.9 2.4" stroke="#d98b3d" stroke-width="1.7" stroke-linecap="round"/>
                </svg>
              </span>
              <span>
                <span class="block text-base font-extrabold">Sree Saravana</span>
                <span class="block text-[10px] font-bold tracking-[0.15em] text-white/45 uppercase">Construction Chemicals</span>
              </span>
            </a>
            <p class="mt-6 max-w-md text-sm leading-7 text-white/55">
              A focused product showcase for epoxy resin, colour possibilities and project enquiries.
            </p>
          </div>

          <div>
            <h3 class="text-xs font-extrabold tracking-[0.16em] text-amber uppercase">Explore</h3>
            <div class="mt-5 grid gap-3 text-sm font-semibold text-white/60">
              <a routerLink="/" class="transition hover:text-white">Home</a>
              <a routerLink="/product" class="transition hover:text-white">Epoxy Resin</a>
              <a routerLink="/about" class="transition hover:text-white">About Us</a>
              <a routerLink="/contact" class="transition hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 class="text-xs font-extrabold tracking-[0.16em] text-amber uppercase">Business details</h3>
            <div class="mt-5 space-y-3 text-sm leading-6 text-white/60">
              <p>Phone number to be added</p>
              <p>Business email to be added</p>
              <p>Full address to be added</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {{ currentYear }} Sree Saravana Construction Chemicals.</p>
          <p>Product details are confirmed during enquiry.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
