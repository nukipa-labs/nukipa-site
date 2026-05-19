import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';
const SALES_HREF  = 'mailto:contact@nukipalabs.com?subject=Nukipa%20Pro%20%E2%80%93%20Beratung';

export const metadata: Metadata = {
  title:       'Preise',
  description: 'Drei Tarife für jeden Reifegrad: Nukipa Free, Pro Managed und Partner. Kein Abo, keine Kreditkarte. Einfach loslegen.',
  alternates: {
    canonical: '/preise',
    languages: {
      'de-DE': '/preise',
      'en-US': '/en/pricing'
    }
  }
};

interface Plan {
  name:        string;
  price:       string;
  cadence?:    string;
  pitch:       string;
  cta:         { label: string; href: string; emphasis: 'primary' | 'outline' };
  features:    string[];
  emphasized?: boolean;
}

const plans: Plan[] = [
  {
    name:  'Nukipa Free',
    price: '0 €',
    cadence: 'für immer',
    pitch: 'Starte ohne Risiko. Kein Abo, keine Kreditkarte.',
    cta:   { label: 'Kostenlos starten', href: SIGNUP_HREF, emphasis: 'primary' },
    features: [
      '1 Kampagne',
      '10 Artikel pro Monat',
      '15 Social-Posts pro Monat',
      '25 Prompt-Tests pro Woche',
      '2 Sprachen',
      'Hosting auf einer .nukipa.io-Subdomain'
    ]
  },
  {
    name:  'Nukipa Pro - Managed',
    price: 'Individuell',
    pitch: 'Höhere Limits, persönlicher Ansprechpartner, individuelles Onboarding.',
    cta:   { label: 'Mit Sales sprechen', href: SALES_HREF, emphasis: 'primary' },
    features: [
      'Höhere Limits für Artikel, Posts und Prompt-Tests',
      'Persönlicher Ansprechpartner',
      'Individuelles Onboarding',
      'SLA und Priority-Support',
      'Anbindung an bestehende CMS-Systeme auf Anfrage'
    ],
    emphasized: true
  },
  {
    name:  'Nukipa Partner',
    price: 'ab 149 €',
    cadence: 'pro Monat',
    pitch: 'White-Label für Agenturen. Skaliere deine Content-Leistung ohne zusätzliches Team.',
    cta:   { label: 'Partner werden', href: SALES_HREF, emphasis: 'outline' },
    features: [
      '149 € pro Monat Basisgebühr',
      '+ 390 € pro aktivem Kunden-Workspace',
      'Eigenes Branding für alle Kundenausgaben',
      'Zentrale Verwaltung mehrerer Mandanten',
      'Volle API-Anbindung'
    ]
  }
];

export default function PreisePage() {
  return (
    <>
      <Navbar locale="de" currentPath="/preise" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Preise
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Drei Tarife, ein Versprechen.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Kein Abo, keine Kreditkarte. Einfach loslegen. Wenn dir Nukipa nicht hilft, kostet es dich nichts.
            </p>
          </header>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-[18px] border bg-[color:var(--surface-card)] p-8 transition-shadow duration-200 ${
                  plan.emphasized
                    ? 'border-[color:var(--brand-primary)] shadow-[0_20px_50px_-20px_rgba(0,84,201,0.20)]'
                    : 'border-[color:var(--border-default)] hover:shadow-[0_12px_40px_-8px_rgba(0,84,201,0.08)]'
                }`}
              >
                <header>
                  <h2 className="text-[20px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                    {plan.name}
                  </h2>
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[color:var(--brand-primary)]">
                      {plan.price}
                    </span>
                    {plan.cadence && (
                      <span className="text-[14px] text-[color:var(--text-muted)]">
                        {plan.cadence}
                      </span>
                    )}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[color:var(--text-secondary)]">
                    {plan.pitch}
                  </p>
                </header>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] leading-[1.55] text-[color:var(--text-primary)]"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-[3px] shrink-0 text-[color:var(--brand-primary)]"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-2">
                  <Link
                    href={plan.cta.href}
                    className={
                      plan.cta.emphasis === 'primary'
                        ? 'btn-primary inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px]'
                        : 'inline-flex w-full items-center justify-center rounded-full border border-[color:var(--brand-primary)] px-6 py-3 text-[15px] font-medium text-[color:var(--brand-primary)] transition-colors duration-200 hover:bg-[color:var(--surface-tint)]'
                    }
                  >
                    {plan.cta.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-[14px] text-[color:var(--text-muted)]">
            Alle Preise in Euro, zzgl. gesetzlicher MwSt. Tarife und Limits können sich weiterentwickeln. Für aktuelle Details und das Kleingedruckte siehe die <Link href="/legal/agb" className="text-[color:var(--brand-primary)] hover:underline">AGB</Link>.
          </p>
        </section>
      </main>
      <Footer locale="de" currentPath="/preise" />
    </>
  );
}
