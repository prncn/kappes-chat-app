import React from 'react';
import { Code, Heading, Paragraph } from '../pages/Docs';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

export function Konsole({ passHeight }) {
  return (
    <div className="w-4/5 space-y-3 bg-no-repeat">
      <Heading main>Die Konsole</Heading>
      <Heading sub>Guide zur Nutzung der Konsole </Heading>
      <Paragraph>
        Ein Man-in-the-Middle-Angriff (MITM-Angriff) ist eine Angriffsform, die
        in Rechnernetzen ihre Anwendung findet. Der Angreifer steht dabei
        entweder physisch oder – heute meist – logisch zwischen den beiden
        Kommunikationspartnern, hat dabei mit seinem System vollständige
        Kontrolle über den Datenverkehr zwischen zwei oder mehreren
        Netzwerkteilnehmern und kann die Informationen nach Belieben einsehen
        und sogar manipulieren.
      </Paragraph>
      <FauxConsole />
      <Heading>Konsole leeren</Heading>
      <Paragraph>
        <Code>clear</Code>
        Leert den Output der Konsole. Zur Übersichtlichkeit.
      </Paragraph>
      <Heading>Netzwerk Interfaces</Heading>
      <Paragraph>
        <Code>devices</Code>
        Listet alle sichtbaren Interfaces im Netzwerk auf. Hierunter können auch
        beispielsweise Bluetooth Schnittstellen fallen. Das Netzwerkinterface,
        wofür wir uns interessieren, ist Loopback. Über das interne Loopback
        werden alle Daten dieser App, beispielweise Chat Nachrichten des
        Messengers, kommuniziert.
      </Paragraph>
      <Heading>Traffic lesen</Heading>
      <Paragraph>
        <Code>packet</Code>
        Hiermit könnt ihr alle bisherigen Datenpakete lesen, die ihr verschickt
        und empfangen habt. Zumindest alle, die lesbar sind durch eine
        ASCII-Dekodierung. Abgesehen von den Socket Paketen, werdet ihr auch
        größere Pakete sehen, wie zum Beispiel HTTP Header, die bei bestimmten
        Seitenanfragen entstehen. Falls andere Netzwerkdienste oder Seiten
        besucht werden, könnten möglicherweise auch diese hier abgebildet sein.
      </Paragraph>
      <Heading>Account Phishing</Heading>
      <Paragraph>
        <Code>paypal</Code>
        Solltet ihr die Phishing Seite besucht haben, könnt ihr hier eure
        "Account Daten" sehen, mit denen ihr euch "einloggen" wolltet. In
        anderen Worten wurde im Hintergrund das Input Formular der Fake-Seite an
        unsere Proxy gesendet.
      </Paragraph>
      <Heading>Chat Messenger manipulieren</Heading>
      <Paragraph>
        <Code>inject {'< message >'}</Code>
        Alle Nachrichten der Chat App werden von unserer Proxy abgefangen und
        dann weitergesendet. Das ermöglicht euch, eine abgefangene Nachricht zu
        modifizieren. Mit diesem Command wählt ihr eine gefälschte Nachricht,
        die alle empfangenen Nachrichten überschreiben wird. Mit
      </Paragraph>
      <Paragraph>
        <Code>inject clear</Code>
        entfernt ihr die injizierte Nachricht, sodass der Messenger wieder
        normal funktioniert.
      </Paragraph>
      <Heading>Zertfikate sehen</Heading>
      <Paragraph>
        <Code>
          expose cert <br /> expose key
        </Code>
        Die HTTPS Version dieser App ist verschlüsselt über Zertifikate. Dieses
        selbst-signierte Zertifikat, sowie den Public-Key der Seite könnt ihr
        mit diesem Command einsehen.
      </Paragraph>
    </div>
  );

  function FauxConsole() {
    return (
      <Link to="/mitmkonsole">
        <div className="xl:w-1/2 w-2/3 border-current h-52 rounded-lg border relative font-mono overflow-y-auto overflow-x-hidden">
          <div className="space-x-2 absolute left-3 top-3">
            <div className="inline-block rounded-full bg-green-700 w-3 h-3"></div>
            <div className="inline-block rounded-full bg-green-600 w-3 h-3"></div>
            <div className="inline-block rounded-full bg-green-500 w-3 h-3"></div>
          </div>
          <div
            className="w-full absolute bottom-0 border-current p-4 inline-flex flex-col text-lg"
            style={{ height: '70%' }}
          >
            <Typical
              steps={['Start (pretend) hacking...', 5000]}
              loop={Infinity}
              className="mx-4"
            />
          </div>
        </div>
      </Link>
    );
  }
}
