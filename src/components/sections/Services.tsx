import { RevealOnScroll } from '../RevealOnScroll';

export type ServiceIcon =
  | 'document'
  | 'speech'
  | 'calendar'
  | 'search-spark'
  | 'portal';

export interface ServiceCard {
  title:       string;
  description: string;
  linkLabel:   string;
  href:        string;
  icon:        ServiceIcon;
  /** Optional product-screenshot path under /public. If set, renders instead of the glyph. */
  image?:      { src: string; alt: string };
}

export interface ServicesCopy {
  eyebrow:  string;
  /** Headline broken into segments (em → italic serif) */
  headline: Array<{ text: string; kind?: 'em' }>;
  subhead:  string;
  cards:    ServiceCard[];
}

interface ServicesProps {
  copy: ServicesCopy;
}

/**
 * 2-column zig-zag for the five capabilities, alternating image-right /
 * image-left per row. The "image" side is a cobalt gradient panel with a
 * 1.5px-stroke inline SVG glyph - no stock illustrations, no UI mockups.
 */
export function Services({ copy }: ServicesProps) {
  return (
    <section id="services" className="bg-[color:var(--surface-page)]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
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
          <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
            {copy.subhead}
          </p>
        </RevealOnScroll>

        <div className="mt-16 flex flex-col gap-12 lg:gap-16">
          {copy.cards.map((card, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <RevealOnScroll
                key={card.title}
                delayMs={idx * 60}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual panel */}
                <div
                  className="relative aspect-[5/3] w-full overflow-hidden rounded-[18px] border border-[color:var(--border-default)] shadow-[0_20px_50px_-20px_rgba(0,84,201,0.18)]"
                  style={{
                    background:
                      'linear-gradient(135deg, #E8EEFF 0%, #F7F9FF 100%)'
                  }}
                >
                  {card.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.image.src}
                        alt={card.image.alt}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[color:var(--brand-primary)]">
                      <ServiceGlyph icon={card.icon} />
                    </div>
                  )}
                  <span
                    className="absolute left-5 top-5 z-10 rounded-full bg-[rgba(255,255,255,0.85)] px-3 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase backdrop-blur-sm"
                    style={{ color: 'rgba(0, 84, 201, 0.85)' }}
                  >
                    0{idx + 1} / 0{copy.cards.length}
                  </span>
                </div>

                {/* Copy panel */}
                <div className="max-w-xl">
                  <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-semibold leading-tight tracking-tight text-[color:var(--text-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.65] text-[color:var(--text-secondary)]">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    className="link-underline mt-6 inline-block text-[15px] font-medium text-[color:var(--brand-primary)]"
                  >
                    {card.linkLabel}
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Inline SVG glyphs - 1.5px stroke, currentColor. ~120px square. */
function ServiceGlyph({ icon }: { icon: ServiceIcon }) {
  const common = {
    width: 120,
    height: 120,
    viewBox: '0 0 64 64',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  switch (icon) {
    case 'document':
      return (
        <svg {...common}>
          <path d="M16 8h22l10 10v38a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" />
          <path d="M38 8v10h10" />
          <path d="M20 30h24M20 38h24M20 46h16" />
        </svg>
      );
    case 'speech':
      return (
        <svg {...common}>
          <path d="M12 14a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H30l-10 10v-10h-4a4 4 0 0 1-4-4V14Z" />
          <path d="M22 22h20M22 30h14" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="10" y="14" width="44" height="40" rx="4" />
          <path d="M10 24h44" />
          <path d="M20 10v8M44 10v8" />
          <circle cx="22" cy="36" r="2.5" fill="currentColor" />
          <path d="M30 36h14M22 44h22" />
        </svg>
      );
    case 'search-spark':
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="14" />
          <path d="M38 38l12 12" />
          <path d="M28 22v12M22 28h12" />
          <path d="M48 14l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'portal':
      return (
        <svg {...common}>
          <rect x="8"  y="10" width="40" height="26" rx="3" />
          <rect x="16" y="20" width="40" height="26" rx="3" />
          <path d="M22 30h22M22 36h14" />
          <circle cx="14" cy="16" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="18" cy="16" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="22" cy="16" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
