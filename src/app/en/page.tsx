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

const PATH = '/en';
const LOCALE = 'en' as const;

export const metadata: Metadata = {
  title:       'Nukipa. AI marketing automation for mid-market B2B',
  description:
    'Nukipa uses AI agents to automate your full B2B content marketing and AI-search optimization, from strategy to published article.',
  alternates: {
    canonical: '/en',
    languages: {
      'de-DE': '/',
      'en-US': '/en'
    }
  }
};

export default function HomePageEn() {
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
