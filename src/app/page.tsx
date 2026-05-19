import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { CTABanner } from '@/components/sections/CTABanner';
import { getHomeContent } from '@/lib/home-content';

const PATH = '/';
const LOCALE = 'de' as const;

export const metadata: Metadata = {
  title:       'Nukipa. KI-Marketing-Automatisierung für den B2B-Mittelstand',
  description:
    'Nukipa nutzt KI-Agenten, um dein gesamtes B2B-Content-Marketing und deine KI-Suchoptimierung zu automatisieren, von der Strategie bis zum veröffentlichten Artikel.',
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      'en-US': '/en'
    }
  }
};

export default function HomePage() {
  const c = getHomeContent(LOCALE);

  return (
    <>
      <Navbar locale={LOCALE} currentPath={PATH} />
      <main>
        <Hero            copy={c.hero} />
        <SocialProofBar  copy={c.socialProof} />
        <ProblemSolution copy={c.problemSolution} />
        <Services        copy={c.services} />
        <WhyUs           copy={c.whyUs} />
        <CTABanner       copy={c.ctaBanner} />
      </main>
      <Footer locale={LOCALE} currentPath={PATH} />
    </>
  );
}
