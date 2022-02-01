import React, { useEffect, useState } from 'react';
import { Code, Heading, Paragraph } from '../pages/Docs';
import ImageBrowserWarning from '../img/firefox-warning-self-signed.png';
import { dracula } from 'react-json-prettify/dist/themes';
import JSONPretty from 'react-json-prettify';
const keypair = require('keypair');

export function SSL() {
  const [keyLoading, setKeyLoading] = useState(false);
  const [keys, setKeys] = useState(false);

  function handleGenerate() {
    setKeyLoading(true);
  }

  useEffect(() => {
    if (keyLoading) {
      setKeys(keypair());
    }
  }, [keyLoading]);

  useEffect(() => {
    if (keys !== false) {
      setKeyLoading(false);
    }
  }, [keys]);

  return (
    <div className="w-4/5 space-y-3 bg-no-repeat">
      <Heading main sub>
        SSL Zertifikat
      </Heading>
      <Heading sub>
        Für eine HTTPS Verschlüsselung brauchen wir ein SSL/TLS Zertifikat. Im
        folgenden Artikel erklären wir euch die Erstellung eines
        selbst-signierten Zertifikats.
      </Heading>
      <div
        className={`overflow-hidden bg-cover bg-no-repeat w-full rounded-xl bg-card-2`}
        style={{ height: 500 }}
      />
      <Heading>Voraussetzungen</Heading>
      <Paragraph>
        Um diesem Artikel zu folgen, ist es hilfreich, die folgenden
        Voraussetzungen zu haben:
        <ul className="my-3 pl-3 list-outside list-disc">
          <li>Node.js installiert.</li>
          <li>Postman installiert.</li>
          <li>
            Das Betriebssystem kann entweder Windows mit Cygwin oder ein
            Linux-basiertes Betriebssystem sein.
          </li>
          <li>Kenntnisse von Linux bash Befehlen, Node.js und Express.</li>
          <li>Ein funktionierender Webbrowser ist installiert.</li>
          <li>Ein Texteditor oder eine IDE.</li>
        </ul>
      </Paragraph>
      <Heading>Webseite</Heading>
      <Paragraph>
        <ul className="my-3 pl-3 list-outside list-decimal">
          <li>Erstellen Sie ein Zertifikat</li>
          <li>Signieren Sie ein SSL-Zertifikat für localhost</li>
          <li>
            Entwickeln Sie einen Server mit Node.js, der mit einem localhost
            SSL-Zertifikat betrieben wird
          </li>
          <li>
            Konfigurieren Sie den Firefox-Webbrowser und den Postman-API-Client
            so, dass sie Zertifikate zulassen, die wir als CA signiert haben
          </li>
          <li>
            Greifen Sie mit HTTPS sicher vom Browser oder API-Client auf den
            localhost zu
          </li>
        </ul>
      </Paragraph>
      <Heading>Schritt 1: Erzeugen eines CA-Zertifikats</Heading>
      <Paragraph>
        SSL-Zertifikate werden in der Regel von Drittunternehmen unterzeichnet,
        die als Zertifizierungsstellen (CA) bekannt sind. Sie sind
        vertrauenswürdige Aussteller im Internet und prüfen vor der Ausstellung
        eines Zertifikats, ob die Website das tut, was sie tun soll.
      </Paragraph>
      <Paragraph>
        Es gibt jedoch keine Zertifizierungsstelle, die ein Zertifikat für
        localhost ausstellt, einfach weil localhost niemandem gehört. In unserem
        Fall werden wir das Zertifikat genau so signieren, wie es die
        Zertifizierungsstelle tut.
      </Paragraph>
      <Paragraph>
        Der erste Schritt besteht darin, mit den folgenden Befehlen ein
        Root-CA-Zertifikat zu erzeugen:
        <Code>
          $ mkdir cert <br />
          $ cd cert <br />
          $ mkdir CA <br />
          $ cd CA <br />$ openssl genrsa -out CA.key -des3 2048
        </Code>
        Die obigen Befehle erzeugen einen privaten Schlüssel und verlangen eine
        einfache Passphrase für den Schlüssel. Der Benutzer gibt die Passphrase
        ein und gibt sie zur Bestätigung noch einmal ein.
      </Paragraph>
      <Paragraph>
        Als Nächstes erzeugen wir mit dem erzeugten Schlüssel ein
        Root-CA-Zertifikat, das in unserem Fall zehn Jahre lang gültig ist. Die
        Passphrase für den Schlüssel und die Zertifikatsinformationen werden
        abgefragt. Der Benutzer kann die gewünschten Zertifikatsinformationen
        eingeben oder sie als Standard belassen.
      </Paragraph>
      <Paragraph>
        Führen Sie den folgenden Befehl aus, um das zu erreichen, was wir oben
        besprochen haben:
        <Code>
          $ openssl req -x509 -sha256 -new -nodes -days 3650 -key CA.key -out
          CA.pem
        </Code>
        In unserem cert/CA-Ordner befinden sich jetzt zwei Dateien, CA.key und
        CA.pem.
      </Paragraph>
      <Paragraph>
        <button
          className="w-full p-4 flex items-center transition justify-center text-xl hover:opacity-100 opacity-80 bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y rounded-full"
          onClick={handleGenerate}
        >
          <span>Schlüssel generieren</span>
        </button>
        <div className="h-10 flex items-center justify-center px-10">
          {keyLoading && (
            <span className="animate-sping">
              <IconLoading />
            </span>
          )}
        </div>
        {keys && (
          <div className="my-10">
            <JSONPretty json={keys} theme={dracula} />
          </div>
        )}
      </Paragraph>
      <Heading>Schritt 2: Erzeugen eines Zertifikats</Heading>
      <Paragraph>
        Nun haben wir den CA-Schlüssel und das CA-Zertifikat erstellt. Da wir
        bereits eine CA erstellt haben, ist es möglich, SSL-Zertifikate zu
        signieren.
      </Paragraph>
      <Paragraph>
        Als nächstes erstellen Sie im cert/CA-Verzeichnis ein neues Verzeichnis,
        localhost. Innerhalb von localhost erstellen Sie eine neue Datei,
        localhost.ext.
        <Code>
          $ mkdir localhost <br />
          $ cd localhost <br />
          $ touch localhost.ext <br />
        </Code>
      </Paragraph>
      <Paragraph>
        Die Informationen, die in das signierte SSL-Zertifikat geschrieben
        werden müssen, sind in dieser Datei localhost.ext enthalten.
      </Paragraph>
      <Paragraph>
        Die Datei wird wie folgt aussehen:
        <Code>
          authorityKeyIdentifier = keyid, issuer <br />
          basicConstraints = CA:FALSE <br />
          keyUsage = digitalSignature, nonRepudiation, keyEncipherment,
          dataEncipherment <br />
          subjectAltName = @alt_names <br /> <br />
          [alt names] <br />
          DNS.1 = localhost <br />
          IP.1 = 127.0.0.1
        </Code>
      </Paragraph>
      <Paragraph>
        Beachten Sie, dass das Zertifikat sowohl für localhost als auch für
        127.0.0.1 funktionieren wird. Sie können der Datei weitere Domänen oder
        IP-Adressen hinzufügen, aber stellen Sie sicher, dass Sie die Datei
        /etc/hosts so bearbeiten, dass diese Domänen auf den lokalen Rechner
        (127.0.0.1) zeigen.
      </Paragraph>
      <Paragraph>
        Als Nächstes müssen Sie einen Schlüssel erzeugen und mit dem Schlüssel
        eine CSR (Certificate Signing Request) mit dem folgenden Befehl
        erstellen.
        <Code>$ openssl genrsa -out localhost.key -des3 2048</Code>
        Der Befehl generiert den privaten Schlüssel von localhost, und die
        Passphrase wird für den Schlüssel angefordert, und der Benutzer wird
        erneut aufgefordert, sie zu bestätigen.
      </Paragraph>
      <Paragraph>
        Als Nächstes wird eine CSR mit dem Schlüssel erzeugt und dann wird die
        oben erstellte Passphrase abgefragt. Alle anderen abgefragten Details
        können als Standard belassen oder eingegeben werden.
      </Paragraph>
      <Paragraph>
        Beachten Sie das geforderte Challenge-Passwort. Sie können alles
        eingeben.
        <Code>$ openssl req -new -key localhost.key -out localhost.csr</Code>
        Mit dieser CSR können wir nun die Zertifizierungsstelle auffordern, ein
        Zertifikat zu signieren (siehe unten). Beachten Sie, dass die Pfade für
        die Dateien CA.key und CA.pem davon abhängig sind, von wo aus der
        Benutzer die Befehle ausführt. In diesem Fall werden die folgenden
        Befehle von /cert/CA/localhost aus ausgeführt.
        <Code>
          $ openssl x509 -req -in localhost.csr ../CA.pem -CAkey ../CA.key
          -CAcreateserial -days 3650 -sha256 -extfile localhost.ext -out
          localhost.crt
        </Code>
        Dieser Befehl nimmt den CSR (localhost.csr), das CA-Zertifikat (CA.pem
        und CA.key) und die Zertifikatserweiterungsdatei (localhost.ext) auf.
        Diese Eingaben erzeugen eine Zertifikatsdatei localhost.crt, die zehn
        Jahre lang gültig ist.
      </Paragraph>
      <Paragraph>
        Der Server benötigt die Zertifikatsdatei localhost.crt und den
        entschlüsselten Schlüssel, da unser localhost.key in verschlüsselter
        Form vorliegt.
      </Paragraph>
      <Paragraph>
        Wir müssen die Datei localhost.key entschlüsseln und ebenfalls wie unten
        beschrieben speichern:
        <Code>
          $ openssl rsa -in localhost.key -out localhost.decrypted.key
        </Code>
      </Paragraph>
      <Heading>Schritt 3: Erstellen eines Node.js Express-Servers</Heading>
      <Paragraph>
        Um zu testen, ob die obigen Befehle wie erwartet funktionieren, müssen
        wir einen Node.js-Express-Server erstellen, der eine Erfolgsmeldung
        ausgibt.
      </Paragraph>
      <Paragraph>
        Wir kehren zu unserem cert-Verzeichnis zurück, initialisieren ein
        Node.js-Projekt und fügen die Express- und HTTPS-Pakete mit den
        folgenden Befehlen hinzu:
        <Code>
          $ npm init -y <br />
          $ npm i express https <br />$ touch index.js
        </Code>
        Bearbeiten Sie dann die Datei index.js wie folgt:
        <Code>
          const fs = require('fs'); <br />
          const key = fs.readFileSync('./CA/localhost/localhost.decrypted.key');
          <br />
          const cert = fs.readFileSync('./CA/localhost/localhost.crt');
          <br />
          <br />
          const expresss = require('express');
          <br />
          const app = express();
          <br />
          <br />
          app.get('/', (req, res, next) ={'>'} {'{'}
          <br />
          resizeBy.status(200).send('Hello world!');
          <br />
          {'}'});
          <br />
          <br />
          const https = require('https');
          <br />
          const server = https.createServer({'{'} keyLoading, cert {'}'}, app);
          <br />
          <br />
          const post = 3000;
          <br />
          server.listen(port, () ={'>'} {'{'}
          <br />
          console.log(`Server is listening on https://localhost:${'{'}port{'}'}
          `);
          <br />
          {'}'});
          <br />
        </Code>
        Starten Sie den Server mit dem unten stehenden Befehl:
        <Code>$ node index.js</Code>
        Eine Erfolgsmeldung: Server is Listening on https://localhost:3000 wird
        auf der Konsole angezeigt.
      </Paragraph>
      <Heading>Schritt 4: Test in einem Browser und API-Client</Heading>

      <Paragraph>
        Wir sind nah dran, aber noch nicht fertig. Selbst nachdem wir unseren
        localhost mit SSL bedient und das signierte Zertifikat geprüft haben,
        würde unser Browser der Zertifizierungsstelle, die dieses Zertifikat
        signiert hat, nicht vertrauen, was korrekt ist; uns als
        Zertifizierungsstelle kann nicht vertraut werden. Um dies zu beheben,
        testen wir zunächst unseren Link mit Postman wie unten beschrieben: Wie
        oben zu sehen ist, kann das SSL-Zertifikat nicht verifiziert werden.{' '}
        <figure className="my-10">
          <img src={ImageBrowserWarning} alt="" className="rounded-lg" />
          <figcaption>Firefox warnt vor selbstsignierte Zertifikate</figcaption>
        </figure>
      </Paragraph>
      <Heading>Schritt 5: CA-Zertifikat in den Browser importieren</Heading>
      <Paragraph>
        Damit der Browser dem von uns erstellten CA-Zertifikat vertrauen kann,
        muss das Zertifikat importiert werden. Öffnen Sie in Firefox die
        Optionen, navigieren Sie zu Datenschutz und Sicherheit und klicken Sie
        wie unten gezeigt auf Zertifikate anzeigen:
      </Paragraph>
      <Paragraph>
        Klicken Sie dann auf Importieren und wählen Sie die CA.pem aus.
        Aktivieren Sie das Kontrollkästchen, um der soeben importierten CA zu
        vertrauen, und klicken Sie dann auf Ok.
      </Paragraph>
      <Paragraph>
        Als Nächstes werden wir es in Firefox testen, wie unten gezeigt:
        firefox-secure Der Browser ist nun in Ordnung, und er vertraut unserer
        Zertifizierungsstelle und dem Zertifikat.
      </Paragraph>

      <Heading>Schlussfolgerung</Heading>
      <Paragraph>
        In dieser Anleitung haben wir gesehen, dass es möglich ist, localhost
        mit SSL auszuliefern. Mit dieser Anleitung konnten wir die
        Zertifizierungsstelle einrichten und das SSL-Zertifikat damit signieren.
        Wir haben die Einstellungen des Browsers und des API-Clients so
        geändert, dass sie das Zertifikat akzeptieren.
      </Paragraph>
      <Paragraph>
        Beachten Sie, dass es nie ratsam ist, Zertifikate unbedacht zur
        Zertifikatsliste hinzuzufügen. Böswillige Benutzer geben sich überall
        als Zertifizierungsstelle aus und bringen die Benutzer dazu, ihre
        Websites als authentisch zu akzeptieren, was zu einer ernsthaften
        Sicherheitsverletzung führt.
      </Paragraph>
      <Paragraph>
        Das Verfahren kann Entwicklern helfen, ihre Websites auf lokalen Servern
        oder weitergeleiteten Ports zu hosten, um ihren Besuchern zu versichern,
        dass die Website sicher ist.
      </Paragraph>
    </div>
  );
}

function IconLoading() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        fill="currentColor"
      />
    </svg>
  );
}
