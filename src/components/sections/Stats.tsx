import { RevealOnScroll } from '../RevealOnScroll';

export interface StatsCopy {
  eyebrow:  string;
  headline: string;
  stats:    Array<{
    number: string;
    label:  string;
  }>;
}

interface StatsProps {
  copy: StatsCopy;
}

export function Stats({ copy }: StatsProps) {
  return (
    <section id="stats" className="bg-[color:var(--surface-page)]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
            {copy.headline}
          </h2>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {copy.stats.map((stat, idx) => (
            <RevealOnScroll
              as="li"
              key={stat.label}
              delayMs={idx * 80}
              className="text-center"
            >
              <span className="block text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-[color:var(--brand-primary)]">
                {stat.number}
              </span>
              <span className="mt-4 block text-[15px] leading-[1.55] text-[color:var(--text-secondary)] max-w-xs mx-auto">
                {stat.label}
              </span>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
