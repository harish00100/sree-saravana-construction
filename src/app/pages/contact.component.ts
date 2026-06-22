import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SEOService } from '../services/seo.service';

interface EnquiryForm {
  name: string;
  phone: string;
  email: string;
  location: string;
  application: string;
  colour: string;
  quantity: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="relative overflow-hidden bg-forest py-20 text-white lg:py-28">
      <div class="resin-grid absolute inset-0 opacity-[0.08]"></div>
      <div class="absolute -top-32 right-[5%] size-96 rounded-full bg-teal/45 blur-3xl"></div>
      <div class="absolute -bottom-40 left-[15%] size-[28rem] rounded-full bg-amber/22 blur-3xl"></div>
      <div class="site-container relative">
        <div class="max-w-4xl">
          <div class="eyebrow !text-white/70">Product enquiry</div>
          <h1 class="display-title mt-7 text-[clamp(3.5rem,8vw,7rem)]">
            Tell us what<br>
            <span class="text-amber">you’re creating.</span>
          </h1>
          <p class="mt-8 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            A few useful details now can make the first business conversation faster and more relevant.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-cream py-16 lg:py-24">
      <div class="site-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <aside class="space-y-5">
          <div class="rounded-[2.25rem] bg-ink p-8 text-white">
            <span class="text-xs font-extrabold tracking-[0.17em] text-amber uppercase">Direct contact</span>
            <h2 class="display-title mt-5 text-4xl">Business details will live here.</h2>
            <p class="mt-5 text-sm leading-7 text-white/50">
              Replace these placeholders when the official phone number, email and full address are confirmed.
            </p>

            <div class="mt-8 space-y-5">
              @for (item of contactDetails; track item.label) {
                <div class="flex gap-4 border-t border-white/10 pt-5">
                  <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-white/8 text-amber">
                    {{ item.icon }}
                  </span>
                  <div>
                    <span class="block text-[10px] font-extrabold tracking-wider text-white/35 uppercase">{{ item.label }}</span>
                    <span class="mt-1 block text-sm font-bold text-white/75">{{ item.value }}</span>
                  </div>
                </div>
              }
            </div>

            <a
              href="https://www.indiamart.com/sreesaravana-construction-chemicals/"
              target="_blank"
              rel="noopener"
              class="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-amber"
            >
              View IndiaMART profile <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="rounded-[2.25rem] bg-mint p-8">
            <span class="text-xs font-extrabold tracking-[0.17em] text-forest uppercase">Helpful to include</span>
            <ul class="mt-6 space-y-4">
              @for (tip of enquiryTips; track tip) {
                <li class="flex items-start gap-3 text-sm font-bold leading-6 text-ink/65">
                  <span class="mt-2 size-1.5 shrink-0 rounded-full bg-amber"></span>
                  {{ tip }}
                </li>
              }
            </ul>
          </div>
        </aside>

        <div class="rounded-[2.5rem] border border-ink/8 bg-paper p-6 shadow-[0_30px_80px_rgb(23_32_30/8%)] sm:p-9 lg:p-12">
          <div class="flex flex-col gap-4 border-b border-ink/8 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span class="text-xs font-extrabold tracking-[0.17em] text-coral uppercase">Enquiry form</span>
              <h2 class="display-title mt-3 text-4xl text-ink sm:text-5xl">Share your requirement.</h2>
            </div>
            <span class="text-xs font-semibold text-ink/38">Fields marked * are required</span>
          </div>

          <form #enquiryForm="ngForm" (ngSubmit)="submitForm()" class="mt-8 space-y-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">Your name *</span>
                <input
                  type="text"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  autocomplete="name"
                  placeholder="Full name"
                  class="w-full rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">Phone number *</span>
                <input
                  type="tel"
                  name="phone"
                  [(ngModel)]="formData.phone"
                  required
                  autocomplete="tel"
                  placeholder="+91"
                  class="w-full rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">Email address</span>
                <input
                  type="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="w-full rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">City / location</span>
                <input
                  type="text"
                  name="location"
                  [(ngModel)]="formData.location"
                  autocomplete="address-level2"
                  placeholder="Where is the project?"
                  class="w-full rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
                >
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">Application *</span>
                <select
                  name="application"
                  [(ngModel)]="formData.application"
                  required
                  class="w-full appearance-none rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:bg-white"
                >
                  <option value="" disabled>Select intended use</option>
                  <option value="flooring">Decorative flooring</option>
                  <option value="casting">Table / art casting</option>
                  <option value="coating">Protective surface coating</option>
                  <option value="other">Other application</option>
                </select>
              </label>

              <label class="block">
                <span class="mb-2 block text-xs font-extrabold text-ink/62">Colour direction</span>
                <select
                  name="colour"
                  [(ngModel)]="formData.colour"
                  class="w-full appearance-none rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:bg-white"
                >
                  <option value="">Not decided yet</option>
                  <option value="clear">Crystal clear</option>
                  <option value="amber">Amber</option>
                  <option value="teal">Ocean teal</option>
                  <option value="blue">Sapphire blue</option>
                  <option value="violet">Plum violet</option>
                  <option value="custom">Custom / reference shade</option>
                </select>
              </label>
            </div>

            <label class="block">
              <span class="mb-2 block text-xs font-extrabold text-ink/62">Approximate quantity</span>
              <input
                type="text"
                name="quantity"
                [(ngModel)]="formData.quantity"
                placeholder="Example: 20 kg, 100 kg, or not sure"
                class="w-full rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
              >
            </label>

            <label class="block">
              <span class="mb-2 block text-xs font-extrabold text-ink/62">Tell us more</span>
              <textarea
                name="message"
                [(ngModel)]="formData.message"
                rows="5"
                placeholder="Surface, finish, colour reference, timeline or any question..."
                class="w-full resize-none rounded-2xl border border-ink/12 bg-cream/45 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/28 focus:border-forest focus:bg-white"
              ></textarea>
            </label>

            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p class="max-w-md text-[11px] leading-5 text-ink/38">
                Demo form only. Connect email, WhatsApp, CRM or a database before publishing.
              </p>
              <button
                type="submit"
                [disabled]="enquiryForm.invalid"
                class="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
              >
                Capture enquiry <span aria-hidden="true">↗</span>
              </button>
            </div>

            @if (formSubmitted) {
              <div class="rounded-2xl border border-teal/20 bg-mint px-5 py-4 text-sm font-bold text-forest" role="status">
                The form is captured in this demo state. Backend delivery can be connected in the next phase.
              </div>
            }
          </form>
        </div>
      </div>
    </section>

    <section class="bg-paper py-20 lg:py-24">
      <div class="site-container grid gap-8 md:grid-cols-3">
        @for (step of nextSteps; track step.title; let i = $index) {
          <article class="border-t border-ink/12 pt-6">
            <span class="font-display text-3xl text-amber">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-lg font-extrabold">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-ink/50">{{ step.copy }}</p>
          </article>
        }
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit {
  formSubmitted = false;

  formData: EnquiryForm = {
    name: '',
    phone: '',
    email: '',
    location: '',
    application: '',
    colour: '',
    quantity: '',
    message: ''
  };

  readonly contactDetails = [
    { icon: 'P', label: 'Phone', value: 'Add official phone number' },
    { icon: '@', label: 'Email', value: 'Add official business email' },
    { icon: '⌖', label: 'Address', value: 'Add complete business address' }
  ];

  readonly enquiryTips = [
    'Where and how the resin will be used',
    'Approximate quantity required',
    'Clear, tinted or custom colour direction',
    'Expected timeline or delivery location'
  ];

  readonly nextSteps = [
    { title: 'Review the requirement', copy: 'The application, colour and quantity provide the first useful picture.' },
    { title: 'Clarify product details', copy: 'Technical grade, availability and suitability can be discussed directly.' },
    { title: 'Continue offline', copy: 'The final commercial conversation happens by phone, email or WhatsApp.' }
  ];

  constructor(private readonly seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Contact & Enquiry | Sree Saravana Construction Chemicals',
      description: 'Send an epoxy resin enquiry with your application, colour direction, quantity and project details.',
      keywords: 'epoxy resin enquiry, contact Sree Saravana, epoxy resin quote'
    });
  }

  submitForm(): void {
    this.formSubmitted = true;
  }
}
