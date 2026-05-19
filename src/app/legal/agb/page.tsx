import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';

export const metadata: Metadata = {
  title:       'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'AGB der Nukipa Labs GmbH für die Nutzung der Nukipa-Plattform.',
  alternates: {
    canonical: '/legal/agb',
    languages: {
      'de-DE': '/legal/agb',
      'en-US': '/en/legal/terms'
    }
  }
};

export default function AgbPage() {
  return (
    <LegalShell
      locale="de"
      currentPath="/legal/agb"
      title="Allgemeine Geschäftsbedingungen (AGB)"
      effective="Stand: 18. Mai 2026"
    >
      <h2>§ 1 Geltungsbereich, kein Verbrauchergeschäft</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge
        zwischen der Nukipa Labs GmbH ("Nukipa") und Unternehmern, juristischen
        Personen des öffentlichen Rechts oder öffentlich-rechtlichen
        Sondervermögen im Sinne des § 14 BGB ("Kunde") über die Nutzung der
        Software-as-a-Service-Lösung Nukipa. Abweichende Bedingungen des
        Kunden gelten nur, wenn Nukipa ihnen ausdrücklich schriftlich
        zustimmt.
      </p>
      <p>
        Das Angebot von Nukipa richtet sich ausschließlich an Unternehmer. Ein
        Vertragsschluss mit Verbrauchern im Sinne des § 13 BGB ist nicht
        vorgesehen; verbraucherschutzrechtliche Vorschriften, insbesondere das
        Widerrufsrecht bei Fernabsatzverträgen, finden keine Anwendung.
      </p>

      <h2>§ 2 Vertragsabschluss</h2>
      <p>
        Der Vertrag kommt durch die Registrierung des Kunden im Nukipa-Portal und
        die Bestätigung durch Nukipa zustande. Für den kostenlosen Tarif (Nukipa
        Free) genügt die erfolgreiche Registrierung. Für kostenpflichtige Tarife
        gilt zusätzlich die Auswahl des Tarifs und die Bestätigung der Bestellung.
      </p>

      <h2>§ 3 Leistungsbeschreibung</h2>
      <p>
        Nukipa stellt dem Kunden eine cloudbasierte Plattform zur Verfügung, die
        KI-gestützte Funktionen für Content-Marketing-Automatisierung enthält,
        unter anderem die Erstellung von Blog-Artikeln, LinkedIn-Posts,
        Content-Planung, KI-Suchmaschinen-Tracking (GEO Score) sowie ein
        Marketing-Portal zur Veröffentlichung von Inhalten. Der jeweilige
        Funktionsumfang ergibt sich aus der Beschreibung des gewählten Tarifs.
        Nukipa entwickelt die Plattform laufend weiter und kann den
        Funktionsumfang anpassen, solange der vertragliche Kern unverändert
        bleibt.
      </p>

      <h2>§ 4 Preise und Zahlung</h2>
      <p>
        Es gilt die jeweils aktuelle Preisliste, die auf{' '}
        <a href="https://nukipa.com" target="_blank" rel="noopener noreferrer">
          https://nukipa.com
        </a>{' '}
        veröffentlicht ist, in der zum Zeitpunkt des Vertragsabschlusses gültigen
        Fassung. Alle Preise verstehen sich, soweit nicht anders angegeben, in
        Euro zuzüglich der gesetzlichen Umsatzsteuer. Die Vergütung ist
        monatlich im Voraus per Lastschrift, Kreditkarte oder Überweisung
        fällig, sofern in der Bestellung keine andere Zahlungsweise vereinbart
        wurde. Der kostenfreie Tarif (Nukipa Free) ist dauerhaft kostenlos.
      </p>

      <h2>§ 5 Vertragslaufzeit und Kündigung</h2>
      <p>
        Der Vertrag wird auf unbestimmte Zeit geschlossen. Soweit im
        Bestellprozess keine abweichende Laufzeit vereinbart wurde, gilt:
      </p>
      <ul>
        <li>
          Bei monatlicher Abrechnung kann der Vertrag mit einer Frist von{' '}
          [FILL IN: z. B. 30 Tagen zum Monatsende] in Textform gekündigt werden.
        </li>
        <li>
          Bei jährlicher Abrechnung kann der Vertrag mit einer Frist von{' '}
          [FILL IN: z. B. 90 Tagen zum Ende des jeweiligen Vertragsjahres] in
          Textform gekündigt werden.
        </li>
      </ul>
      <p>
        Das Recht beider Parteien zur außerordentlichen Kündigung aus wichtigem
        Grund bleibt unberührt. Nach Vertragsende werden die im Account
        gespeicherten Inhalte für [FILL IN: z. B. 30 Tage] in einem
        Lese-Zugang bereitgehalten und danach gelöscht, soweit gesetzliche
        Aufbewahrungspflichten nicht entgegenstehen.
      </p>

      <h2>§ 6 Pflichten des Kunden</h2>
      <p>
        Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und Nukipa
        unverzüglich zu informieren, sobald er Kenntnis von einer unbefugten
        Nutzung erlangt. Der Kunde stellt sicher, dass von ihm in die Plattform
        eingestellte Inhalte keine Rechte Dritter verletzen und nicht gegen
        geltendes Recht verstoßen. Eine Nutzung der Plattform zur Erstellung oder
        Verbreitung rechtswidriger, irreführender oder beleidigender Inhalte ist
        untersagt.
      </p>

      <h2>§ 7 Haftung</h2>
      <p>
        Nukipa haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie
        für Schäden aus der Verletzung des Lebens, des Körpers oder der
        Gesundheit. Bei einfacher Fahrlässigkeit haftet Nukipa nur für die
        Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und
        begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Die
        Haftung für leichte Fahrlässigkeit ist je Schadensereignis und im
        Übrigen pro Vertragsjahr summenmäßig auf die im jeweiligen
        Vertragsjahr vom Kunden tatsächlich an Nukipa gezahlten Nettoentgelte
        begrenzt. Eine darüber hinausgehende Haftung ist ausgeschlossen. Die
        Haftung nach dem Produkthaftungsgesetz sowie für eine ausdrücklich
        übernommene Garantie bleibt unberührt.
      </p>
      <p>
        Da die Plattform unter Einsatz generativer KI-Modelle arbeitet, kann
        Nukipa nicht zusichern, dass automatisch erzeugte Inhalte fehlerfrei,
        vollständig, rechtskonform oder für einen bestimmten Zweck geeignet
        sind. Der Kunde ist verpflichtet, generierte Inhalte vor einer
        Veröffentlichung auf inhaltliche Richtigkeit und rechtliche Zulässigkeit
        zu prüfen.
      </p>

      <h2>§ 8 Verfügbarkeit</h2>
      <p>
        Nukipa bemüht sich um eine möglichst hohe Verfügbarkeit der Plattform.
        Wartungsfenster werden so weit möglich außerhalb der üblichen
        Geschäftszeiten gelegt. Eine bestimmte Verfügbarkeit wird nur zugesagt,
        soweit dies im jeweiligen Tarif (insbesondere "Nukipa Pro Managed") oder
        einem gesonderten Service Level Agreement ausdrücklich geregelt ist.
      </p>

      <h2>§ 9 Datenschutz</h2>
      <p>
        Die Verarbeitung personenbezogener Daten richtet sich nach der
        Datenschutzerklärung von Nukipa. Soweit der Kunde im Rahmen der Nutzung
        der Plattform personenbezogene Daten Dritter verarbeitet, schließen die
        Parteien einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
      </p>

      <h2>§ 10 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
        UN-Kaufrechts. Ausschließlicher Gerichtsstand für alle Streitigkeiten
        aus diesem Vertrag ist, soweit gesetzlich zulässig, München. Sollten
        einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit
        der übrigen Bestimmungen unberührt.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Bei Rückfragen zu diesen AGB schreib uns an{' '}
        [FILL IN: legal-Mailadresse, z. B. legal@nukipa.com].
        <br />
        Stand: 18. Mai 2026.
      </p>
    </LegalShell>
  );
}
