import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';

export const metadata: Metadata = {
  title:       'Impressum',
  description: 'Impressum gemäß § 5 TMG der Nukipa Labs GmbH.',
  alternates: {
    canonical: '/legal/impressum'
  }
};

export default function ImpressumPage() {
  return (
    <LegalShell
      locale="de"
      currentPath="/legal/impressum"
      title="Impressum"
      effective="Stand: 18. Mai 2026"
    >
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Nukipa Labs GmbH<br />
        Gunta-Stölzl-Straße 7<br />
        80807 München<br />
        Deutschland
      </p>

      <h2>Vertreten durch</h2>
      <p>
        Geschäftsführer: Fabien Nestmann, Steffen Iwan
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: contact@nukipalabs.com
      </p>

      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister<br />
        Registergericht: Amtsgericht München<br />
        Registernummer: HRB 301802
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE456506273
      </p>

      <h2>Redaktionell verantwortlich (§ 18 Abs. 2 MStV)</h2>
      <p>
        Für die journalistisch-redaktionellen Inhalte auf nukipa.com
        (insbesondere den Blog) verantwortlich:<br />
        Fabien Nestmann, Steffen Iwan, Anschrift wie oben.
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
        (OS) bereit:{' '}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>
      <p>Unsere E-Mail-Adresse findest du oben im Impressum.</p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
        nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
        Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
        auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
        verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
        jedoch nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
        Autors bzw. Erstellers.
      </p>
      <p>
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht
        kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
        nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
        beachtet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen Hinweis. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>Kontakt bei Rechtsfragen</h2>
      <p>
        Für rechtliche Anfragen schreib uns an{' '}
        contact@nukipalabs.com.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Stand: 19. Mai 2026
      </p>
    </LegalShell>
  );
}
