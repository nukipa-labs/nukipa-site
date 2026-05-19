import Link from 'next/link';
import { RevealOnScroll } from '../RevealOnScroll';

export interface CTABannerCopy {
  eyebrow:  string;
  /** Headline broken into segments (em → italic serif) */
  headline: Array<{ text: string; kind?: 'em' }>;
  subhead:  string;
  primaryCta:   { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

interface CTABannerProps {
  copy: CTABannerCopy;
}

/**
 * Final visual climax. Cobalt gradient panel with a white-on-cobalt orb
 * via the .hero-glow-on-brand variant of .hero-glow.
 */
export function CTABanner({ copy }: CTABannerProps) {
  return (
    <section id="cta" className="bg-[color:var(--surface-page)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <RevealOnScroll className="hero-glow hero-glow-on-brand relative overflow-hidden rounded-[20px] px-7 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(135deg, #0054C9 0%, #003B8E 100%)'
            }}
          />
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/70">
            {copy.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
            {copy.headline.map((seg, i) =>
              seg.kind === 'em' ? (
                <em key={i} className="editorial-italic">
                  {seg.text}
                </em>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-white/80">
            {copy.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={copy.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-medium text-[color:var(--brand-primary)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
            >
              {copy.primaryCta.label}
            </Link>
            {copy.secondaryCta && (
              <Link
                href={copy.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/40 px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white/10"
                style={{ borderWidth: 1.5 }}
              >
                {copy.secondaryCta.label}
              </Link>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
