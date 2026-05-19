import Link from 'next/link';

export interface HeroCopy {
  eyebrow:        string;
  /** Headline broken into segments. Render `kind: 'em'` parts in editorial italic serif. */
  headline:       Array<{ text: string; kind?: 'em' }>;
  subheadline:    string;
  primaryCta:     { label: string; href: string };
  secondaryCta:   { label: string; href: string };
  trustMicrocopy: string;
}

interface HeroProps {
  copy: HeroCopy;
}

export function Hero({ copy }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow mx-auto max-w-7xl px-5 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-[58rem] text-center">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
            {copy.eyebrow}
          </p>

          <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold tracking-tight leading-[1.05] text-[color:var(--text-primary)]">
            {copy.headline.map((seg, i) =>
              seg.kind === 'em' ? (
                <em key={i} className="editorial-italic">
                  {seg.text}
                </em>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
            {copy.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href={copy.primaryCta.href} className="btn-primary">
              {copy.primaryCta.label}
            </Link>
            <Link href={copy.secondaryCta.href} className="btn-secondary">
              {copy.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-5 text-[13px] text-[color:var(--text-muted)]">
            {copy.trustMicrocopy}
          </p>
        </div>
      </div>
    </section>
  );
}
