// Static-pages i18n helper. Two locales, page-level dictionary lookups,
// no runtime framework. The static-pages merger writes this file; the
// platform contract (`src/lib/nukipa.ts`, `src/middleware.ts`) is
// untouched.

export type Locale = 'de' | 'en';

export const LOCALES: Locale[] = ['de', 'en'];

export function altLocale(locale: Locale): Locale {
  return locale === 'de' ? 'en' : 'de';
}

// Map a DE path to its EN mirror (and vice-versa). The legal Impressum
// has no EN twin - language toggle falls back to /en there.
const DE_TO_EN: Record<string, string> = {
  '/':                     '/en',
  '/preise':               '/en/pricing',
  '/ueber-uns':            '/en/about',
  '/warum-nukipa':         '/en/why-nukipa',
  '/ressourcen':           '/en/resources',
  '/kontakt':              '/en/contact',
  '/blog':                 '/en/blog',
  '/legal/datenschutz':    '/en/legal/privacy',
  '/legal/agb':            '/en/legal/terms',
  '/legal/impressum':      '/en'
};

const EN_TO_DE: Record<string, string> = Object.fromEntries(
  Object.entries(DE_TO_EN).map(([de, en]) => [en, de])
);

export function mirrorPath(currentPath: string, currentLocale: Locale): string {
  const map = currentLocale === 'de' ? DE_TO_EN : EN_TO_DE;
  return map[currentPath] ?? (currentLocale === 'de' ? '/en' : '/');
}
