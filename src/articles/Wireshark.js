import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Heading, Paragraph } from '../pages/Docs';

export function Wireshark() {
  return (
    <>
      <div className="w-4/5 space-y-6">
        <Heading main sub>
          Wireshark
        </Heading>
        <Heading sub>Was ist Wireshark und wie funktioniert es?</Heading>
        <Paragraph>
          Wireshark ist ein Netzwerkprotokoll-Analysator, welcher Pakete von
          einer Netzwerkverbindung aufzeichnet, z. B. von einem Rechner zu dem
          Internet. Wireshark kann Pakete während des Abhörens der
          Netzwerkverbindung erfassen, zwischen verschiedenen Filteroptionen
          wählen und diese dann visuell darstellen. Wireshark wird hauptsächlich
          zur Fehlersuche in Netzwerken benutzt und gibt Aufschluss über die
          Sicherheit des Datenverkehrs.
        </Paragraph>
        <Heading>Vertraulichkeit der Daten</Heading>
        <Paragraph>
          Da wir nun wissen, wie Wireshark funktioniert und dass die Möglichkeit
          besteht, Nachrichten abzufangen und somit zu lesen, schauen wir uns im
          Folgenden die Auswirkungen auf die IT-Sicherheit an. Die IT-Sicherheit
          spielt in nahezu allen Bereichen eine bedeutsame Rolle. Das Schützen
          von Daten ist unumgänglich und sorgt bei Nichtbeachtung für große
          wirtschaftliche und juristische Folgen, geschweige von den Folgen, die
          die Kundenzufriedenheit betreffen. Mit Wireshark können wir die
          Nachrichten zwischen zwei Parteien abfangen. Somit wird gegen die
          Vertraulichkeit verstoßen, einem Grundschutzziel in der IT-Sicherheit.
          Wenn man beispielsweise einen Liebesbrief an eine Person verschickt,
          möchte man nicht, dass Dritte diesen lesen. Nachfolgend zeigen wir aus
          Gründen der Demonstration, wie der Angriff aussieht und erläutern in
          späteren Kapiteln, wie man sich aus Benutzer- und Entwicklersicht
          davor schützen kann.
        </Paragraph>
        <Heading>Nachrichten abfangen mithilfe von Wireshark</Heading>
        <Paragraph>
          Kommen wir zum spannenden Teil. Wir werden nachfolgend
          Chat-Nachrichten zwischen zwei Parteien abfangen. Dafür öffnen wir
          Wireshark und wählen auf der Hauptseite die Option „Adapter for
          loopback traffic capture“. Diese Netzwerkschnittstelle zeigt, wie der
          eigene Rechner mit sich selbst kommuniziert. Da unser Server lokal auf
          dem Rechner läuft, können wir hierrüber die Datenpakete abfangen. Nach
          dem Doppelklick auf die Option startet Wireshark die Aufnahme.{' '}
          <Link to="/chatapp" className="text-yellow-400 hover:text-yellow-300">
            Wir öffnen unsere Chat-App
          </Link>{' '}
          in zwei Tabs, sodass wir zwei Parteien simulieren können. Geben wir
          nun eine Nachricht (in unserem Beispiel: Test123) in einem Tab ein,
          sehen wir Aktivität in Wireshark. Wir schreiben im anderen Tab die
          Nachricht „Erhalten!“. Nun beenden wir die Aufnahme mit dem roten
          viereckigen Knopf. Bei näherem Betrachten von Paket 13 sehen wir im
          sogenannten Paket Bytes Bereich, der im unteren Teil der Anwendung zu
          sehen ist, die Paketdaten in Hexadezimal-Darstellung. Der blau
          markierte Teil lässt uns erkennen, was der Inhalt der Nachricht
          gewesen ist. Außerdem wird es uns in Klartext nochmal angezeigt,
          nämlich „Test123“. Im folgenden Video ist alles kompakt dargestellt.
        </Paragraph>
        <div
          className="overflow-hidden rounded-lg"
          style={{ width: '43rem', height: '24rem' }}
        >
          <ReactPlayer
            muted
            url="https://streamable.com/l7eamj"
            playsinline
            width="100%"
            height="100%"
            playing="true"
          />
        </div>
        <div className="h-full w-80 bg-red-400 absolute -top-10 right-0 bg-docs-shark rounded-lg" />
      </div>
    </>
  );
}
