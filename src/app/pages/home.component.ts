import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden bg-cream">
      <div class="resin-grid absolute inset-0 opacity-60"></div>
      <div class="absolute -top-24 -left-24 size-80 rounded-full bg-amber/12 blur-3xl"></div>
      <div class="absolute right-[8%] bottom-0 size-64 rounded-full bg-teal/12 blur-3xl"></div>

      <div class="site-container relative grid min-h-[calc(100vh-108px)] items-center gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
        <div class="relative z-10 max-w-xl">
          <div class="eyebrow reveal">One product. Many possibilities.</div>
          <h1 class="display-title reveal reveal-delay-1 mt-7 text-[clamp(3.5rem,8vw,7.4rem)] text-ink">
            Resin,<br>
            <span class="text-forest">reimagined.</span>
          </h1>
          <p class="reveal reveal-delay-2 mt-7 max-w-lg text-base leading-8 text-ink/62 sm:text-lg">
            Explore clear epoxy resin and a spectrum of colour options for distinctive surfaces,
            creative finishes and project-specific applications.
          </p>

          <div class="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              routerLink="/product"
              class="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-forest/15 transition hover:-translate-y-1 hover:bg-ink"
            >
              Explore epoxy resin
              <span aria-hidden="true">↗</span>
            </a>
            <a
              routerLink="/contact"
              class="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-sm font-extrabold text-ink transition hover:border-amber hover:bg-white"
            >
              Discuss your requirement
            </a>
          </div>

          <div class="reveal reveal-delay-3 mt-10 flex items-center gap-4">
            <div class="flex -space-x-2" aria-label="Colour options">
              @for (colour of colours; track colour.name) {
                <span
                  class="size-8 rounded-full border-2 border-cream shadow-sm"
                  [style.background]="colour.value"
                  [title]="colour.name"
                ></span>
              }
            </div>
            <p class="text-xs font-bold tracking-wide text-ink/50">Clear, tinted & custom colour directions</p>
          </div>
        </div>

        <div class="relative min-h-[400px] lg:min-h-[650px]">
          <div class="resin-orb absolute top-[4%] right-[3%] size-24 rounded-[42%_58%_62%_38%] bg-amber/65 shadow-[inset_12px_12px_30px_rgb(255_255_255/35%)]"></div>
          <div class="resin-orb absolute bottom-[6%] left-[1%] size-20 rounded-[61%_39%_43%_57%] bg-teal/55 shadow-[inset_10px_10px_24px_rgb(255_255_255/28%)] [animation-delay:-2s]"></div>

          <div class="absolute inset-0 overflow-hidden rounded-[2.2rem] bg-white shadow-[0_35px_100px_rgb(23_32_30/16%)] lg:rounded-[3rem]">
            <img
              src="/assets/epoxy-hero.png"
              alt="Epoxy resin containers with translucent colour samples"
              class="h-full w-full object-cover object-center"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"></div>
          </div>

          <div class="glass-panel absolute right-4 bottom-4 left-4 rounded-[1.5rem] p-4 sm:right-7 sm:bottom-7 sm:left-auto sm:w-72 sm:p-5">
            <div class="flex items-center gap-4">
              <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest text-white">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                  <path d="M4 17.5 10.5 11l2.6 2.6L20 6.7"/>
                  <path d="M15.5 6.7H20v4.5"/>
                </svg>
              </span>
              <span>
                <strong class="block text-sm font-extrabold text-ink">Made for your brief</strong>
                <span class="mt-1 block text-xs leading-5 text-ink/55">Tell us the use, quantity and colour direction.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-ink/8 bg-paper">
      <div class="site-container grid divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
        @for (point of focusPoints; track point.title; let i = $index) {
          <div class="flex items-start gap-4 py-8 md:px-8 first:md:pl-0 last:md:pr-0">
            <span class="font-display text-3xl text-amber">0{{ i + 1 }}</span>
            <span>
              <strong class="block text-sm font-extrabold text-ink">{{ point.title }}</strong>
              <span class="mt-1 block text-xs leading-5 text-ink/50">{{ point.copy }}</span>
            </span>
          </div>
        }
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container">
        <div class="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div class="eyebrow">The product</div>
            <h2 class="display-title mt-5 max-w-2xl text-5xl text-ink sm:text-6xl lg:text-7xl">
              Clear at heart.<br>
              <span class="text-forest">Bold by choice.</span>
            </h2>
          </div>
          <p class="max-w-xl text-base leading-8 text-ink/58 lg:justify-self-end">
            The website is deliberately centred around one product. That makes it easier to understand
            the material, imagine colour directions and send a useful enquiry without distraction.
          </p>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article class="group relative min-h-[510px] overflow-hidden rounded-[2.25rem] bg-ink p-7 text-white sm:p-10">
            <div class="absolute -right-24 -bottom-32 size-[28rem] rounded-full bg-teal/50 blur-3xl transition duration-700 group-hover:scale-110"></div>
            <div class="absolute top-8 right-8 flex gap-2">
              @for (colour of colours; track colour.name) {
                <span class="size-3 rounded-full border border-white/35" [style.background]="colour.value"></span>
              }
            </div>
            <div class="relative flex h-full flex-col justify-between">
              <div>
                <span class="text-xs font-extrabold tracking-[0.18em] text-amber uppercase">Epoxy resin</span>
                <h3 class="display-title mt-5 max-w-xl text-5xl sm:text-6xl">A finish that starts with clarity.</h3>
              </div>
              <div>
                <div class="grid max-w-2xl gap-5 sm:grid-cols-3">
                  @for (feature of productFeatures; track feature.title) {
                    <div class="border-t border-white/15 pt-4">
                      <strong class="text-sm font-extrabold">{{ feature.title }}</strong>
                      <p class="mt-2 text-xs leading-5 text-white/48">{{ feature.copy }}</p>
                    </div>
                  }
                </div>
                <a routerLink="/product" class="mt-9 inline-flex items-center gap-3 text-sm font-extrabold text-white">
                  See product details <span class="text-amber" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <article class="rounded-[2.25rem] bg-mint p-7 sm:p-9">
              <span class="grid size-12 place-items-center rounded-2xl bg-forest text-white">
                <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                  <path d="M12 3c3 3.5 5.5 6.3 5.5 10a5.5 5.5 0 0 1-11 0C6.5 9.3 9 6.5 12 3Z"/>
                  <path d="M9.5 14.5c.5 1.2 1.3 1.8 2.6 2"/>
                </svg>
              </span>
              <h3 class="mt-7 text-xl font-extrabold tracking-tight">Colour conversations, not confusing catalogues.</h3>
              <p class="mt-3 text-sm leading-7 text-ink/55">
                Share a shade reference or visual direction. Availability and suitability can be discussed during enquiry.
              </p>
            </article>

            <article class="rounded-[2.25rem] border border-ink/8 bg-cream p-7 sm:p-9">
              <span class="text-xs font-extrabold tracking-[0.16em] text-coral uppercase">Need guidance?</span>
              <h3 class="mt-5 text-2xl font-extrabold tracking-tight">Start with the application.</h3>
              <p class="mt-3 text-sm leading-7 text-ink/55">
                Tell us what you are making or coating. The enquiry form captures the important first details.
              </p>
              <a routerLink="/contact" class="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-forest">
                Open enquiry form <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cream py-20 lg:py-28">
      <div class="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="relative">
          <div class="overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgb(23_32_30/18%)]">
            <img
              src="/assets/epoxy-floor.png"
              alt="Decorative teal epoxy resin floor in a modern interior"
              loading="lazy"
              class="aspect-[4/3] w-full object-cover"
            >
          </div>
          <div class="absolute -right-4 -bottom-5 rounded-3xl bg-paper p-5 shadow-xl sm:right-7">
            <span class="block text-xs font-extrabold tracking-[0.15em] text-amber uppercase">Visual possibility</span>
            <span class="mt-2 block text-sm font-bold text-ink">Decorative floor finish</span>
          </div>
        </div>

        <div class="lg:pl-10">
          <div class="eyebrow">Where resin can go</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">From practical surfaces to expressive finishes.</h2>
          <p class="mt-6 text-base leading-8 text-ink/58">
            Epoxy resin can support many creative and functional directions. Final suitability depends on the specific
            product grade, surface, preparation and project requirement.
          </p>
          <div class="mt-9 grid gap-3 sm:grid-cols-2">
            @for (application of applications; track application) {
              <div class="flex items-center gap-3 rounded-2xl border border-ink/8 bg-paper px-4 py-4 text-sm font-bold text-ink/72">
                <span class="size-2 rounded-full bg-amber"></span>
                {{ application }}
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container">
        <div class="mx-auto max-w-2xl text-center">
          <div class="eyebrow justify-center">Simple enquiry path</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">A smooth start to your next project.</h2>
        </div>
        <div class="relative mt-14 grid gap-6 md:grid-cols-3">
          <div class="absolute top-9 right-[16%] left-[16%] hidden border-t border-dashed border-ink/20 md:block"></div>
          @for (step of steps; track step.title; let i = $index) {
            <article class="relative rounded-[2rem] border border-ink/8 bg-white p-7 text-center shadow-[0_18px_50px_rgb(23_32_30/5%)]">
              <span class="relative z-10 mx-auto grid size-16 place-items-center rounded-full bg-cream font-display text-2xl text-forest ring-8 ring-paper">
                {{ i + 1 }}
              </span>
              <h3 class="mt-6 text-lg font-extrabold">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/52">{{ step.copy }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="bg-paper px-4 pb-4">
      <div class="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-white sm:px-10 lg:py-20">
        <div class="absolute -top-24 right-0 size-80 rounded-full bg-teal/40 blur-3xl"></div>
        <div class="absolute -bottom-32 left-[20%] size-80 rounded-full bg-amber/20 blur-3xl"></div>
        <div class="relative mx-auto max-w-3xl text-center">
          <p class="text-xs font-extrabold tracking-[0.18em] text-amber uppercase">Have a colour or application in mind?</p>
          <h2 class="display-title mt-5 text-5xl sm:text-6xl">Let’s turn the idea into a useful enquiry.</h2>
          <p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
            Share your requirement now. The form is ready to capture details while contact integration can be added later.
          </p>
          <a routerLink="/contact" class="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-forest transition hover:-translate-y-1">
            Start an enquiry <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  readonly colours = [
    { name: 'Amber', value: '#d98b3d' },
    { name: 'Teal', value: '#147d78' },
    { name: 'Blue', value: '#2878a8' },
    { name: 'Violet', value: '#795398' },
    { name: 'Coral', value: '#c96852' }
  ];

  readonly focusPoints = [
    { title: 'Focused product story', copy: 'One clear product, presented with depth.' },
    { title: 'Multiple colour directions', copy: 'Visualise clear, tinted and decorative options.' },
    { title: 'Enquiry-first experience', copy: 'No online selling. Just a useful conversation.' }
  ];

  readonly productFeatures = [
    { title: 'Clear base', copy: 'A clean starting point for transparent and tinted directions.' },
    { title: 'Colour flexibility', copy: 'Discuss standard or project-inspired colour requirements.' },
    { title: 'Versatile use', copy: 'Suitability can be matched to the intended application.' }
  ];

  readonly applications = [
    'Decorative flooring',
    'Table & art casting',
    'Protective surface coating',
    'Creative colour finishes'
  ];

  readonly steps = [
    { title: 'Share your use', copy: 'Tell us the surface, object or project you are planning.' },
    { title: 'Add colour direction', copy: 'Mention clear, tinted or a shade reference you have in mind.' },
    { title: 'Receive a response', copy: 'Your requirement is ready for a direct business conversation.' }
  ];

  constructor(private readonly seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Sree Saravana Construction Chemicals | Epoxy Resin',
      description: 'Explore epoxy resin, multiple colour possibilities and application ideas. Send a direct project enquiry to Sree Saravana Construction Chemicals.',
      keywords: 'Epoxy pigment, Epoxy resin pigment, Epoxy pigment supplier, Epoxy Pigment Manufacturer, Epoxy pigment wholesale, Bulk Epoxy pigments, custom epoxy color pigment, premium epoxy pigments, high quality resin pigments'
    });
  }
}
