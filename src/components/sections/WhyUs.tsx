import { RevealOnScroll } from '../RevealOnScroll';

export interface WhyUsCopy {
  eyebrow: string;
  /** Headline broken into segments (em → italic serif) */
  headline: Array<{ text: string; kind?: 'em' }>;
  subhead: string;
  items: Array<{
    label: string;
    title: string;
    body:  string;
  }>;
}

interface WhyUsProps {
  copy: WhyUsCopy;
}

export function WhyUs({ copy }: WhyUsProps) {
  return (
    <section id="why-us" className="bg-[color:var(--surface-soft)]">
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

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.items.map((item, idx) => (
            <RevealOnScroll
              as="li"
              key={item.title}
              delayMs={idx * 80}
              className="card flex flex-col"
            >
              <span className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-none tracking-tight text-[color:var(--brand-primary)]">
                {item.label}
              </span>
              <h3 className="mt-5 text-[20px] font-semibold leading-snug text-[color:var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--text-secondary)]">
                {item.body}
              </p>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
