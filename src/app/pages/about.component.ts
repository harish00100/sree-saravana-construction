import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div class="resin-grid absolute inset-0 opacity-60"></div>
      <div class="absolute -top-28 right-[5%] size-96 rounded-full bg-amber/14 blur-3xl"></div>
      <div class="site-container relative">
        <div class="max-w-4xl">
          <div class="eyebrow">About the business</div>
          <h1 class="display-title mt-7 text-[clamp(3.5rem,8vw,7.2rem)] text-ink">
            Focused on the<br>
            <span class="text-forest">material that matters.</span>
          </h1>
          <p class="mt-8 max-w-2xl text-base leading-8 text-ink/58 sm:text-lg">
            Sree Saravana Construction Chemicals is presented here with a simple idea:
            make epoxy resin easier to discover, understand and enquire about.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div class="eyebrow">A family business story</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">Practical conversations. Personal attention.</h2>
          <div class="mt-7 space-y-5 text-base leading-8 text-ink/58">
            <p>
              This website is being built for a business rooted in direct customer relationships.
              Instead of online checkout and endless catalogue pages, it creates space for the right first conversation.
            </p>
            <p>
              Customers can explore the product, see possible colour directions and share the essential details
              of their project through a clear enquiry form.
            </p>
          </div>
          <a routerLink="/contact" class="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-ink">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="relative min-h-[520px]">
          <div class="absolute inset-0 rotate-3 rounded-[2.5rem] bg-mint"></div>
          <div class="absolute inset-0 -rotate-2 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white shadow-2xl sm:p-10">
            <div class="absolute -right-24 -bottom-28 size-80 rounded-full bg-teal/50 blur-3xl"></div>
            <div class="absolute top-12 right-10 size-24 rounded-[42%_58%_60%_40%] bg-amber/70 shadow-[inset_12px_12px_30px_rgb(255_255_255/30%)]"></div>
            <div class="relative flex h-full flex-col justify-between">
              <span class="font-display text-8xl leading-none text-white/8">“</span>
              <blockquote class="display-title text-4xl leading-tight sm:text-5xl">
                Good service begins by understanding what the customer is trying to create.
              </blockquote>
              <div class="border-t border-white/15 pt-6">
                <strong class="block text-sm font-extrabold">A note from the proprietor</strong>
                <span class="mt-1 block text-xs text-white/45">Sree Saravana Construction Chemicals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cream py-20 lg:py-28">
      <div class="site-container">
        <div class="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div class="eyebrow">What guides us</div>
            <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">Simple values, visible in the experience.</h2>
          </div>
          <p class="max-w-lg text-sm leading-7 text-ink/55 lg:justify-self-end">
            The visual identity is modern, but the core idea is timeless: be clear, be useful and make it easy for people to reach the business.
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-3">
          @for (value of values; track value.title; let i = $index) {
            <article
              class="group min-h-80 rounded-[2.25rem] p-8 transition duration-500 hover:-translate-y-2"
              [class.bg-forest]="i === 0"
              [class.text-white]="i === 0"
              [class.bg-paper]="i !== 0"
              [class.border]="i !== 0"
              [class.border-ink/8]="i !== 0"
            >
              <div class="flex items-center justify-between">
                <span
                  class="grid size-12 place-items-center rounded-2xl font-display text-xl"
                  [class.bg-white/10]="i === 0"
                  [class.bg-mint]="i !== 0"
                  [class.text-forest]="i !== 0"
                >
                  0{{ i + 1 }}
                </span>
                <span class="text-2xl text-amber transition-transform group-hover:rotate-45">↗</span>
              </div>
              <h3 class="mt-20 text-2xl font-extrabold tracking-tight">{{ value.title }}</h3>
              <p class="mt-4 text-sm leading-7" [class.text-white/55]="i === 0" [class.text-ink/52]="i !== 0">
                {{ value.copy }}
              </p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-28">
      <div class="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="overflow-hidden rounded-[2.5rem]">
          <img
            src="/assets/epoxy-hero.png"
            alt="Epoxy resin containers and coloured samples"
            loading="lazy"
            class="h-full min-h-[480px] w-full object-cover object-[65%_center]"
          >
        </div>
        <div class="lg:py-8 lg:pl-8">
          <div class="eyebrow">Why one product works</div>
          <h2 class="display-title mt-5 text-5xl text-ink sm:text-6xl">Depth creates more confidence than clutter.</h2>
          <p class="mt-6 text-base leading-8 text-ink/57">
            A single-product website can explain more, feel more memorable and guide visitors toward a meaningful enquiry.
            It also gives the colour possibilities room to become part of the brand.
          </p>

          <div class="mt-9 space-y-5">
            @for (reason of reasons; track reason.title) {
              <div class="flex gap-5 border-t border-ink/10 pt-5">
                <span class="mt-1 size-3 shrink-0 rounded-full bg-amber"></span>
                <div>
                  <h3 class="text-sm font-extrabold">{{ reason.title }}</h3>
                  <p class="mt-2 text-sm leading-6 text-ink/50">{{ reason.copy }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="bg-paper px-4 pb-4">
      <div class="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-white sm:px-10 lg:py-20">
        <div class="absolute -top-32 -left-24 size-96 rounded-full bg-teal/30 blur-3xl"></div>
        <div class="relative mx-auto max-w-3xl text-center">
          <p class="text-xs font-extrabold tracking-[0.18em] text-amber uppercase">Meet through the work</p>
          <h2 class="display-title mt-5 text-5xl sm:text-6xl">Explore the resin, then tell us what you need.</h2>
          <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a routerLink="/product" class="rounded-full bg-white px-7 py-4 text-sm font-extrabold text-ink transition hover:-translate-y-1">View product</a>
            <a routerLink="/contact" class="rounded-full border border-white/20 px-7 py-4 text-sm font-extrabold text-white transition hover:border-amber hover:text-amber">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  readonly values = [
    { title: 'Clarity', copy: 'Show the product honestly and keep technical details tied to the correct product grade.' },
    { title: 'Attention', copy: 'Capture enough context to make each enquiry more useful from the beginning.' },
    { title: 'Possibility', copy: 'Help customers imagine clear, coloured and decorative resin directions.' }
  ];

  readonly reasons = [
    { title: 'A clearer product story', copy: 'Visitors understand the offer quickly without searching through unrelated categories.' },
    { title: 'A stronger visual identity', copy: 'The translucent colour palette becomes memorable and directly connected to epoxy resin.' },
    { title: 'A shorter path to enquiry', copy: 'Every page leads naturally toward sharing application, quantity and colour requirements.' }
  ];

  constructor(private readonly seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'About Us | Sree Saravana Construction Chemicals',
      description: 'Learn about the focused, enquiry-led approach of Sree Saravana Construction Chemicals.',
      keywords: 'Sree Saravana Construction Chemicals, epoxy resin supplier, construction chemicals company'
    });
  }
}
