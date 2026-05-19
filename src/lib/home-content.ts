import type { HeroCopy } from '@/components/sections/Hero';
import type { SocialProofCopy } from '@/components/sections/SocialProofBar';
import type { ProblemSolutionCopy } from '@/components/sections/ProblemSolution';
import type { ServicesCopy } from '@/components/sections/Services';
import type { WhyUsCopy } from '@/components/sections/WhyUs';
import type { StatsCopy } from '@/components/sections/Stats';
import type { CTABannerCopy } from '@/components/sections/CTABanner';
import type { Locale } from './i18n';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';
const SALES_HREF  = 'mailto:hello@nukipa.com?subject=Talk%20to%20Sales';

export interface HomeContent {
  hero:            HeroCopy;
  socialProof:     SocialProofCopy;
  problemSolution: ProblemSolutionCopy;
  services:        ServicesCopy;
  whyUs:           WhyUsCopy;
  stats:           StatsCopy;
  ctaBanner:       CTABannerCopy;
}

const CUSTOMER_LOGOS: Array<{ name: string; file: string }> = [
  { name: 'airteam',  file: '/logos/airteam.svg'  },
  { name: 'OpenVPN',  file: '/logos/openvpn.svg'  },
  { name: 'Luvside',  file: '/logos/luvside.svg'  },
  { name: 'idenhq',   file: '/logos/idenhq.png'   },
  { name: 'Leadtree', file: '/logos/leadtree.png' },
  { name: 'Littau',   file: '/logos/littau.png'   },
  { name: 'Workpath', file: '/logos/workpath.png' },
  { name: 'Vectocon', file: '/logos/vectocon.png' }
];

const de: HomeContent = {
  hero: {
    eyebrow:    'KI-Marketing für den B2B-Mittelstand',
    headline: [
      { text: 'Dein Online-Marketing: endlich auf ' },
      { text: 'Autopilot', kind: 'em' }
    ],
    subheadline:
      'Nukipa nutzt KI-Agenten, um dein gesamtes B2B-Content-Marketing und deine KI-Suchoptimierung zu automatisieren. Von der Strategie bis zum veröffentlichten Artikel, mit messbaren Ergebnissen.',
    primaryCta:     { label: 'Kostenlos starten',   href: SIGNUP_HREF },
    secondaryCta:   { label: 'Wie es funktioniert ↓', href: '#problem-solution' },
    trustMicrocopy: 'Kein Abo, keine Kreditkarte. Einfach loslegen.'
  },
  socialProof: {
    intro: 'Vertraut von B2B-Unternehmen wie airteam, OpenVPN und Luvside',
    logos: CUSTOMER_LOGOS
  },
  problemSolution: {
    eyebrow: 'Das Problem',
    headline: [
      { text: 'B2B-Unternehmen haben Weltklasse-Produkte, aber ' },
      { text: 'null',  kind: 'em' },
      { text: ' Online-Sichtbarkeit.' }
    ],
    intro: 'Kommt dir das bekannt vor?',
    pains: [
      {
        title: 'Niemand findet euch online.',
        body:
          'Eure Produkte sind in der Branche bekannt. Bei Google, ChatGPT und Perplexity tauchen aber die Wettbewerber auf.'
      },
      {
        title: 'Für Content fehlt die Zeit.',
        body:
          'Marketing-Verantwortliche im Mittelstand jonglieren Kampagnen, Messen und Sales-Support. Konstantes Veröffentlichen rutscht hinten runter.'
      },
      {
        title: 'Die KI-Suche verändert alles.',
        body:
          'Eure Kunden fragen ChatGPT vor Google. Wer dort nicht zitiert wird, existiert für die nächste Käufergeneration nicht.'
      }
    ],
    bridge:
      'Genau dafür gibt es Nukipa. KI-Agenten, die deine Inhalte planen, schreiben, veröffentlichen und für klassische Suche und KI-Suche optimieren. Ohne dass du ein Team aufbauen musst.'
  },
  services: {
    eyebrow:  'Was Nukipa für dich übernimmt',
    headline: [
      { text: 'Fünf Bausteine, ein automatisierter Marketing-Loop.' }
    ],
    subhead:
      'Du genehmigst, die KI liefert. Strategie, Texte, Posts und Auswertung in einem System.',
    cards: [
      {
        title:       'Blog-Artikel',
        description: 'Geschrieben, optimiert, veröffentlicht. Die KI schreibt, du genehmigst, der Artikel geht live.',
        linkLabel:   'Mehr erfahren →',
        href:        SIGNUP_HREF,
        icon:        'document',
        image:       { src: '/product/blog-articles.png',    alt: 'Nukipa Blog-Artikel-Editor' }
      },
      {
        title:       'LinkedIn-Posts',
        description: 'Posts, die Engagement erzeugen. Tonalität und Hooks aus deiner Marke, geplant und veröffentlicht im Rhythmus deines Teams.',
        linkLabel:   'Mehr erfahren →',
        href:        SIGNUP_HREF,
        icon:        'speech',
        image:       { src: '/product/linkedin-posts.png',   alt: 'Nukipa LinkedIn-Post-Komposer' }
      },
      {
        title:       'Content Calendar',
        description: 'Intelligente Planung. Was, wann, wo, mit messbarem Ziel und Bezug zur Pipeline.',
        linkLabel:   'Mehr erfahren →',
        href:        SIGNUP_HREF,
        icon:        'calendar',
        image:       { src: '/product/content-calendar.png', alt: 'Nukipa Content Calendar' }
      },
      {
        title:       'GEO Score',
        description: 'KI-Prompt-Tracking. Wie sichtbar ist deine Marke in ChatGPT, Perplexity und Gemini? Wir messen es wöchentlich.',
        linkLabel:   'Mehr erfahren →',
        href:        SIGNUP_HREF,
        icon:        'search-spark',
        image:       { src: '/product/geo-score.png',        alt: 'Nukipa GEO Score Dashboard' }
      },
      {
        title:       'Nukipa KI Marketing Portal',
        description: 'Hosting und Publishing-Infrastruktur für deine Inhalte. Dein Marketing wohnt an einem Ort, statt verstreut auf fünf Tools.',
        linkLabel:   'Mehr erfahren →',
        href:        SIGNUP_HREF,
        icon:        'portal',
        image:       { src: '/product/marketing-portal.png', alt: 'Nukipa Marketing-Portal' }
      }
    ]
  },
  whyUs: {
    eyebrow: 'Warum Nukipa',
    headline: [
      { text: 'Leistung, die ' },
      { text: 'kein Team', kind: 'em' },
      { text: ' schlagen kann.' }
    ],
    subhead:
      'Drei Gründe, warum B2B-Mittelständler den Wechsel zu Nukipa nicht bereuen.',
    items: [
      {
        label: '10×',
        title: 'Output, 1/10 Agenturkosten.',
        body:
          'Bis zu 50 Artikel pro Monat ab 490 €. Eine klassische Agentur liefert dafür drei Posts und eine Rechnung über fünfstellige Beträge.'
      },
      {
        label: '4-8 Wochen',
        title: 'Bis die ersten Ergebnisse messbar sind.',
        body:
          'Kein halbes Jahr Onboarding, kein Beratervertrag. Onboarding, erste Veröffentlichungen, erste Ranking-Bewegungen, in einem Quartal.'
      },
      {
        label: 'SEO + GEO',
        title: 'Gefunden werden, von Menschen UND KI.',
        body:
          'Klassisches SEO plus GEO (Generative Engine Optimization). Wir optimieren für Google und gleichzeitig für die Antworten von ChatGPT, Perplexity und Gemini.'
      }
    ]
  },
  stats: {
    eyebrow:  'Die Zahlen',
    headline: 'Was Nukipa-Kunden bisher rausgeholt haben.',
    stats: [
      {
        number: '[FILL IN: 50+]',
        label:  'B2B-Unternehmen veröffentlichen mit Nukipa.'
      },
      {
        number: '[FILL IN: 12.000+]',
        label:  'Artikel automatisiert verfasst und veröffentlicht.'
      },
      {
        number: '10× / 1/10',
        label:  'Output bzw. Agenturkosten. Ergebnisse in 4-8 Wochen, nicht in Quartalen.'
      }
    ]
  },
  ctaBanner: {
    eyebrow:  'Bereit?',
    headline: [
      { text: 'Lass dein Marketing ab heute auf ' },
      { text: 'Autopilot', kind: 'em' },
      { text: ' laufen.' }
    ],
    subhead:      'Kein Abo, keine Kreditkarte. Einfach loslegen.',
    primaryCta:   { label: 'Kostenlos starten',  href: SIGNUP_HREF },
    secondaryCta: { label: 'Mit Sales sprechen', href: SALES_HREF }
  }
};

const en: HomeContent = {
  hero: {
    eyebrow:    'AI marketing for B2B mid-sized companies',
    headline: [
      { text: 'Your online marketing, finally on ' },
      { text: 'autopilot', kind: 'em' }
    ],
    subheadline:
      "Nukipa uses AI agents to automate your full B2B content marketing and AI-search optimization. From strategy to published article, with results you can measure.",
    primaryCta:     { label: 'Get started free',   href: SIGNUP_HREF },
    secondaryCta:   { label: 'See how it works ↓', href: '#problem-solution' },
    trustMicrocopy: 'No subscription, no credit card. Just start.'
  },
  socialProof: {
    intro: 'Trusted by B2B companies like airteam, OpenVPN and Luvside',
    logos: CUSTOMER_LOGOS
  },
  problemSolution: {
    eyebrow: 'The problem',
    headline: [
      { text: 'B2B companies have exceptional products, but ' },
      { text: 'zero', kind: 'em' },
      { text: ' online visibility.' }
    ],
    intro: 'Sound familiar?',
    pains: [
      {
        title: 'Nobody finds you online.',
        body:
          'Your products are well-known in your industry. On Google, ChatGPT and Perplexity, your competitors show up instead.'
      },
      {
        title: 'There is no time for content.',
        body:
          'Mid-market marketing leads juggle campaigns, trade shows and sales support. Publishing consistently keeps slipping.'
      },
      {
        title: 'AI search is changing everything.',
        body:
          'Your buyers ask ChatGPT before they ask Google. If you are not cited there, you do not exist for the next generation of buyers.'
      }
    ],
    bridge:
      'That is exactly what Nukipa is for. AI agents that plan, write, publish and optimize your content for classic search and AI search. Without you having to build a team.'
  },
  services: {
    eyebrow:  'What Nukipa runs for you',
    headline: [{ text: 'Five building blocks, one automated marketing loop.' }],
    subhead:
      'You approve, the AI delivers. Strategy, copy, posts and analytics in one system.',
    cards: [
      {
        title:       'Blog articles',
        description: 'Written, optimized, published. The AI writes, you approve, the article goes live.',
        linkLabel:   'Learn more →',
        href:        SIGNUP_HREF,
        icon:        'document',
        image:       { src: '/product/blog-articles.png',    alt: 'Nukipa blog article editor' }
      },
      {
        title:       'LinkedIn posts',
        description: 'Posts that earn engagement. Tone and hooks pulled from your brand, scheduled at the cadence your team can sustain.',
        linkLabel:   'Learn more →',
        href:        SIGNUP_HREF,
        icon:        'speech',
        image:       { src: '/product/linkedin-posts.png',   alt: 'Nukipa LinkedIn post composer' }
      },
      {
        title:       'Content calendar',
        description: 'Smart planning. What, when, where, with a measurable goal and a clear line to pipeline.',
        linkLabel:   'Learn more →',
        href:        SIGNUP_HREF,
        icon:        'calendar',
        image:       { src: '/product/content-calendar.png', alt: 'Nukipa content calendar' }
      },
      {
        title:       'GEO Score',
        description: 'AI prompt tracking. How visible is your brand in ChatGPT, Perplexity and Gemini? We measure it every week.',
        linkLabel:   'Learn more →',
        href:        SIGNUP_HREF,
        icon:        'search-spark',
        image:       { src: '/product/geo-score.png',        alt: 'Nukipa GEO Score dashboard' }
      },
      {
        title:       'Nukipa AI Marketing Portal',
        description: 'Hosting and publishing infrastructure for your content. Your marketing lives in one place instead of scattered across five tools.',
        linkLabel:   'Learn more →',
        href:        SIGNUP_HREF,
        icon:        'portal',
        image:       { src: '/product/marketing-portal.png', alt: 'Nukipa marketing portal' }
      }
    ]
  },
  whyUs: {
    eyebrow: 'Why Nukipa',
    headline: [
      { text: 'Output ' },
      { text: 'no team', kind: 'em' },
      { text: ' can match.' }
    ],
    subhead:
      'Three reasons mid-market B2B teams do not look back after switching.',
    items: [
      {
        label: '10×',
        title: 'The output, at 1/10 of agency cost.',
        body:
          'Up to 50 articles a month starting at €490. A traditional agency delivers three posts and a five-figure invoice.'
      },
      {
        label: '4-8 weeks',
        title: 'Until the first results are measurable.',
        body:
          'No six-month onboarding, no retainer drama. Onboarded, publishing, moving rankings, all inside one quarter.'
      },
      {
        label: 'SEO + GEO',
        title: 'Found by humans AND AI.',
        body:
          'Classic SEO plus GEO (Generative Engine Optimization). We optimize for Google and for the answers ChatGPT, Perplexity and Gemini give your buyers.'
      }
    ]
  },
  stats: {
    eyebrow:  'By the numbers',
    headline: 'What Nukipa customers have gotten out of it so far.',
    stats: [
      {
        number: '[FILL IN: 50+]',
        label:  'B2B companies publish with Nukipa.'
      },
      {
        number: '[FILL IN: 12,000+]',
        label:  'Articles drafted and published, end to end.'
      },
      {
        number: '10× / 1/10',
        label:  'Output vs. agency cost. Results in 4-8 weeks, not quarters.'
      }
    ]
  },
  ctaBanner: {
    eyebrow:  'Ready?',
    headline: [
      { text: 'Put your marketing on ' },
      { text: 'autopilot', kind: 'em' },
      { text: ', starting today.' }
    ],
    subhead:      'No subscription, no credit card. Just start.',
    primaryCta:   { label: 'Get started free', href: SIGNUP_HREF },
    secondaryCta: { label: 'Talk to sales',    href: SALES_HREF }
  }
};

const HOME_CONTENT: Record<Locale, HomeContent> = { de, en };

export function getHomeContent(locale: Locale): HomeContent {
  return HOME_CONTENT[locale];
}
