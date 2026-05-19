import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';

export const metadata: Metadata = {
  title:       'Why Nukipa',
  description: 'Nukipa head-to-head with a traditional content agency, generic AI writing tools like Jasper / Copy.ai, and SEO tools like SurferSEO.',
  alternates: {
    canonical: '/en/why-nukipa',
    languages: {
      'de-DE': '/warum-nukipa',
      'en-US': '/en/why-nukipa'
    }
  }
};

export default function WhyNukipaPage() {
  return (
    <>
      <Navbar locale="en" currentPath="/en/why-nukipa" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Why Nukipa
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Nukipa, not just <em className="editorial-italic">any</em> other tool.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Agency, generic AI writing tool, classic SEO suite. Three ways to scale your B2B marketing. Here is what Nukipa does differently.
            </p>
          </header>

          <div className="mt-16">
            <ComparisonMatrix
              competitors={[
                { name: 'Traditional agency',     blurb: 'Fixed team, monthly retainer'    },
                { name: 'Generic AI writing tool', blurb: 'e.g. Jasper, Copy.ai'           },
                { name: 'Classic SEO tool',       blurb: 'e.g. SurferSEO, NeuronWriter'    }
              ]}
              labels={{
                nukipa:  'Nukipa',
                yes:     'Yes',
                partial: 'Partial',
                no:      'No'
              }}
              rows={[
                { feature: 'AI agent writes, optimizes and publishes end-to-end',
                  cells: [true, false, 'partial', false] },
                { feature: 'Visibility in Google AND AI search (ChatGPT, Perplexity, Gemini)',
                  cells: [true, false, false, 'partial'] },
                { feature: 'Hosted publishing infrastructure included',
                  cells: [true, 'partial', false, false] },
                { feature: 'LinkedIn posts in your brand voice',
                  cells: [true, true, 'partial', false] },
                { feature: 'Measurable results in 4-8 weeks',
                  cells: [true, 'partial', false, 'partial'] },
                { feature: 'Focused on the German Mittelstand',
                  cells: [true, 'partial', false, false] },
                { feature: 'Entry price',
                  cells: ['€0 (Free) / €490 per month (Standard)', '€5,000-€15,000 per month', 'from €49 per month', 'from €49 per month'] }
              ]}
            />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Reason
              title="10× output at 1/10 of agency cost."
              body="Up to 50 articles per month starting at €490. A traditional agency delivers three posts and a five-figure invoice."
            />
            <Reason
              title="Found where the asking happens."
              body="We optimize for Google and for the answers from ChatGPT, Perplexity and Gemini in parallel. Classic SEO tools do one side, generic AI writers do the other. Neither does both."
            />
            <Reason
              title="One system, not a tool zoo."
              body="Strategy, copy, LinkedIn posts, calendar, hosting and reporting in a single platform. Instead of five tools that do not talk to each other."
            />
          </div>

          <aside className="mt-16 rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-soft)] p-8 text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
              Want to see the comparison live?
            </h2>
            <p className="mt-3 text-[15px] text-[color:var(--text-secondary)]">
              No subscription, no credit card. Just start.
            </p>
            <Link
              href={SIGNUP_HREF}
              className="btn-primary mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-7 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Get started free
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale="en" currentPath="/en/why-nukipa" />
    </>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-card)] p-6">
      <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--text-secondary)]">
        {body}
      </p>
    </article>
  );
}
