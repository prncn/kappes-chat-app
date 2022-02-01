## MITM React App

Eine React/Node App zur Demonstrierung von "Man in the Middle" Attacken durch Proxys.
Diese App enthält einen Kurs zur thematischen Einführung über relavante Themen (Docs)
und eine interaktive Pseudo-Bash Konsole zur Manipulation von Client Daten (MITM Console).

## Installation

Ihr habt zwei Optionen die App zu verwenden. Entweder innerhalb der mitgegebenen virtuellen
Maschine (empfohlen), oder direkt auf euer Host System.

### VM Image Option

1. Im Ordner "Image Option", befindet sich ein virtuelles Windows Image.
2. Bindet die Image in Virtual Box ein.
3. Startet die VM. Fertig.

### Host Option

1. Ladet folgende Software herunter:
   <br/>a. [NodeJS LTS](https://nodejs.org/en/download/)
   <br/>b. (Nicht benötigt auf Linux oder macOS) [Ncap for Windows](https://npcap.com/#download)

2. (Windows) Ändert eure Host Datei folgendermaßen ab:
   Unter `C:\Windows\System32\drivers\etc` findet ihr die Datei `hosts`.

   In dieser fügt ihr folgende Zeile hinzu (ohne Raute Symbol):

   ```
   127.0.0.1 platin.demo.com
   ```

3. Richtet eure Proxy folgendermaßen ein:
   Fügt `127.0.0.1` und Port `3002` als Proxy Server in euer Host System hinzu.
   Achtet darauf möglichst viele Domaine zu ignorieren.

   ```
   127.0.0.1:3002
   ```

4. Ladet euch [Wireshark](https://www.wireshark.org/download.html) und [Burp](https://portswigger.net/burp/releases/professional-community-2021-12-1?requestededition=community) herunter.

5. Im Ordner "Host Option", startet das Bash Skript (Windows Command Line) oder führt den Command `npm run demo` im App Ordner aus. Fertig.

### FAQ

`Die App Seite lädt nicht sofort`
In manchen Fällen verzögert sich das Initialiseren der App. Die HTTPS App muss etwas länger laden,
als die HTTP Version. <br/>
Versucht einen Refresh des Browserfensters oder einen Neustart des Start Skripts.

`Ist es normal, dass mein Browser vor der App warnt?`
Ja, falls ihr die Proxy verwendet, wird ein selbst-signiertes Zertifikat verwendet für die App.
Ihr könnt diese Warnmeldung über das Zertifikat ignorieren.
