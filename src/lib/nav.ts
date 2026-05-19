import type { Locale } from './i18n';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavConfig {
  primaryNav:    NavLink[];
  primaryCta:    NavLink;
  footer: {
    tagline:      string;
    productHead:  string;
    productLinks: NavLink[];
    companyHead:  string;
    companyLinks: NavLink[];
    legalHead:    string;
    legalLinks:   NavLink[];
    copyright:    string;
    locationLine: string;
  };
}

const cfg: Record<Locale, NavConfig> = {
  de: {
    primaryNav: [
      { label: 'Preise',     href: '/preise' },
      { label: 'Vergleich',  href: '/warum-nukipa' },
      { label: 'Über uns',   href: '/ueber-uns' },
      { label: 'Blog',       href: '/blog' },
      { label: 'Kontakt',    href: '/kontakt' }
    ],
    primaryCta: { label: 'Kostenlos starten', href: 'https://app.nukipa.com/signup' },
    footer: {
      tagline:      'KI-Marketing-Automatisierung für den B2B-Mittelstand.',
      productHead:  'Produkt',
      productLinks: [
        { label: 'Funktionen',  href: '/#services'    },
        { label: 'Preise',      href: '/preise'       },
        { label: 'Vergleich',   href: '/warum-nukipa' },
        { label: 'Ressourcen',  href: '/ressourcen'   }
      ],
      companyHead:  'Unternehmen',
      companyLinks: [
        { label: 'Über uns', href: '/ueber-uns' },
        { label: 'Blog',     href: '/blog'      },
        { label: 'Kontakt',  href: '/kontakt'   }
      ],
      legalHead:    'Rechtliches',
      legalLinks: [
        { label: 'Impressum',   href: '/legal/impressum' },
        { label: 'Datenschutz', href: '/legal/datenschutz' },
        { label: 'AGB',         href: '/legal/agb' }
      ],
      copyright:    '© 2026 Nukipa Labs GmbH.',
      locationLine: 'Made in München.'
    }
  },
  en: {
    primaryNav: [
      { label: 'Pricing',     href: '/en/pricing' },
      { label: 'Why Nukipa',  href: '/en/why-nukipa' },
      { label: 'About',       href: '/en/about' },
      { label: 'Blog',        href: '/en/blog' },
      { label: 'Contact',     href: '/en/contact' }
    ],
    primaryCta: { label: 'Get started free', href: 'https://app.nukipa.com/signup' },
    footer: {
      tagline:      'AI marketing automation for mid-market B2B.',
      productHead:  'Product',
      productLinks: [
        { label: 'Features',    href: '/en#services'     },
        { label: 'Pricing',     href: '/en/pricing'      },
        { label: 'Why Nukipa',  href: '/en/why-nukipa'   },
        { label: 'Resources',   href: '/en/resources'    }
      ],
      companyHead:  'Company',
      companyLinks: [
        { label: 'About',   href: '/en/about'   },
        { label: 'Blog',    href: '/en/blog'    },
        { label: 'Contact', href: '/en/contact' }
      ],
      legalHead:    'Legal',
      legalLinks: [
        { label: 'Imprint', href: '/legal/impressum' },
        { label: 'Privacy', href: '/en/legal/privacy' },
        { label: 'Terms',   href: '/en/legal/terms' }
      ],
      copyright:    '© 2026 Nukipa Labs GmbH.',
      locationLine: 'Made in Munich.'
    }
  }
};

export function getNav(locale: Locale): NavConfig {
  return cfg[locale];
}
