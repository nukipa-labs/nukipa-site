import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';

export const metadata: Metadata = {
  title:       'Terms of Service',
  description: 'Terms of Service of Nukipa Labs GmbH for use of the Nukipa platform.',
  alternates: {
    canonical: '/en/legal/terms',
    languages: {
      'de-DE': '/legal/agb',
      'en-US': '/en/legal/terms'
    }
  }
};

export default function TermsPage() {
  return (
    <LegalShell
      locale="en"
      currentPath="/en/legal/terms"
      title="Terms of Service"
      effective="Last updated: 18 May 2026"
    >
      <h2>§ 1 Scope, B2B only</h2>
      <p>
        These Terms of Service govern every contract between Nukipa Labs GmbH
        ("Nukipa") and business customers, entrepreneurs, legal entities under
        public law and special funds under public law within the meaning of
        § 14 of the German Civil Code (BGB), ("Customer") covering use of
        the Nukipa software-as-a-service. Customer terms that conflict with
        these terms apply only if Nukipa accepts them in writing.
      </p>
      <p>
        Nukipa offers its services exclusively to businesses. Contracts with
        consumers within the meaning of § 13 BGB are not contemplated;
        consumer-protection rules, in particular any right of withdrawal for
        distance contracts, do not apply.
      </p>

      <h2>§ 2 Contract formation</h2>
      <p>
        The contract is formed when the Customer registers in the Nukipa portal
        and Nukipa confirms the registration. For the free tier (Nukipa Free), a
        successful registration is sufficient. For paid tiers, the Customer must
        also select a plan and confirm the order.
      </p>

      <h2>§ 3 Description of services</h2>
      <p>
        Nukipa provides the Customer with a cloud-based platform offering
        AI-assisted content-marketing automation, including blog article
        generation, LinkedIn posts, content planning, AI-search visibility
        tracking (GEO Score) and a marketing portal for publishing content. The
        exact scope of each tier is set out in its plan description. Nukipa
        develops the platform continuously and may adjust the feature set as long
        as the contractual core remains unchanged.
      </p>

      <h2>§ 4 Pricing and payment</h2>
      <p>
        Pricing follows the price list currently published at{' '}
        <a href="https://nukipa.com" target="_blank" rel="noopener noreferrer">
          https://nukipa.com
        </a>{' '}
        in the version in force when the contract is concluded. Unless stated
        otherwise, all prices are in euros and exclude statutory VAT. Fees are
        due monthly in advance by direct debit, credit card or bank transfer,
        unless a different payment method has been agreed in the order. The
        free tier (Nukipa Free) is free of charge in perpetuity.
      </p>

      <h2>§ 5 Term and termination</h2>
      <p>
        The contract runs for an indefinite term. Unless a different term was
        agreed at order, the following notice periods apply:
      </p>
      <ul>
        <li>
          For monthly billing, the contract may be terminated in text form on
          [FILL IN: e.g. 30 days' notice to the end of the calendar month].
        </li>
        <li>
          For annual billing, the contract may be terminated in text form on
          [FILL IN: e.g. 90 days' notice to the end of the current contract
          year].
        </li>
      </ul>
      <p>
        Both parties' right to terminate for cause remains unaffected. After
        the contract ends, the content stored in the account remains available
        in read-only mode for [FILL IN: e.g. 30 days] and is then deleted,
        except where statutory retention rules apply.
      </p>

      <h2>§ 6 Customer obligations</h2>
      <p>
        The Customer must keep its access credentials confidential and notify
        Nukipa without delay once it learns of any unauthorised use. The Customer
        ensures that any content it uploads or generates with the platform does
        not infringe third-party rights or violate applicable law. The platform
        may not be used to create or distribute unlawful, misleading or abusive
        content.
      </p>

      <h2>§ 7 Liability</h2>
      <p>
        Nukipa is liable without limitation for intent and gross negligence and
        for damage to life, body or health. For ordinary negligence, Nukipa is
        liable only for breaches of essential contractual duties (cardinal
        duties), and only up to the typical, foreseeable damage. For ordinary
        negligence, Nukipa's liability per event and in the aggregate per
        contract year is capped at the net fees actually paid by the Customer
        to Nukipa during the relevant contract year. Any further liability is
        excluded. Liability under the German Product Liability Act and for any
        expressly assumed guarantee remains unaffected.
      </p>
      <p>
        Because the platform uses generative AI models, Nukipa cannot warrant
        that automatically generated content is free of errors, complete,
        lawful or fit for a particular purpose. The Customer is responsible
        for reviewing generated content for factual accuracy and legal
        compliance before publication.
      </p>

      <h2>§ 8 Availability</h2>
      <p>
        Nukipa works to keep platform availability as high as possible. Where
        possible, maintenance windows are scheduled outside common business
        hours. A specific availability level is only guaranteed where the
        relevant tier (in particular "Nukipa Pro Managed") or a separate
        service level agreement expressly says so.
      </p>

      <h2>§ 9 Data protection</h2>
      <p>
        Processing of personal data is governed by Nukipa's Privacy Policy. If
        the Customer processes personal data of third parties through the
        platform, the parties will enter into a data-processing agreement under
        Art. 28 GDPR.
      </p>

      <h2>§ 10 Final provisions</h2>
      <p>
        These terms are governed by German law, excluding the UN Convention on
        the International Sale of Goods. To the extent permitted by law,
        exclusive venue for all disputes is Munich. If individual provisions
        of these terms are invalid, the validity of the remaining provisions
        is unaffected.
      </p>
      <p>
        These Terms of Service are a courtesy translation of the binding
        German "Allgemeine Geschäftsbedingungen". In the event of any conflict
        between the two language versions, the German version prevails.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        For questions about these terms, email{' '}
        [FILL IN: legal email, e.g. legal@nukipa.com].
        <br />
        Last updated: 18 May 2026.
      </p>
    </LegalShell>
  );
}
