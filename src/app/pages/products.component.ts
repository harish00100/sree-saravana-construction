import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div class="resin-grid absolute inset-0 opacity-[0.08]"></div>
      <div class="absolute -top-24 right-[10%] size-80 rounded-full bg-teal/35 blur-3xl"></div>
      <div class="absolute -bottom-36 left-[20%] size-96 rounded-full bg-amber/20 blur-3xl"></div>
      <div class="site-container relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div class="eyebrow !text-white/70">Our only product</div>
          <h1 class="display-title mt-6 text-6xl sm:text-7xl lg:text-8xl">Epoxy<br><span class="text-amber">Resin.</span></h1>
          <p class="mt-7 max-w-lg text-base leading-8 text-white/58">
            A focused resin solution presented around the details customers care about first:
            finish, colour direction, application and quantity.
          </p>
          <a routerLink="/contact" class="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-ink transition hover:-translate-y-1">
            Enquire for this product <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
            <img src="/assets/epoxy-hero.png" alt="Epoxy resin product with colour samples" class="aspect-[16/11] w-full object-cover">
          </div>
          <div class="glass-panel absolute right-5 bottom-5 rounded-2xl px-5 py-4 text-ink">
            <span class="block text-[10px] font-extrabold tracking-[0.16em] text-coral uppercase">Product focus</span>
            <strong class="mt-1 block text-sm">Clear · Tinted · Decorative</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div class="lg:sticky lg:top-32 lg:self-start">
          <div class="eyebrow">Colour explorer</div>
          <h2 class="display-title mt-5 text-5xl sm:text-6xl">See the same resin in a different mood.</h2>
          <p class="mt-6 text-sm leading-7 text-ink/55">
            These swatches are visual directions for the website. Final shades, transparency and availability should
            always be confirmed against the actual requirement.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            @for (colour of colours; track colour.name; let i = $index) {
              <button
                type="button"
                (click)="selectedColour = i"
                [class.ring-2]="selectedColour === i"
                [class.ring-offset-4]="selectedColour === i"
                [class.ring-forest]="selectedColour === i"
                class="group flex items-center gap-2 rounded-full border border-ink/10 bg-white py-2 pr-4 pl-2 text-xs font-extrabold text-ink/65 transition hover:-translate-y-0.5"
              >
                <span class="size-7 rounded-full shadow-inner" [style.background]="colour.value"></span>
                {{ colour.name }}
              </button>
            }
          </div>
        </div>

        <div
          class="relative min-h-[540px] overflow-hidden rounded-[2.5rem] p-7 transition-colors duration-700 sm:p-10"
          [style.background]="'linear-gradient(145deg, ' + colours[selectedColour].soft + ', #f6f1e8)'"
        >
          <div
            class="absolute -right-20 -bottom-16 size-[26rem] rounded-[46%_54%_58%_42%] opacity-80 blur-[1px] transition-all duration-700"
            [style.background]="'radial-gradient(circle at 35% 30%, rgba(255,255,255,.72), ' + colours[selectedColour].value + ' 52%, ' + colours[selectedColour].deep + ')'"
          ></div>
          <div
            class="absolute right-[15%] bottom-[16%] size-56 rounded-full opacity-25 blur-2xl transition-colors duration-700"
            [style.background]="colours[selectedColour].value"
          ></div>

          <div class="relative flex min-h-[460px] flex-col justify-between">
            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="text-[10px] font-extrabold tracking-[0.17em] text-ink/45 uppercase">Selected direction</span>
                <h3 class="display-title mt-2 text-5xl text-ink">{{ colours[selectedColour].name }}</h3>
              </div>
              <span class="rounded-full bg-white/70 px-4 py-2 text-[10px] font-extrabold tracking-wider text-ink/50 uppercase backdrop-blur">
                Visual sample
              </span>
            </div>

            <div class="relative mx-auto grid size-64 place-items-center sm:size-72">
              <div
                class="absolute inset-0 rotate-12 rounded-[38%_62%_55%_45%] shadow-[inset_25px_20px_55px_rgb(255_255_255/45%),0_30px_60px_rgb(23_32_30/18%)] transition-colors duration-700"
                [style.background]="'linear-gradient(145deg, rgba(255,255,255,.65), ' + colours[selectedColour].value + ' 55%, ' + colours[selectedColour].deep + ')'"
              ></div>
              <div class="relative text-center text-white drop-shadow-md">
                <span class="font-display text-7xl">S</span>
                <span class="block text-[9px] font-extrabold tracking-[0.25em] uppercase">Resin sample</span>
              </div>
            </div>

            <div class="max-w-md rounded-2xl bg-white/60 p-5 backdrop-blur-md">
              <p class="text-xs leading-6 text-ink/60">
                {{ colours[selectedColour].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cream py-20 lg:py-28">
      <div class="site-container">
        <div class="max-w-3xl">
          <div class="eyebrow">What to expect</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">The useful details, without overclaiming.</h2>
          <p class="mt-6 text-base leading-8 text-ink/56">
            Exact mix ratio, curing time, coverage and technical performance depend on the supplied grade.
            Those details should be confirmed through the product datasheet or direct enquiry.
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          @for (detail of details; track detail.title) {
            <article class="rounded-[2rem] border border-ink/8 bg-paper p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <span class="grid size-11 place-items-center rounded-2xl bg-mint text-forest">
                <span class="size-2.5 rounded-full bg-current"></span>
              </span>
              <h3 class="mt-6 text-lg font-extrabold">{{ detail.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/52">{{ detail.copy }}</p>
            </article>
          }
        </div>

        <div class="mt-12 overflow-hidden rounded-[2.25rem] border border-ink/8 bg-paper">
          <div class="grid lg:grid-cols-2">
            @for (spec of specifications; track spec.label) {
              <div class="flex items-start justify-between gap-6 border-b border-ink/8 px-6 py-5 last:border-b-0 lg:nth-[odd]:border-r lg:nth-[-n+2]:border-b">
                <span class="text-xs font-extrabold tracking-wide text-ink/42 uppercase">{{ spec.label }}</span>
                <span class="max-w-[60%] text-right text-sm font-bold text-ink/75">{{ spec.value }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container grid items-center gap-12 lg:grid-cols-2">
        <div class="overflow-hidden rounded-[2.5rem]">
          <img
            src="/assets/epoxy-floor.png"
            alt="Example of a decorative epoxy floor application"
            loading="lazy"
            class="aspect-square w-full object-cover transition duration-700 hover:scale-[1.03]"
          >
        </div>
        <div class="lg:pl-10">
          <div class="eyebrow">Application matters</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">Begin with the surface, not just the colour.</h2>
          <p class="mt-6 text-base leading-8 text-ink/56">
            A good enquiry explains where the resin will be used, the desired appearance and the approximate quantity.
            Surface preparation and application conditions can materially affect the result.
          </p>
          <ul class="mt-8 space-y-4">
            @for (item of checklist; track item) {
              <li class="flex items-start gap-4 text-sm font-bold text-ink/68">
                <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-forest text-[10px] text-white">✓</span>
                {{ item }}
              </li>
            }
          </ul>
          <a routerLink="/contact" class="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-ink">
            Share product requirement <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-paper px-4 pb-4">
      <div class="mx-auto max-w-[90rem] rounded-[2.5rem] bg-amber px-6 py-14 text-center text-ink sm:px-10 lg:py-18">
        <p class="text-xs font-extrabold tracking-[0.18em] uppercase">Need a technical answer?</p>
        <h2 class="display-title mx-auto mt-4 max-w-3xl text-5xl sm:text-6xl">Ask about the exact product grade before planning application.</h2>
        <a routerLink="/contact" class="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-forest">
          Send an enquiry <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  `
})
export class ProductsComponent implements OnInit {
  selectedColour = 0;

  readonly colours = [
    {
      name: 'Crystal Clear',
      value: '#b9ddd8',
      deep: '#477d78',
      soft: '#e5f0ed',
      description: 'A clean, transparent direction suited to projects where the base material or embedded detail should remain visible.'
    },
    {
      name: 'Amber',
      value: '#d98b3d',
      deep: '#8a4f22',
      soft: '#f4e2ca',
      description: 'A warm, honey-toned direction that can bring depth and richness to decorative surfaces and cast pieces.'
    },
    {
      name: 'Ocean Teal',
      value: '#147d78',
      deep: '#0b4946',
      soft: '#d5ebe7',
      description: 'A sophisticated blue-green direction with a contemporary architectural feel.'
    },
    {
      name: 'Sapphire',
      value: '#2878a8',
      deep: '#17445f',
      soft: '#dceaf3',
      description: 'A crisp blue direction for bold accents, decorative work and visually cool finishes.'
    },
    {
      name: 'Plum',
      value: '#795398',
      deep: '#49305e',
      soft: '#e8dfef',
      description: 'A deeper violet direction for expressive projects that call for a distinctive, premium character.'
    },
    {
      name: 'Coral',
      value: '#c96852',
      deep: '#7b3b2d',
      soft: '#f1ddd8',
      description: 'A warm colour direction that feels energetic and contemporary without becoming overly bright.'
    }
  ];

  readonly details = [
    { title: 'Finish direction', copy: 'Discuss clear, tinted, glossy or decorative visual requirements.' },
    { title: 'Colour reference', copy: 'Share a shade, image or sample direction for the conversation.' },
    { title: 'Application context', copy: 'Mention the surface, environment and intended end use.' },
    { title: 'Quantity needed', copy: 'An approximate requirement helps make the enquiry more useful.' }
  ];

  readonly specifications = [
    { label: 'Product', value: 'Epoxy resin system' },
    { label: 'Colour', value: 'Clear or tinted, subject to requirement' },
    { label: 'Finish', value: 'Application and grade dependent' },
    { label: 'Technical data', value: 'To be confirmed during enquiry' }
  ];

  readonly checklist = [
    'Describe the surface or object to be coated or cast.',
    'Mention indoor, outdoor or exposure conditions.',
    'Share the finish and colour direction you expect.',
    'Request the relevant technical datasheet before use.'
  ];

  constructor(private readonly seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Epoxy Resin | Sree Saravana Construction Chemicals',
      description: 'Explore the epoxy resin product, colour directions, application ideas and enquiry details.',
      keywords: 'epoxy resin product, clear epoxy resin, coloured resin, decorative epoxy'
    });
  }
}
