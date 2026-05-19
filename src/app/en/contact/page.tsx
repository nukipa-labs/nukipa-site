import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title:       'Contact',
  description: 'Drop us a line. We usually reply within one business day.',
  alternates: {
    canonical: '/en/contact',
    languages: {
      'de-DE': '/kontakt',
      'en-US': '/en/contact'
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <Navbar locale="en" currentPath="/en/contact" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <header>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Contact
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Say <em className="editorial-italic">hello</em>.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              A product question, a pilot, a sales call or simple curiosity. We usually reply within one business day.
            </p>
          </header>

          <div className="mt-12">
            <ContactForm
              copy={{
                name:    'Name',
                email:   'Email',
                company: 'Company',
                message: 'What is it about?',
                submit:     'Send message',
                submitting: 'Sending...',
                success: {
                  title: 'Thanks, we have your message.',
                  body:  'You will hear from us within one business day. For something genuinely urgent, just email us at contact@nukipalabs.com.'
                },
                errors: {
                  missingRequired: 'Please fill in name, email and message.',
                  generic:         'That did not go through. Try again or email us directly.'
                },
                fallbackEmail: 'contact@nukipalabs.com'
              }}
            />
          </div>

          <p className="mt-12 text-[14px] text-[color:var(--text-muted)]">
            By submitting you agree to the processing of your data to handle your request. See the{' '}
            <a href="/en/legal/privacy" className="text-[color:var(--brand-primary)] hover:underline">
              Privacy Policy
            </a>{' '}for details.
          </p>
        </section>
      </main>
      <Footer locale="en" currentPath="/en/contact" />
    </>
  );
}
