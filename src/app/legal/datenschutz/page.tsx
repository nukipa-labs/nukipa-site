import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';

export const metadata: Metadata = {
  title:       'Datenschutzerklärung',
  description: 'Datenschutzerklärung gemäß DSGVO der Nukipa Labs GmbH.',
  alternates: {
    canonical: '/legal/datenschutz',
    languages: {
      'de-DE': '/legal/datenschutz',
      'en-US': '/en/legal/privacy'
    }
  }
};

export default function DatenschutzPage() {
  return (
    <LegalShell
      locale="de"
      currentPath="/legal/datenschutz"
      title="Datenschutzerklärung"
      effective="Stand: 18. Mai 2026"
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        Nukipa Labs GmbH<br />
        [FILL IN: Straße und Hausnummer]<br />
        [FILL IN: PLZ] München, Deutschland<br />
        E-Mail Datenschutz: [FILL IN: Datenschutz-Mailadresse, z. B. datenschutz@nukipa.com]
      </p>
      <p>
        Wir haben keinen gesetzlich vorgeschriebenen Datenschutzbeauftragten
        bestellt. Anfragen zum Datenschutz beantworten wir direkt unter der
        oben genannten E-Mail-Adresse.
      </p>

      <h2>2. Erhebung personenbezogener Daten beim Besuch dieser Website</h2>
      <p>
        Beim aufrufenden Besuch dieser Website werden automatisch Informationen
        allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten
        etwa die Art des Webbrowsers, das verwendete Betriebssystem, den
        Domainnamen deines Internet-Service-Providers, deine IP-Adresse und
        Ähnliches. Es handelt sich hierbei ausschließlich um Informationen, welche
        keine Rückschlüsse auf deine Person zulassen. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der
        Website).
      </p>

      <h2>3. Cookies und vergleichbare Technologien</h2>
      <p>
        Diese Website setzt ausschließlich technisch notwendige Cookies bzw.
        ähnliche Speichermechanismen ein. Im Einsatz ist insbesondere ein
        Session-Cookie der Nukipa-Plattform (Name: <code>nk_sid</code>), das
        einer pseudonymen Besuchssitzung eine zufällig erzeugte ID zuordnet, um
        Mehrfachzählungen einzelner Aufrufe zu vermeiden. Eine Auswertung über
        die Sitzung hinaus oder ein Abgleich mit Drittquellen findet nicht
        statt. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG (unbedingt
        erforderliche Speicherung). Du kannst die Speicherung in deinem Browser
        deaktivieren; in diesem Fall werden Besuche ggf. mehrfach gezählt, die
        sonstigen Funktionen der Website bleiben verfügbar.
      </p>

      <h2>4. Webanalyse über die Nukipa-Plattform</h2>
      <p>
        Diese Website wird auf der eigenen Plattform der Nukipa Labs GmbH
        betrieben. Beim Aufruf jeder Seite überträgt der Server der Website
        einen Besuchs-Datensatz an unseren Plattform-Endpunkt unter{' '}
        <code>https://nukipa-staging-gateway.fly.dev/public/v1/signals</code>{' '}
        (Auftragsverarbeiter und Verantwortliche sind hier identisch. Der
        Endpunkt wird ebenfalls von der Nukipa Labs GmbH betrieben).
      </p>
      <p>Übertragen werden je Aufruf:</p>
      <ul>
        <li>der besuchte Pfad und der Hostname</li>
        <li>der HTTP-Referer (sofern vom Browser gesendet)</li>
        <li>der User-Agent-String des Browsers</li>
        <li>die IP-Adresse der anfragenden Verbindung</li>
        <li>die ID des Session-Cookies <code>nk_sid</code></li>
        <li>
          UTM-Parameter aus der URL, soweit sie beim Aufruf der Seite vorhanden
          sind (<code>utm_source</code>, <code>utm_medium</code>,{' '}
          <code>utm_campaign</code>, <code>utm_content</code>)
        </li>
      </ul>
      <p>
        Zusätzlich erfassen wir Klicks auf Call-to-Action-Buttons, die mit
        einem entsprechenden Marker (<code>data-cta-id</code>) ausgezeichnet
        sind. Die Daten dienen ausschließlich der Reichweitenmessung und der
        Wirkungsanalyse unserer Inhalte. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
        f DSGVO (berechtigtes Interesse an einer datensparsamen
        Reichweitenmessung). Die Daten werden für maximal 24 Monate aufbewahrt
        und danach gelöscht oder vollständig anonymisiert.
      </p>

      <h2>5. Schriftarten (lokal eingebunden)</h2>
      <p>
        Diese Website verwendet die Schriftarten Instrument Sans und Instrument
        Serif. Die Schriftarten werden über{' '}
        <code>next/font</code> beim Build der Website lokal auf unserem Server
        gehostet und beim Seitenaufruf direkt aus unserer eigenen Domain
        ausgeliefert. Es findet kein Verbindungsaufbau zu Drittanbietern
        (insbesondere nicht zu <code>fonts.googleapis.com</code> oder{' '}
        <code>fonts.gstatic.com</code>) statt. Eine Übermittlung deiner
        IP-Adresse an Google im Rahmen der Schriftarten-Auslieferung erfolgt
        damit nicht.
      </p>

      <h2>6. Nukipa Feedback-Widget (nur in Vorab-/Review-Builds)</h2>
      <p>
        In Vorab- und Review-Versionen dieser Website kann ein
        Feedback-Widget eingeblendet sein, mit dem während des Reviews
        Anmerkungen zur Website gesammelt werden. Das Widget speichert
        eingegebene Notizen ausschließlich lokal im{' '}
        <code>localStorage</code> deines Browsers (Schlüssel{' '}
        <code>nukipa_feedback_v1</code>). Eine Übertragung an unseren Server
        oder an Dritte findet nicht statt; das Widget enthält keine
        Netzwerk-Übertragung. Im produktiven Live-Betrieb der Website ist das
        Widget deaktiviert.
      </p>

      <h2>7. Hosting</h2>
      <p>
        Diese Website wird bei einem Auftragsverarbeiter im EU-Raum gehostet.
        Server-Logfiles werden aus technischen Gründen kurzzeitig gespeichert und
        nach spätestens 30 Tagen gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
        f DSGVO. Mit dem Hoster besteht ein Auftragsverarbeitungsvertrag gemäß
        Art. 28 DSGVO.
      </p>

      <h2>8. Kontaktaufnahme</h2>
      <p>
        Wenn du uns per E-Mail, Kontaktformular oder Chat kontaktierst, speichern
        wir deine Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht), um die
        Anfrage zu beantworten. Die Daten werden gelöscht, sobald sie für den
        Zweck nicht mehr erforderlich sind, sofern keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>9. Deine Rechte</h2>
      <p>
        Du hast jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
        Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
        Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Erteilte
        Einwilligungen kannst du jederzeit für die Zukunft widerrufen. Für die
        Ausübung deiner Rechte genügt eine formlose E-Mail an die oben genannte
        Kontaktadresse.
      </p>

      <h2>10. Beschwerderecht</h2>
      <p>
        Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu
        beschweren. Für uns zuständig ist das Bayerische Landesamt für
        Datenschutzaufsicht, Promenade 18, 91522 Ansbach.
      </p>

      <h2>11. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
        die Rechtslage oder der Funktionsumfang der Website ändern. Die
        jeweils aktuelle Fassung gilt ab dem oben angegebenen Datum.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Bei Fragen zum Datenschutz schreib uns an{' '}
        [FILL IN: Datenschutz-Mailadresse, z. B. datenschutz@nukipa.com].
        <br />
        Stand: 18. Mai 2026.
      </p>
    </LegalShell>
  );
}
