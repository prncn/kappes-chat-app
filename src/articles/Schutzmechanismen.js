import React from 'react';
import { Heading, Paragraph } from '../pages/Docs';
import VisibilitySensor from 'react-visibility-sensor';
import Typical from 'react-typical';
import ImageDatenschutz from '../img/goop-website-footer-privacy-policy-highlighted.jpg';
import ImageGoogle from '../img/thread-37465811-17980963790677315180.png';
import ImageKingSmart from '../img/kingdom-smart-house-interface.png';

export function Schutzmechanismen({ lightMode, setLightMode }) {
  return (
    <div className="w-4/5 space-y-6">
      <Heading main sub>
        Schutzmechanismen
      </Heading>
      <Heading sub>Als Nutzer und Entwickler</Heading>
      <Paragraph>
        Mit unseren Angriffen konnten wir die Sicherheitslücken ausnutzen und
        zeigen, welche Gefahren bestehen. Neben dem Abfangen der Nachrichten bis
        hin zur Modifikation der eigentlichen Nachricht und das Versenden eines
        Phishing-Links müssen wir uns nun anschauen, wie man solche Angriffe
        vermeiden bzw. erkennen kann.
      </Paragraph>
      <div
        className={`overflow-hidden bg-cover bg-no-repeat w-full rounded-xl ${
          !lightMode ? 'bg-card-2' : 'bg-dev'
        }`}
        style={{ height: '28rem' }}
      />
      <div className="my-20" />
      <>
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            isVisible ? setLightMode(true) : setLightMode(false);
            isVisible ? console.log('IN VIEW') : console.log('NOT IN VIEW');
          }}
        >
          <div className={`flex flex-col space-y-6 z-50 `}>
            <Heading main>Als Benutzer</Heading>
            <Paragraph>
              Wie bereits in vorherigen Kapiteln angedeutet, schauen wir uns die
              Schutzmechanismen aus Benutzer- und Entwicklersicht an. Wir listen
              zuerst die Möglichkeiten auf, die ein Benutzer hat, um die
              Sicherheit einer Seite zu überprüfen.
            </Paragraph>
            <Heading>HTTPS und SSL-Zertifikat</Heading>
            <Paragraph>
              <div className="text-7xl font-semibold py-10 flex items-center justify-center">
                <div className="text-green-400">
                  <IconLock />
                </div>
                <Typical steps={['HTTP', 5000, 'TL', 5000]} />
                <div className="text-green-400">S</div>
              </div>
              Da sich dieser Kurs hauptsächlich um die
              Verschlüsselungsprotokolle http und https dreht, ist es
              offensichtlich, dass die erste Schutzmaßnahme das Überprüfen der
              URL ist. Verwendet die Seite das https Protokoll anstatt des http
              Protokolls, deutet dies darauf hin, dass die Seite verschlüsselt
              und durch ein SSL-Zertifikat gesichert ist. Https wird häufig für
              Online-Banking und Einkäufe verwendet und verschlüsselt den
              Datenaustausch zwischen Client und Server. Chat-Messenger
              verwenden meistens eine Verschlüsselung, sodass die Nachrichten
              nicht eingesehen bzw. modifiziert werden können. Da
              SSL-Zertifikate auch verfälscht werden können, werden wir in
              kommenden Schutzmechanismen darauf eingehen, wie man solche
              erkennt.
            </Paragraph>
            <Heading>Datenschutzrichtlinien</Heading>
            <figure className="my-10">
              <img src={ImageDatenschutz} alt="" className="rounded-lg" />
              <figcaption>Goop Datenschutzrichtlinien</figcaption>
            </figure>
            <Paragraph>
              Eine Website sollte über eine Datenschutzrichtlinie verfügen, in
              welcher niedergeschrieben ist, wie mit den Daten umgegangen wird
              und wie sie geschützt werden. Da es meistens aufgrund gesetzlicher
              Vorgaben vorgeschrieben ist, sollten die ersten Alarmglocken
              läuten, wenn keine vorhanden sein sollte.
            </Paragraph>
            <Heading>Kontaktinformationen</Heading>
            <Paragraph>
              Eine Seite wird außerdem über Kontaktinformationen verfügen, wenn
              sie seriös sein sollte. Darunter gehört eine Telefonnummer, eine
              E-Mail-Adresse, Angaben zur physischen Adresse sowie, falls
              vorhanden, Hinweise auf Social-Media-Kanäle.{' '}
            </Paragraph>
            <Heading>Website-Sicherheitsprüfung</Heading>
            <Paragraph>
              <figure className="my-10">
                <img src={ImageGoogle} alt="" className="rounded-lg" />
                <figcaption>Google Sicherheitsprüfung</figcaption>
              </figure>
              Man kann auf schnelle Art und Weise mithilfe eines
              Website-Sicherheits-Checker kontrollieren, ob eine Seite sicher
              ist. Neben vielen Seiten bietet Google ein solches Dienst an. Laut
              Google überprüften sie täglich Milliarden von URLs auf die
              Sicherheit und entdeckt dabei tausende neue unsichere Websites.
            </Paragraph>
            <Heading>Versteckte Malware</Heading>
            <Paragraph>
              Es kann auch sein, dass eine ihnen bereits bekannte Seite im Laufe
              der Zeit Opfer eines Angriffs wurde. Dabei kann die Seite mit
              einer Malware infiziert oder so gestaltet worden sein, dass es
              anderen schaden möchte. Erkennen lässt sich sowas zum Beispiel
              durch auftauchende Pop-ups, die mit einem Klick Malware
              herunterladen können, Weiterleitungen auf andere URLs, die
              möglicherweise als Phishing-Seite fungieren können, komische
              Werbungen, die für die Seite unüblich sein könnten und vieles
              mehr.
            </Paragraph>
          </div>
        </VisibilitySensor>
        <div className="my-20" />
        <div className="flex flex-col space-y-6">
          <Heading main>Als Entwickler</Heading>
          <Paragraph>
            Ist man dabei, eine eigene Seite zu kreieren, welche mit
            Benutzerdaten arbeitet, so ist es von großer Bedeutung, diese sicher
            zu gestalten. Vor allem in unseren Beispielen ist es bedeutsam,
            einen sicheren Datenverkehr zwischen zwei Parteien zu gewährleisten.
            Wir werden einige auflisten und erläutern, wieso sie Sinn machen.
          </Paragraph>
          <Heading>HTTPS und SSL-Zertifikat</Heading>
          <Paragraph>
            <div className="flex flex-col items-center space-y-3 my-10">
              <div className="p-2 bg-white text-black rounded-lg flex items-center w-3/4 shadow-lg hover:opacity-80 transition">
                <div className="text-green-400 mr-2 animate-pulse">
                  <IconLock />
                </div>
                <div className="text-green-400">https</div>
                ://platin.demo.com
              </div>

              <div className="p-2 bg-white text-black rounded-lg flex items-center w-3/4 shadow-lg hover:opacity-80 transition">
                <div className="text-red-400 mr-2 animate-pulse">
                  <IconWarn />
                </div>
                <div className="text-red-400">http</div>
                ://platin.demo.com
              </div>
            </div>
            Es ist keine große Überraschung. Eine Seite zu verschlüsseln ist das
            wichtigste, was man als Entwickler erledigen kann. Wir haben aus
            Benutzersicht bereits erläutert, dass man sein Augenmerk auf die URL
            legen sollte. Ein Benutzer fühlt sich deutlich wohler auf einer
            Seite mit Verschlüsselung als auf einer ohne. Als Entwickler ist es
            heutzutage deutlich einfacher, seine Seite zu verschlüsseln als
            früher. So bietet die Zertifizierungsstelle Internet Security
            Research Group (ISRG) mit ihrem Dienst Let’s Encrypt kostenlose
            Zertifikate an und ermöglicht somit eine einfache Umsetzung der
            Sicherheit.
          </Paragraph>
          <Heading>Up-to-date</Heading>
          <Paragraph>
            Angriffe auf Websites haben im Laufe der Pandemie zugenommen und
            werden immer komplexer. Deshalb ist es als Entwickler von
            essenzieller Bedeutung, über die aktuelle Cyber-Bedrohungslage
            informiert zu sein und im Eintrittsfall schnell handeln zu können.
            So kann durch ein veraltetes Plugin eine Sicherheitslücke entstehen
            und einfach von Angreifern ausgenutzt werden. Als Unterstützung kann
            das Tool Gemnasium helfen, welches einen bei auftretenden
            Sicherheitslücken informiert.
          </Paragraph>
          <Heading>Zugang zur Seite sichern</Heading>
          <Paragraph>
            <img src={ImageKingSmart} alt="" />
            Falls die Seite über ein Anmeldeformular verfügt, um Zugang zur
            Seite zu bekommen, sollte eine strenge Passwortrichtlinie unbedingt
            eingebaut werden. Wenn man sich anschaut, dass das häufigste
            benutzte Passwort auf der Welt 123456 ist, muss man sich nicht
            wundern, dass es Angreifern einfach gemacht wird. Auch wenn für
            manche Mitarbeiter und Nutzer der Seite ein komplexes Passwort
            nervig und schwierig zu merken ist, spielt es beim Schützen der
            Nutzerdaten sowie vor einem Datenleck eine große Rolle.
          </Paragraph>
          <Paragraph>
            Zusätzlich zum sicheren Passwort wäre eine
            Multi-Faktor-Authentisierung sinnvoll. Ein Angreifer bräuchte neben
            den Anmeldedaten auf der Seite eine zusätzliche Identifizierung, die
            einen Zugriff erschwert.
          </Paragraph>
          <Paragraph>
            Außerdem sollte beachtet werden, dass mithilfe von bösartigen
            SQL-Befehlen über Webanfragen SQL-Injection-Angriffe inszeniert
            werden können. Es ist daher wichtig, die Eingabe eines Benutzers
            immer zu überprüfen, beispielsweise durch Funktionen wie
            mysql_real_escape_string oder vorbereitete Anweisungen (prepared
            Statements).
          </Paragraph>
          <Heading>Regelmäßige Backups</Heading>
          <Paragraph>
            Damit nach einem Angriff, wo möglicherweise Daten verloren gegangen
            sind, kein permanenter Datenverlust entsteht, ist es vorteilhaft,
            regelmäßige Backups durchzuführen, um jederzeit auf eine vorherige
            Version zurückwechseln zu können.
          </Paragraph>
        </div>
      </>
    </div>
  );
}

function IconLock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
    </svg>
  );
}

function IconWarn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      />
    </svg>
  );
}
