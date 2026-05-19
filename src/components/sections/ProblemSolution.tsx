import { RevealOnScroll } from '../RevealOnScroll';

export interface ProblemSolutionCopy {
  eyebrow:    string;
  /** Headline broken into segments. `kind: 'em'` => editorial italic serif. */
  headline:   Array<{ text: string; kind?: 'em' }>;
  intro:      string;
  pains: Array<{ title: string; body: string }>;
  bridge:     string;
}

interface ProblemSolutionProps {
  copy: ProblemSolutionCopy;
}

export function ProblemSolution({ copy }: ProblemSolutionProps) {
  return (
    <section
      id="problem-solution"
      className="bg-[color:var(--surface-soft)]"
    >
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
            {copy.intro}
          </p>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.pains.map((pain, idx) => (
            <RevealOnScroll
              as="li"
              key={pain.title}
              delayMs={idx * 80}
              className="card"
            >
              <p className="text-[13px] font-medium text-[color:var(--brand-primary)]">
                0{idx + 1}
              </p>
              <h3 className="mt-3 text-[20px] font-semibold leading-snug text-[color:var(--text-primary)]">
                {pain.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--text-secondary)]">
                {pain.body}
              </p>
            </RevealOnScroll>
          ))}
        </ul>

        <RevealOnScroll className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-[18px] leading-[1.6] text-[color:var(--text-primary)]">
            {copy.bridge}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
