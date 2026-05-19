import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';

export const metadata: Metadata = {
  title:       'Privacy Policy',
  description: 'GDPR-compliant privacy policy of Nukipa Labs GmbH.',
  alternates: {
    canonical: '/en/legal/privacy',
    languages: {
      'de-DE': '/legal/datenschutz',
      'en-US': '/en/legal/privacy'
    }
  }
};

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="en"
      currentPath="/en/legal/privacy"
      title="Privacy Policy"
      effective="Last updated: 18 May 2026"
    >
      <h2>1. Controller</h2>
      <p>The controller under the EU General Data Protection Regulation (GDPR) is:</p>
      <p>
        Nukipa Labs GmbH<br />
        [FILL IN: street address]<br />
        [FILL IN: ZIP] Munich, Germany<br />
        Privacy email: [FILL IN: privacy email, e.g. privacy@nukipa.com]
      </p>
      <p>
        We have not appointed a statutory data-protection officer. You can
        reach us about any privacy matter at the email address above.
      </p>

      <h2>2. Data we collect when you visit this site</h2>
      <p>
        When you visit this site, we automatically collect general information.
        These server log files include the type of web browser you use, your
        operating system, the domain name of your internet provider, your IP
        address and similar data. None of this lets us identify you personally.
        The legal basis is Art. 6(1)(f) GDPR (legitimate interest in operating the
        site securely).
      </p>

      <h2>3. Cookies and similar technologies</h2>
      <p>
        This site only uses strictly necessary cookies and similar storage. In
        particular, it sets a single session cookie used by the Nukipa platform
        (name: <code>nk_sid</code>) that assigns a randomly generated ID to
        a pseudonymous visit so the same page view isn't counted multiple
        times. We do not analyse it beyond the visit itself and we do not
        match it against any third-party data. Legal basis: § 25(2) no. 2
        TDDDG (strictly necessary storage). You can disable cookies in your
        browser; in that case visits may be counted multiple times, but every
        other feature of the site will keep working.
      </p>

      <h2>4. Web analytics via the Nukipa platform</h2>
      <p>
        This site runs on Nukipa Labs GmbH's own platform. On every page load,
        the site's server sends a visit record to our platform endpoint at{' '}
        <code>https://nukipa-staging-gateway.fly.dev/public/v1/signals</code>{' '}
        (the controller and the processor are the same here. The endpoint is
        operated by Nukipa Labs GmbH).
      </p>
      <p>For each visit we transmit:</p>
      <ul>
        <li>the requested path and the hostname</li>
        <li>the HTTP referer (if sent by your browser)</li>
        <li>your browser's user-agent string</li>
        <li>the IP address of the requesting connection</li>
        <li>the ID of the <code>nk_sid</code> session cookie</li>
        <li>
          UTM parameters from the URL when present (<code>utm_source</code>,{' '}
          <code>utm_medium</code>, <code>utm_campaign</code>,{' '}
          <code>utm_content</code>)
        </li>
      </ul>
      <p>
        We also record clicks on call-to-action buttons that carry a marker
        attribute (<code>data-cta-id</code>). We use this data only to measure
        reach and to understand how our content performs. Legal basis: Art.
        6(1)(f) GDPR (legitimate interest in lightweight audience
        measurement). The data is retained for up to 24 months and then
        deleted or fully anonymised.
      </p>

      <h2>5. Fonts (self-hosted)</h2>
      <p>
        The site uses the Instrument Sans and Instrument Serif typefaces.
        Both are hosted locally on our servers via <code>next/font</code>{' '}
        at build time and served directly from our own domain when you load
        a page. No connection is made to any third party (in particular,
        not to <code>fonts.googleapis.com</code> or{' '}
        <code>fonts.gstatic.com</code>). No IP address is transmitted to
        Google for fonts.
      </p>

      <h2>6. Nukipa feedback widget (pre-launch / review builds only)</h2>
      <p>
        Pre-launch and review builds of this site may show an internal
        feedback widget used to collect comments during the design review.
        The widget stores any notes you type exclusively in your browser's
        local storage (key <code>nukipa_feedback_v1</code>). Nothing is sent
        to our server or to any third party. The widget makes no network
        requests. In the live production build the widget is disabled.
      </p>

      <h2>7. Hosting</h2>
      <p>
        This site is hosted with a processor located in the EU. Server log files
        are kept briefly for technical reasons and deleted after 30 days at the
        latest. The legal basis is Art. 6(1)(f) GDPR. We have a data-processing
        agreement with our host under Art. 28 GDPR.
      </p>

      <h2>8. Contacting us</h2>
      <p>
        If you contact us by email, contact form or chat, we store the information
        you provide (name, email address, message body) so we can reply. We delete
        the data once it is no longer needed for that purpose, unless statutory
        retention rules require otherwise. The legal basis is Art. 6(1)(b) GDPR
        (pre-contractual measures) or Art. 6(1)(f) GDPR.
      </p>

      <h2>9. Your rights</h2>
      <p>
        At any time you have the right to access (Art. 15), rectification
        (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data
        portability (Art. 20) and objection (Art. 21 GDPR). You can withdraw any
        consent at any time for the future. A short email to the contact address
        above is enough to exercise these rights.
      </p>

      <h2>10. Right to lodge a complaint</h2>
      <p>
        You have the right to lodge a complaint with a data-protection authority.
        Our supervisory authority is the Bavarian State Office for Data Protection
        Supervision (Bayerisches Landesamt für Datenschutzaufsicht), Promenade 18,
        91522 Ansbach, Germany.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy when the law or the site's functionality
        changes. The version currently in force is the one shown above.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        For privacy questions, email{' '}
        [FILL IN: privacy email, e.g. privacy@nukipa.com].
        <br />
        Last updated: 18 May 2026.
      </p>
    </LegalShell>
  );
}
