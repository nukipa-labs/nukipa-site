import { RevealOnScroll } from '../RevealOnScroll';

export interface CustomerLogo {
  name: string;
  file: string;
}

export interface SocialProofCopy {
  intro: string;
  logos: CustomerLogo[];
}

interface SocialProofBarProps {
  copy: SocialProofCopy;
}

export function SocialProofBar({ copy }: SocialProofBarProps) {
  return (
    <section className="border-y border-[color:var(--border-default)] bg-[color:var(--surface-page)]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <RevealOnScroll className="flex flex-col items-center gap-8">
          <p className="text-[13px] tracking-[0.04em] text-[color:var(--text-secondary)] text-center">
            {copy.intro}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-12">
            {copy.logos.map((logo) => (
              <li
                key={logo.name}
                className="flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-7 w-auto opacity-60 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0 lg:h-8"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
