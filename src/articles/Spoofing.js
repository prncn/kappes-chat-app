import React from 'react';
import { Heading, Paragraph } from '../pages/Docs';

export function Spoofing() {
  return (
    <div className="w-4/5 space-y-6">
      <div
        className={`overflow-hidden bg-cover bg-no-repeat w-full rounded-xl bg-card-5`}
        style={{ height: 500 }}
      />
      <Heading main>Spoofing und Phishing</Heading>
      <Heading>Was ist Social Engineering?</Heading>
      <Paragraph>
        Bei Social Engineering wird das Opfer verführt, Links mit infizierten
        Seiten zu öffnen und vertrauliche Informationen wie Anmeldedaten oder
        Kreditkartennummern preiszugeben. Wenn es um eine Phishing-Seite geht,
        ist es nicht einfach zu erkennen, ob es sich um eine Phishing-Seite
        handelt oder nicht.
      </Paragraph>
      <Heading>Wie erfolgt unser Angriff?</Heading>
      <Paragraph>
        Für unseren Angriff haben wir zwei HTML Dateien verwendet. Die erste
        Datei wurde dafür benutzt, um die PayPal Phishing Seite darzustellen.
        Die zweite wurde für die Weiterleitung an unsere ChatApp verwendet. Zur
        Erstellung der PayPal Fake Seite geht man auf der Anmeldeseite von
        PayPal und dann rechtsklick, dort findet man die Option
        „Seitenquellentext anzeigen“. Es öffnet sich ein neues Fenster, wo man
        den Aufbau der Anmeldeseite in HTML Format sehen kann. Die ganzen
        Informationen kann man kopieren und in eine separate HTML Datei nach
        Wunsch ändern und anschließend speichern. In der HTML Datei haben wir
        nach „action“ gesucht und dort der Name der zweiten HTML Datei
        hinzugefügt. Wenn der User die Anmeldedaten eingibt und mit „Anmelden“
        bestätigt, dann erfolgt tatsächlich keine Anmeldung, sondern die zweite
        Datei wird geöffnet, um den User zu informieren, dass die Transaktion
        erfolgreich war.
      </Paragraph>
      <Paragraph>
        Mit Hilfe von Burp Anwendung könnten wir alle Chat Verläufe zwischen
        zwei Personen überwachen. Wir greifen mitten des Gesprächs an,
        modifizieren die Nachricht und schicken an die Person, die die Nachricht
        empfangen soll, einen Link, der nicht mit „https“ bezeichnet ist. Da
        diese Nachricht von seinem Bekannten kommt, zweifelt er/sie nicht an die
        Glaubwürdigkeit des Links, öffnet die Seite und macht die Transaktion.
      </Paragraph>
      <Heading>
        Worauf muss man achten und welche Maßnahmen können gegen Social
        Engineering Angriffe ergriffen werden?
      </Heading>
      <Paragraph>
        Wenn einen Link oder eine Datei dubios erscheint, sollte man kurz
        darüber nachdenken bevor man den anklickt, die Experten oder jemanden
        nachfragen, der mehr Erfahrung in der IT-Welt hat.
      </Paragraph>
      <Paragraph>
        Hat man aus Versehen auf einen Link geklickt und seine Anmeldedaten
        eingegeben, dann sollte man sofort das Passwort ändern und ein neues
        komplexeres Passwort vergeben.
      </Paragraph>
      <Heading>Was ist Spoofing?</Heading>
      <Paragraph>
        Spoofing kommt aus der englischen Sprache und bedeutet „täuschen“ oder
        „fälschen“. In der IT-Welt ist Spoofing ein Cyberverbrechen.
        Cyberkriminelle verwenden die verschiedenen Arten des Spoofings, um sich
        als eine vertrauenswürdige Person auszugeben. Sie nutzten verschiedene
        Methoden, um insbesondere an personenbezogene Daten zu gelangen. Die
        Angreifer können Spoofing auf einer technischen Ebene nutzen, z.B.
        DNS-Ebene (Domain Name System), IP-Adressen-Spoofing.
      </Paragraph>
      <Paragraph>
        Es gibt mehrere Arten des Spoofings wie E-Mail-Spoofing,
        Website-Spoofing, IP-Spoofing-Angriff etc.
      </Paragraph>
      <Heading>Wie funktioniert Spoofing?</Heading>
      <Paragraph>
        Das Ziel des Hackers ist zuerst das Vertrauen des Opfers zu gewinnen.
        Sie zielen oftmals darauf ab, ihre Opfer durch E-Mail oder Telefon
        persönliche Daten preiszugeben oder Finanztransaktionen durchzuführen.
        Die Hacker nutzten meistens E-Mail-Spoofing. Vor allem im Unternehmen
        fällt den Cyberkriminellen leichter an Daten zu kommen, da die meisten
        E-Mail kommen scheinbar von den Kollegen, Kunden oder Vorgesetzen. Die
        Angreifer manipulieren oft die Header-Informationen der E-Mail.
      </Paragraph>
      <Heading>Was ist der Unterschied zwischen Spoofing und Phishing?</Heading>
      <Paragraph>
        Beim Spoofing versuchen die Hacker eine falsche Identität vorzutäuschen,
        während bei Phishing versucht wird an vertrauliche sensible
        personenbezogene Daten zu gelangen.
      </Paragraph>
      <Heading>Abwehrmaßnahmen gegen Spoofing</Heading>
      <Paragraph>
        Jeder kann Opfer von Spoofing werden. Der beste Schutz vor Spoofing ist,
        sie schnellstmöglich zu erkennen. Wenn eine E-Mail verdächtig erscheint,
        es wird empfohlen die Absenderadresse zu prüfen. Im Zweifelsfall kann
        man den Absender persönlich anrufen, um zu prüfen, ob die eingegebenen
        Informationen richtig sein.
      </Paragraph>
    </div>
  );
}
