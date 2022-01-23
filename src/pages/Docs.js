import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { Link, NavLink, useParams } from 'react-router-dom';

export function Docs() {
  const params = useParams();
  const currentPage = params?.page;

  class chapter {
    constructor(title, pages) {
      this.title = title;
      this.pages = pages;
    }
  }
  const chapters = [
    new chapter('Tools', ['Wireshark', 'Burp', 'DNS']),
    new chapter('Security', [
      'Packets',
      'Proxy Server',
      'ARP Poisoning',
      'Spoofing',
    ]),
    new chapter('Verschlüsselung', ['SSL', 'Zertifikate']),
  ];

  return (
    <div className="h-screen flex bg-ebony-700 text-ebony-50">
      <Helmet>
        <title>Docs | Platin Demo</title>
      </Helmet>
      <div className="h-full w-1/4 flex flex-col items-center">
        <div className="text-white font-semibold">
          <Link to="/">
            <div className="font-bold pt-10">Zurück</div>
          </Link>
          <Link to="/docs">
            <div className="font-bold pt-4">Docs</div>
          </Link>
          {chapters.map((chapter) => (
            <div key={chapter.title}>
              <div className="font-bold pt-10">{chapter.title}</div>
              {chapter.pages.map((page) => (
                <NavLink
                  key={page}
                  to={page.toLowerCase()}
                  className={({ isActive }) =>
                    `${
                      isActive ? 'text-indigo-500' : 'text-ebony-400'
                    } hover:text-ebony-100`
                  }
                >
                  <div className="my-2">{page}</div>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-1 bg-gradient-to-t from-ebony-700 via-ebony-600 to-ebony-700" />
      <div className="p-10 w-full flex items-center flex-col overflow-y-auto py-20">
        {
          {
            undefined: <Intro />,
            wireshark: <Wireshark />,
            burp: <Burp />,
            ettercap: <Ettercap />,
            packets: <Packets />,
            ssl: <SSL />,
          }[currentPage]
        }
      </div>
    </div>
  );
}

function Intro() {
  return (
    <>
      <div className="w-4/5 space-y-6">
        <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
          Einführung zur Demo
        </h1>
        <p className="text-2xl text-ebony-50 w-96">
          Dokumentation zu den Tools.
        </p>
        <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y p-4 text-white flex items-end">
          <h1 className="text-2xl font-semibold">Getting Started</h1>
        </div>
        <p>
          Auf diesen Seiten findet ihr Guides und Erklärungen zu der Nutzung und
          den Hintergründen der Tools. Wählt einen Abschnitt auf der linken
          Navigation.
        </p>
      </div>
    </>
  );
}

function Wireshark() {
  return (
    <>
      <div className="w-4/5 space-y-6">
        <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
          Wireshark
        </h1>
        <p className="text-2xl text-ebony-50 w-96">
          Nachrichten abfangen mit Wireshark.
        </p>
        <p className="text-justify w-2/3 pb-20">
          Als erste Angriffsmöglichkeit möchten wir die Nachrichten zwischen
          zwei Parteien anfangen und selber lesen. Das Abfangen solcher
          Nachrichten verletzt in der Informationssicherheit die
          Vertraulichkeit, da die Nachricht nun auch von Dritten gelesen werden
          kann. Zur Hilfe nehmen wir uns Wireshark, die wohl bekannteste
          Paket-Sniffer Software. Während die Software die ganze Zeit die
          Netzwerkverbindung abhört, fangen wir die Datenpakete, die in unserem
          Netzwerk verschickt werden, ab. Darunter auch die Pakete, die mittels
          unserer Chat-App verschickt werden.
        </p>
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

function Burp() {
  return (
    <>
      <div className="w-full space-y-6 relative flex flex-col items-center">
        <div className="w-4/5 space-y-6 mb-10">
          <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
            Burp Suite
          </h1>
          <p className="text-2xl text-ebony-50 w-96">
            Nachrichten modifizieren mit Burp.
          </p>
          <p className="text-justify w-2/3">
            Wir haben bereits das Tool Wireshark kennengelernt und konnten die
            Nachrichten inspizieren. Im nächsten Schritt schauen wir uns das
            Modifizieren der Nachrichten an. Es gibt einige Tools, die uns das
            ermöglichen. Das Abändern von Nachrichten wird in der
            Informationssicherheit als Verletzung der Integrität betrachtet, da
            wir eine Datenänderung vornehmen. Wir fokussieren uns in diesem
            Beispiel auf “Burp Suite“. Mit diesem Tool können wir unseren HTTP-
            und HTTPS-Verkehr abfangen und so modifizieren, dass die von uns
            geschriebene Nachricht anstatt der ursprünglichen Nachricht an den
            Empfänger geschickt wird. Schauen wir uns den Angriff im Video
            genauer an.
          </p>
        </div>
        <div
          className="w-full overflow-hidden rounded-lg"
          style={{ height: '43rem' }}
        >
          <ReactPlayer
            muted
            url="https://streamable.com/ig7bcj"
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

function Ettercap() {
  return (
    <>
      <div className="w-4/5 space-y-6">
        <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
          Ettercap
        </h1>
        <p className="text-2xl text-ebony-50 w-96">Tests mit Ettercap.</p>
        <p className="text-justify w-2/3">
          Wir haben bereits das Tool Wireshark kennengelernt und konnten die
          Nachrichten inspizieren. Im nächsten Schritt schauen wir uns das
          Modifizieren der Nachrichten an. Es gibt einige Tools, die uns das
          ermöglichen. Das Abändern von Nachrichten wird in der
          Informationssicherheit als Verletzung der Integrität betrachtet, da
          wir eine Datenänderung vornehmen. Wir fokussieren uns in diesem
          Beispiel auf “Burp Suite“. Mit diesem Tool können wir unseren HTTP-
          und HTTPS-Verkehr abfangen und so modifizieren, dass die von uns
          geschriebene Nachricht anstatt der ursprünglichen Nachricht an den
          Empfänger geschickt wird. Schauen wir uns den Angriff im Video genauer
          an.
        </p>
        <div className="h-full w-80 bg-red-400 absolute -top-10 right-0 bg-docs-burp rounded-lg" />
      </div>
    </>
  );
}

function Packets() {
  const [segCode, setSegCode] = useState('');
  const [segName, setSegName] = useState('');
  const [segLen, setSegLen] = useState(0);

  function DisplayBytes({ bytes, name }) {
    function isASCII(str) {
      return /^[\x20-\x7F]*$/.test(str);
    }

    const decoded = Buffer.from(bytes)
      .toString()
      .split('')
      .map((c) => (isASCII(c) ? c : '.'));

    return (
      <div
        className="flex flex-wrap rounded-lg hover:bg-ebony-600"
        onMouseEnter={() => {
          setSegCode(decoded);
          setSegName(name);
          setSegLen(bytes.length);
        }}
      >
        {bytes.map((byte, i) => (
          <div
            key={i}
            className="p-3 hover:bg-ebony-500 rounded font-semibold cursor-default text-lg text-indigo-400"
          >
            {byte.toString(16).padStart(2, '0')}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="w-4/5 space-y-6">
        <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
          Packets
        </h1>
        <p className="text-2xl text-ebony-50 w-96">
          Betrachtung von Datenpaketen.
        </p>
        <p className="text-justify w-2/3 pb-20">
          Ein Datenpaket oder einfach „Paket“ ist in der Datenverarbeitung eine
          der Bezeichnungen für in sich geschlossene Dateneinheiten, die ein
          Sender oder ein sendender Prozess einem Empfänger sendet. Das
          OSI-Schichtenmodell ist für solche Pakete kaum sinnvoll, da 4 von 7
          OSI-Schichten (Anwendungsschicht, Darstellungsschicht,
          Sitzungsschicht, Transportschicht und ) hier belanglos sind und nicht
          implementiert werden.
        </p>
        <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y p-4 text-white flex items-end">
          <h1 className="text-2xl font-semibold transition">
            Dekodiert: {segCode} <br />
            Segment: {segName} <br />
            Länge: {segLen}
          </h1>
        </div>
        <div className="flex flex-col space-y-4 text-lg font-semibold pb-20 font-mono">
          {'< Buffer '}
          <DisplayBytes
            bytes={[
              0x18, 0x00, 0x00, 0x00, 0x60, 0x03, 0x5b, 0x10, 0x00, 0x37, 0x06,
              0x80,
            ]}
            name="Header"
          />

          <DisplayBytes
            bytes={[
              // Source address
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x01,
            ]}
            name="Source address"
          />

          <DisplayBytes
            bytes={[
              // Destination address
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x01,
            ]}
            name="Destination address"
          />

          <DisplayBytes
            bytes={[
              // Ports, SEQ, ACK, etc.
              0x0b, 0xb9, 0xd9, 0x1d, 0xca, 0x33, 0x2e, 0x20, 0x0b, 0x9c, 0xcc,
              0xdf, 0x50, 0x18, 0x27, 0xf6, 0x6e, 0xdb, 0x00, 0x00,
            ]}
            name="Ports, SEQ, ACK, etc."
          />

          <DisplayBytes
            bytes={[
              // Data
              0x81, 0x21, 0x34, 0x32, 0x5b, 0x22, 0x72, 0x65, 0x63, 0x65, 0x69,
              0x76, 0x65, 0x22, 0x2c, 0x22, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x6d,
              0x65, 0x20, 0x73, 0x6f, 0x6d, 0x65, 0x20, 0x74, 0x69, 0x6d, 0x65,
              0x22, 0x5d,
            ]}
            name="Data"
          />

          {' >'}
        </div>
      </div>
    </>
  );
}

function SSL() {
  function Paragraph({ children }) {
    return <p className="text-justify w-2/3 pb-20">{children}</p>;
  }

  function Heading({ children }) {
    return (
      <h1 className="text-3xl font-bold text-ebony-50 tracking-tight">
        {children}
      </h1>
    );
  }

  function Code({ children }) {
    return (
      <div className="p-5 bg-ebony-600 font-mono rounded-lg my-10 text-indigo-300">
        {children}
      </div>
    );
  }
  return (
    <div className="w-4/5 space-y-3 bg-no-repeat">
      <Heading>Einführung</Heading>
      <Paragraph>
        Es ist ebenso wichtig, dass wir ein SSL-Zertifikat für dieselbe
        erhalten, damit die Benutzer der Website vertrauen und die Meldung
        "Nicht sicher" in der Adressleiste entfernt wird.
      </Paragraph>
      <Heading>Voraussetzungen</Heading>
      <Paragraph>
        Um diesem Artikel zu folgen, ist es hilfreich, die folgenden
        Voraussetzungen zu haben:
        <ul className="my-3 pl-3">
          <li>- Node.js installiert.</li>
          <li>- Postman installiert.</li>
          <li>
            - Das Betriebssystem kann entweder Windows mit Cygwin oder ein
            Linux-basiertes Betriebssystem sein.
          </li>
          <li>- Kenntnisse von Linux bash Befehlen, Node.js und Express.</li>
          <li>- Ein funktionierender Webbrowser ist installiert.</li>
          <li>- Ein Texteditor - VS Code.</li>
        </ul>
      </Paragraph>
      <Heading>Webseite</Heading>
      <Paragraph>
        Erstellen Sie ein Zertifikat Signieren Sie ein SSL-Zertifikat für
        localhost Entwickeln Sie einen Server mit Node.js, der mit einem
        localhost SSL-Zertifikat betrieben wird Konfigurieren Sie den
        Firefox-Webbrowser und den Postman-API-Client so, dass sie Zertifikate
        zulassen, die wir als CA signiert haben Greifen Sie mit HTTPS sicher vom
        Browser oder API-Client auf den localhost zu
      </Paragraph>
      <Heading>Schritt 1 Erzeugen eines CA-Zertifikats</Heading>
      <Paragraph>
        SSL-Zertifikate werden in der Regel von Drittunternehmen unterzeichnet,
        die als Zertifizierungsstellen (CA) bekannt sind. Sie sind
        vertrauenswürdige Aussteller im Internet und prüfen vor der Ausstellung
        eines Zertifikats, ob die Website das tut, was sie tun soll. Es gibt
        jedoch keine Zertifizierungsstelle, die ein Zertifikat für localhost
        ausstellt, einfach weil localhost niemandem gehört. In unserem Fall
        werden wir das Zertifikat genau so signieren, wie es die
        Zertifizierungsstelle tut. Der erste Schritt besteht darin, mit den
        folgenden Befehlen ein Root-CA-Zertifikat zu erzeugen:
        <Code>
          $ mkdir cert <br />
          $ cd cert <br />
          $ mkdir CA <br />
          $ cd CA <br />$ openssl genrsa -out CA.key -des3 2048
        </Code>
        Die obigen Befehle erzeugen einen privaten Schlüssel und verlangen eine
        einfache Passphrase für den Schlüssel. Der Benutzer gibt die Passphrase
        ein und gibt sie zur Bestätigung noch einmal ein. Als Nächstes erzeugen
        wir mit dem erzeugten Schlüssel ein Root-CA-Zertifikat, das in unserem
        Fall zehn Jahre lang gültig ist. Die Passphrase für den Schlüssel und
        die Zertifikatsinformationen werden abgefragt. Der Benutzer kann die
        gewünschten Zertifikatsinformationen eingeben oder sie als Standard
        belassen. Führen Sie den folgenden Befehl aus, um das zu erreichen, was
        wir oben besprochen haben:
        <Code>
          $ openssl req -x509 -sha256 -new -nodes -days 3650 -key CA.key -out
          CA.pem
        </Code>
        In unserem cert/CA-Ordner befinden sich jetzt zwei Dateien, CA.key und
        CA.pem.
      </Paragraph>
      <Heading>Schritt 2: Erzeugen eines Zertifikats</Heading>
      <Paragraph>
        Nun haben wir den CA-Schlüssel und das CA-Zertifikat erstellt. Da wir
        bereits eine CA erstellt haben, ist es möglich, SSL-Zertifikate zu
        signieren. Als nächstes erstellen Sie im cert/CA-Verzeichnis ein neues
        Verzeichnis, localhost. Innerhalb von localhost erstellen Sie eine neue
        Datei, localhost.ext. Die Informationen, die in das signierte
        SSL-Zertifikat geschrieben werden müssen, sind in dieser Datei
        localhost.ext enthalten. Die Datei wird wie folgt aussehen: Beachten
        Sie, dass das Zertifikat sowohl für localhost als auch für 127.0.0.1
        funktionieren wird. Sie können der Datei weitere Domänen oder
        IP-Adressen hinzufügen, aber stellen Sie sicher, dass Sie die Datei
        /etc/hosts so bearbeiten, dass diese Domänen auf den lokalen Rechner
        (127.0.0.1) zeigen. Als Nächstes müssen Sie einen Schlüssel erzeugen und
        mit dem Schlüssel eine CSR (Certificate Signing Request) mit dem
        folgenden Befehl erstellen. Der Befehl generiert den privaten Schlüssel
        von localhost, und die Passphrase wird für den Schlüssel angefordert,
        und der Benutzer wird erneut aufgefordert, sie zu bestätigen. Als
        Nächstes wird eine CSR mit dem Schlüssel erzeugt und dann wird die oben
        erstellte Passphrase abgefragt. Alle anderen abgefragten Details können
        als Standard belassen oder eingegeben werden. Beachten Sie das
        geforderte Challenge-Passwort. Sie können alles eingeben. Mit dieser CSR
        können wir nun die Zertifizierungsstelle auffordern, ein Zertifikat zu
        signieren (siehe unten). Beachten Sie, dass die Pfade für die Dateien
        CA.key und CA.pem davon abhängig sind, von wo aus der Benutzer die
        Befehle ausführt. In diesem Fall werden die folgenden Befehle von
        /cert/CA/localhost aus ausgeführt. (alles in eine Zeile) Dieser Befehl
        nimmt den CSR (localhost.csr), das CA-Zertifikat (CA.pem und CA.key) und
        die Zertifikatserweiterungsdatei (localhost.ext) auf. Diese Eingaben
        erzeugen eine Zertifikatsdatei localhost.crt, die zehn Jahre lang gültig
        ist. Der Server benötigt die Zertifikatsdatei localhost.crt und den
        entschlüsselten Schlüssel, da unser localhost.key in verschlüsselter
        Form vorliegt. Wir müssen die Datei localhost.key entschlüsseln und
        ebenfalls wie unten beschrieben speichern:
      </Paragraph>
      <Heading>Schritt 3: Erstellen eines Node.js Express-Servers</Heading>
      <Paragraph>
        Um zu testen, ob die obigen Befehle wie erwartet funktionieren, müssen
        wir einen Node.js-Express-Server erstellen, der eine Erfolgsmeldung
        ausgibt. Wir kehren zu unserem cert-Verzeichnis zurück, initialisieren
        ein Node.js-Projekt und fügen die Express- und HTTPS-Pakete mit den
        folgenden Befehlen hinzu: Bearbeiten Sie dann die Datei index.js wie
        folgt: Starten Sie den Server mit dem unten stehenden Befehl: Eine
        Erfolgsmeldung: Server is Listening on https://localhost:3000 wird auf
        der Konsole angezeigt.{' '}
      </Paragraph>
      <Heading>Schritt 4: Test in einem Browser und API-Client</Heading>

      <Paragraph>
        Jetzt, da unser Server unser SSL bereitstellt, können wir unseren
        https://localhost:3000 Link in unserem Browser wie unten gezeigt testen:
        firefox not secure Wir sind nah dran, aber noch nicht fertig. Selbst
        nachdem wir unseren localhost mit SSL bedient und das signierte
        Zertifikat geprüft haben, würde unser Browser der Zertifizierungsstelle,
        die dieses Zertifikat signiert hat, nicht vertrauen, was korrekt ist;
        uns als Zertifizierungsstelle kann nicht vertraut werden. Um dies zu
        beheben, testen wir zunächst unseren Link mit Postman wie unten
        beschrieben: Wie oben zu sehen ist, kann das SSL-Zertifikat nicht
        verifiziert werden.{' '}
      </Paragraph>
      <Heading>Schritt 5: CA-Zertifikat in den Browser importieren</Heading>
      <Paragraph>
        Damit der Browser dem von uns erstellten CA-Zertifikat vertrauen kann,
        muss das Zertifikat importiert werden. Öffnen Sie in Firefox die
        Optionen, navigieren Sie zu Datenschutz und Sicherheit und klicken Sie
        wie unten gezeigt auf Zertifikate anzeigen: firefox privacy settings
        Klicken Sie dann auf Importieren und wählen Sie die CA.pem aus.
        Aktivieren Sie das Kontrollkästchen, um der soeben importierten CA zu
        vertrauen, und klicken Sie dann auf Ok. Als Nächstes werden wir es in
        Firefox testen, wie unten gezeigt: firefox-secure Der Browser ist nun in
        Ordnung, und er vertraut unserer Zertifizierungsstelle und dem
        Zertifikat.
      </Paragraph>
      <Heading>Schritt 6: Konfigurieren und Testen des API-Clients</Heading>
      <Paragraph>
        {' '}
        Der Prozess der Konfiguration des API-Clients ist derselbe wie der des
        Browsers, mit dem Unterschied, dass man die Zertifikatsüberprüfung
        deaktivieren muss. Stellen Sie in den Postman-Einstellungen sicher, dass
        die SSL-Zertifikatsüberprüfung ausgeschaltet ist. postman ssl off Dann
        senden wir die Anfrage erneut in Postman, und die Ergebnisse werden
        sein: postman success Wir konnten eine 200 OK-Meldung erhalten, was in
        diesem Stadium gut ist. Das Problem ist jedoch, dass wir immer noch eine
        rote Sicherheitswarnung haben, weil unser SSL-Zertifikat deaktiviert
        ist. Die Warnung sieht im Detail wie folgt aus: (Bild ist hier
        beschädigt) Um dieses Problem zu lösen, können wir unsere CA zu Postman
        hinzufügen. Stellen Sie in den Postman-Einstellungen sicher, dass
        CA-Zertifikate aktiviert sind, und wählen Sie die Datei CA.pem aus.
        Führen Sie dann die Anfrage wie unten gezeigt erneut aus; dieses Mal
        erhalten wir eine sichere 200 OK-Meldung. postman success cert{' '}
      </Paragraph>
      <Heading>Schlussfolgerung</Heading>
      <Paragraph>
        In dieser Anleitung haben wir gesehen, dass es möglich ist, localhost
        mit SSL auszuliefern. Mit dieser Anleitung konnten wir die
        Zertifizierungsstelle einrichten und das SSL-Zertifikat damit signieren.
        Wir haben die Einstellungen des Browsers und des API-Clients so
        geändert, dass sie das Zertifikat akzeptieren. Beachten Sie, dass es nie
        ratsam ist, Zertifikate unbedacht zur Zertifikatsliste hinzuzufügen.
        Böswillige Benutzer geben sich überall als Zertifizierungsstelle aus und
        bringen die Benutzer dazu, ihre Websites als authentisch zu akzeptieren,
        was zu einer ernsthaften Sicherheitsverletzung führt. Das Verfahren kann
        Entwicklern helfen, ihre Websites auf lokalen Servern oder
        weitergeleiteten Ports zu hosten, um ihren Besuchern zu versichern, dass
        die Website sicher ist.
      </Paragraph>
    </div>
  );
}
