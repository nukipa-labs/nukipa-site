import type { Metadata, Viewport } from 'next';
import { NukipaFeedback } from '@/components/NukipaFeedback';
import { instrumentSans, instrumentSerif } from './fonts';
import './globals.css';

// PLATFORM CONTRACT: <NukipaFeedback /> must remain inside <body>. The
// widget renders into a closed Shadow DOM (see public/nukipa-widget.js)
// so design changes never affect it. Do not remove.

const SITE_NAME    = 'Nukipa';
const SITE_TAGLINE = 'KI-Marketing-Automatisierung für den B2B-Mittelstand';
const SITE_DESC    =
  'Nukipa nutzt KI-Agenten, um dein gesamtes B2B-Content-Marketing und deine KI-Suchoptimierung zu automatisieren, von der Strategie bis zum veröffentlichten Artikel.';
const SITE_URL     = 'https://nukipa.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  `${SITE_NAME}. ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: 'Nukipa Labs GmbH' }],
  icons: {
    icon: [
      { url: '/favicon.ico',          sizes: 'any' },
      { url: '/favicon-96x96.png',    type: 'image/png', sizes: '96x96' },
      { url: '/brand/favicon.svg',    type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type:        'website',
    siteName:    SITE_NAME,
    title:       `${SITE_NAME}. ${SITE_TAGLINE}`,
    description: SITE_DESC,
    url:         SITE_URL,
    locale:      'de_DE',
    alternateLocale: ['en_US'],
    images: [{ url: '/apple-touch-icon.png', alt: SITE_NAME }]
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_NAME}. ${SITE_TAGLINE}`,
    description: SITE_DESC,
    images:      ['/apple-touch-icon.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#0054C9',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        {children}
        <NukipaFeedback />
      </body>
    </html>
  );
}
