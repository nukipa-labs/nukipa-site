import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';

export const metadata: Metadata = {
  title:       'About',
  description: 'Nukipa Labs GmbH is a Munich-based product studio. Three founders with experience across strategy, finance, marketing, sales, product and technology.',
  alternates: {
    canonical: '/en/about',
    languages: {
      'de-DE': '/ueber-uns',
      'en-US': '/en/about'
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar locale="en" currentPath="/en/about" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <header>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              About
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              A product studio in Munich. Three founders. <em className="editorial-italic">Lots of AI.</em>
            </h1>
            <p className="mt-6 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Nukipa Labs GmbH is a small team with a big ambition. We build software the German Mittelstand can actually use, not yet another tool that wins the pitch deck and gathers dust in the day-to-day.
            </p>
          </header>

          <div className="mt-16 space-y-12 text-[17px] leading-[1.7] text-[color:var(--text-primary)]">
            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Why we started
              </h2>
              <p className="mt-4">
                B2B companies build exceptional products and have <em className="editorial-italic">zero</em> online visibility. We saw it across every industry we worked in. Mid-market marketing leads juggle campaigns, trade shows and sales support. Publishing consistently keeps slipping, or it gets outsourced to an agency that delivers three posts and a five-figure invoice and disappears.
              </p>
              <p className="mt-4">
                Meanwhile AI search is changing how buyers look for solutions at all. Your customers ask ChatGPT and Perplexity before they ask Google. If you are not cited there, you do not exist for the next generation of buyers.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Our mission
              </h2>
              <p className="mt-4">
                Nukipa makes AI marketing simple enough that no B2B company falls behind. AI agents plan, write, publish and optimize content for classic search and AI search. You approve, the AI delivers. Results in four to eight weeks, not after a six-month retainer.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Three founders, one bar
              </h2>
              <p className="mt-4">
                We are three founders with deep experience across strategy, finance, marketing, sales, product and technology. We have built companies, led marketing functions, shipped software and scaled sales orgs. The range is the point: Nukipa only works when we understand every side of the loop, from the first campaign idea to the final performance review.
              </p>
              <p className="mt-4">
                We do not use AI just as a feature of our platform, we live it. Large teams are no longer required to run a company. With the right tools and AI alongside, a small team can do more than ever before. We pass that leverage on to our customers.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Where we sit
              </h2>
              <p className="mt-4">
                Munich. We love the mix of DAX-scale Mittelstand on our doorstep and a growing AI scene right next door. If you are in town and want to grab an espresso: <a href="mailto:contact@nukipalabs.com" className="link-underline text-[color:var(--brand-primary)]">contact@nukipalabs.com</a>.
              </p>
            </section>
          </div>

          <aside className="mt-16 rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-soft)] p-8">
            <p className="text-[18px] leading-[1.5] text-[color:var(--text-primary)]">
              Ready to put your marketing on <em className="editorial-italic">autopilot</em>?
            </p>
            <p className="mt-2 text-[15px] text-[color:var(--text-secondary)]">
              No subscription, no credit card. Just start.
            </p>
            <Link
              href={SIGNUP_HREF}
              className="btn-primary mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Get started free
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale="en" currentPath="/en/about" />
    </>
  );
}
