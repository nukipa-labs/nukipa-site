import { Navbar } from './Navbar';
import { Footer } from './Footer';
import type { Locale } from '@/lib/i18n';

interface LegalShellProps {
  locale:      Locale;
  currentPath: string;
  title:       string;
  effective?:  string;
  children:    React.ReactNode;
}

/**
 * Single-column container for long-form legal text. Matches the
 * `.prose-body` rhythm used by the blog detail page (kept distinct so
 * the blog merger's CSS contract stays clean).
 */
export function LegalShell({
  locale,
  currentPath,
  title,
  effective,
  children
}: LegalShellProps) {
  return (
    <>
      <Navbar locale={locale} currentPath={currentPath} />
      <main className="bg-[color:var(--surface-page)]">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
            {title}
          </h1>
          {effective && (
            <p className="mt-3 text-[14px] text-[color:var(--text-muted)]">
              {effective}
            </p>
          )}
          <div className="prose-body mt-10 text-[16px] text-[color:var(--text-primary)]">
            {children}
          </div>
        </div>
      </main>
      <Footer locale={locale} currentPath={currentPath} />
    </>
  );
}
