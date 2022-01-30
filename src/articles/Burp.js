import ReactPlayer from 'react-player';
import { Heading, Paragraph } from '../pages/Docs';

export function Burp() {
  return (
    <>
      <div className="w-full space-y-6 relative flex flex-col items-center">
        <div className="w-4/5 space-y-6 mb-10">
          <Heading main sub>
            Burp Suite
          </Heading>
          <Heading sub>Was ist Burp Suite und wie funktioniert es?</Heading>
          <Paragraph>
            Burp Suite ist eine Software, die ausgestattet ist mit einer Reihe
            von Tools, die für Penetrationstests von Webanwendungen verwendet
            werden kann. Burp Suite bietet neben kostenpflichtigen Editionen
            eine kostenlose Community Edition, mit welcher wir den Angriff
            durchführen werden. In unserem Fall verwenden wir den Abfangproxy,
            der uns ermöglicht, den Inhalt von Anfragen und Antworten einzusehen
            und so zu ändern, dass unsere eigene Nachricht verschickt wird.
            Standardmäßig überwacht der Abfangproxy den Port 8080 der
            IPv4-Loopback-Schnittstelle, welches für unsere Tests ausreichend
            ist.
          </Paragraph>
          <Heading>
            Wie das Modifizieren der Nachrichten die Integrität verletzt
          </Heading>
          <Paragraph>
            Bevor wir den Angriff starten, sollten wir noch klären, wie das
            Modifizieren der Nachrichten Einfluss auf die IT-Sicherheit hat. Die
            Vertraulichkeit haben wir bereits geklärt. Können wir eine Nachricht
            modifizieren, verletzen wir nicht nur die Vertraulichkeit, sondern
            die Integrität der Daten selber. Die Integrität bezieht sich auf die
            Richtigkeit und Vollständigkeit der Daten ihres gesamten
            Lebenszyklus, also vom Beginn bis zum Ende der Übertragung. Es
            bedeutet, dass die Nachrichten nicht durch Dritte verändert werden
            dürfen. Wir werden die Nachrichten so modifizieren, dass der
            Empfänger davon ausgeht, dass er die ursprüngliche Nachricht
            erhalten hat. Die Nachricht kann dann alles mögliche beinhalten, in
            unserem Fall werden wir eine Seite schicken, die genauso aussieht,
            wie die PayPal-Seite. Mit dieser Seite können wir die Bankdaten
            abfangen und den Angriff am effektivsten gestalten.
          </Paragraph>
          <Heading>Nachrichten modifizieren mit Burp Suite</Heading>
          <Paragraph>
            Nach dem Öffnen der Software wählen wir zu Beginn ein temporäres
            Projekt aus. Unter dem Reiter „Proxy“ sehen wir nun automatisch in
            blau „Intercept is on“ (Anmerkung: Falls das nicht der Fall sein
            sollte, einfach mit einem Klick anschalten). Wir öffnen den von Burp
            Suite zur Verfügung gestellten Browser mit dem Knopf „Open Browser“.
            Wir können auch einen Browser unserer Wahl öffnen, müssen dafür aber
            zusätzliche Konfigurationen einrichten. Im eingebauten Browser
            öffnen wir nun unsere Chat-App in zwei Tabs, damit wir eine
            Konversation simulieren können. Dafür benutzen wir den Link:_______.
            Wir schreiben in einem Tab die Nachricht „Hallo Mike“ und senden
            diese ab. Die Nachricht wird in demselben Tab auch als verschickt
            angezeigt, im Empfänger Tab aber nicht. In Burp drücken wir nun auf
            die Taste „Forward“ so lange, bis wir in Klartext „receive“ und
            danach unserer Nachricht erkennen. Nun ist es möglich, die Nachricht
            zu modifizieren und unsere eigene einzugeben.
          </Paragraph>
          <Heading>Erweiterung des Angriffs</Heading>
          <Paragraph>
            In Kapitel ____ zeigen wir eine Erweiterung dieses Angriffs durch
            das Verschicken identisch aufgebauten PayPal-Seite, um zusätzlich
            die Bankdaten abzufangen. Schließlich geht der Empfänger davon aus,
            mit der eigentlichen Person zu sprechen und erwartet weniger eine
            Modifikation der Nachrichten. Außerdem schauen wir uns, genau wie
            beim Thema Wireshark, Schutzmöglichkeiten aus Benutzer- und
            Entwicklersicht in Kapitel ___ an.
          </Paragraph>
        </div>
        <div
          className="w-full overflow-hidden rounded-lg"
          style={{ height: '43rem' }}
        >
          <ReactPlayer
            muted
            url="https://streamable.com/jut94w"
            playsinline
            width="100%"
            height="100%"
            playing="true"
          />
        </div>
      </div>
    </>
  );
}
