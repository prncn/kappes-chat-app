import React from 'react';
import { Heading, Paragraph } from '../pages/Docs';

export function Schutzmechanismen({ lightMode, setLightMode }) {
  return (
    <div className="w-4/5 relative">
      <div
        className={`absolute -top-20 -right-40 bg-no-repeat ${
          !lightMode ? 'bg-lock-main' : 'bg-dev'
        }`}
        style={{ height: 912, width: 912 }}
      />
      <Heading main>Schutzmechanismen</Heading>
      <Paragraph short>
        Mit unseren Angriffen konnten wir die Sicherheitslücken ausnutzen und
        zeigen, welche Gefahren bestehen. Neben dem Abfangen der Nachrichten bis
        hin zur Modifikation der eigentlichen Nachricht und das Versenden eines
        Phishing-Links müssen wir uns nun anschauen, wie man solche Angriffe
        vermeiden bzw. erkennen kann.
      </Paragraph>
      <div
        className="text-6xl cursor-pointer font-bold opacity-80 hover:opacity-100 w-1/2 bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y bg-clip-text text-transparent"
        onClick={() => setLightMode(!lightMode)}
      >
        Wechseln zur {lightMode ? 'Entwicklersicht' : 'Benutzersicht'}
      </div>
      <div className="my-20" />

      {lightMode ? (
        <>
          <Heading main>Benutzersicht</Heading>
          <Paragraph short>
            Wie bereits in vorherigen Kapiteln angedeutet, schauen wir uns die
            Schutzmechanismen aus Benutzer- und Entwicklersicht an. Wir listen
            zuerst die Möglichkeiten auf, die ein Benutzer hat, um die
            Sicherheit einer Seite zu überprüfen.
          </Paragraph>
          <Heading>HTTPS und SSL-Zertifikat</Heading>
          <Paragraph>
            Da sich dieser Kurs hauptsächlich um die Verschlüsselungsprotokolle
            http und https dreht, ist es offensichtlich, dass die erste
            Schutzmaßnahme das Überprüfen der URL ist. Verwendet die Seite das
            https Protokoll anstatt des http Protokolls, deutet dies darauf hin,
            dass die Seite verschlüsselt und durch ein SSL-Zertifikat gesichert
            ist. Https wird häufig für Online-Banking und Einkäufe verwendet und
            verschlüsselt den Datenaustausch zwischen Client und Server.
            Chat-Messenger verwenden meistens eine Verschlüsselung, sodass die
            Nachrichten nicht eingesehen bzw. modifiziert werden können. Da
            SSL-Zertifikate auch verfälscht werden können, werden wir in
            kommenden Schutzmechanismen darauf eingehen, wie man solche erkennt.
          </Paragraph>
          <Heading>Datenschutzrichtlinien</Heading>
          <Paragraph>
            Eine Website sollte über eine Datenschutzrichtlinie verfügen, in
            welcher niedergeschrieben ist, wie mit den Daten umgegangen wird und
            wie sie geschützt werden. Da es meistens aufgrund gesetzlicher
            Vorgaben vorgeschrieben ist, sollten die ersten Alarmglocken läuten,
            wenn keine vorhanden sein sollte.
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
            Man kann auf schnelle Art und Weise mithilfe eines
            Website-Sicherheits-Checker kontrollieren, ob eine Seite sicher ist.
            Neben vielen Seiten bietet Google ein solches Dienst an. Laut Google
            überprüften sie täglich Milliarden von URLs auf die Sicherheit und
            entdeckt dabei tausende neue unsichere Websites.
          </Paragraph>
          <Heading>Versteckte Malware</Heading>
          <Paragraph>
            Es kann auch sein, dass eine ihnen bereits bekannte Seite im Laufe
            der Zeit Opfer eines Angriffs wurde. Dabei kann die Seite mit einer
            Malware infiziert oder so gestaltet worden sein, dass es anderen
            schaden möchte. Erkennen lässt sich sowas zum Beispiel durch
            auftauchende Pop-ups, die mit einem Klick Malware herunterladen
            können, Weiterleitungen auf andere URLs, die möglicherweise als
            Phishing-Seite fungieren können, komische Werbungen, die für die
            Seite unüblich sein könnten und vieles mehr.
          </Paragraph>
        </>
      ) : (
        <>
          <div className="my-20" />
          <Heading main>Entwicklersicht</Heading>
          <Paragraph>
            Ist man dabei, eine eigene Seite zu kreieren, welche mit
            Benutzerdaten arbeitet, so ist es von großer Bedeutung, diese sicher
            zu gestalten. Vor allem in unseren Beispielen ist es bedeutsam,
            einen sicheren Datenverkehr zwischen zwei Parteien zu gewährleisten.
            Wir werden einige auflisten und erläutern, wieso sie Sinn machen.
          </Paragraph>
          <Heading>HTTPS und SSL-Zertifikat</Heading>
          <Paragraph>
            Es ist keine große Überraschung. Eine Seite zu verschlüsseln ist das
            wichtigste, was man als Entwickler erledigen kann. Wir haben aus
            Benutzersicht bereits erläutert, dass man sein Augenmerk auf die URL
            legen sollte. Ein Benutzer fühlt sich deutlich wohler auf einer
            Seite mit Verschlüsselung als auf einer ohne. Als Entwickler ist es
            heutzutage deutlich einfacher, seine Seite zu verschlüsseln als
            früher. So bietet die Zertifizierungsstelle Internet Security
            Research Group (ISRG) mit ihrem Dienst Let’s Encrypt kostenlose
            Zertifikate an und ermöglicht somit eine einfache Umsetzung der
            Sicherheit.{' '}
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
        </>
      )}
    </div>
  );
}
