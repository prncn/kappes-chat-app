## MITM React App

Eine React/Node App zur Demonstrierung von "Man in the Middle" Attacken durch ein Proxy Server. <br/>
Das Ziel der Demo ist es, MITM Angriffe zu testen und Mechanismen des Angriffs und 
des Schutzes zu verstehen. Zudem werdet ihr testen können, inwiefern sich eine HTTPS 
Verschlüsselung auf die MITM-Angriffe des Proxy-Servers auswirkt. <br/>
Unsere App ermöglicht es, beispielsweise Daten unseres integrierten Chat-Messengers durch die MITM Konsole
abzufangen und zu manipulieren. <br/>
Diese App enthält einen Kurs zur thematischen Einführung über relavante Themen (Docs)
und eine interaktive Pseudo-Bash Konsole zur Manipulation von Client Daten (MITM Console).

## Installation

Ihr habt zwei Optionen die App zu verwenden. Entweder innerhalb der mitgegebenen virtuellen
Maschine (empfohlen), oder direkt auf euerem Host System.

### VM Image Option

1. Im Projekt Upload befindet sich ein virtuelles Windows Image `KappesProjekt.ova`.
2. Importiert die `.ova` Datei in Virtual Box. <br/>
![image](https://i.imgur.com/7ARoX1y.gif)
3. Startet die VM. Benutzt beim Login das Passwort `0202`. Fertig.


### Host Option

1. Ladet folgende Software herunter:
   <br/>a. [NodeJS LTS](https://nodejs.org/en/download/)
   <br/>b. [Ncap for Windows](https://npcap.com/#download)

2. (Windows) Ändert eure Host Datei folgendermaßen ab: <br/>
   Unter `C:\Windows\System32\drivers\etc` findet ihr die Datei `hosts`.
  
   In dieser fügt ihr folgende Zeile hinzu (ohne Raute Symbol):
   ```
   127.0.0.1 platin.demo.com
   ```

3. Richtet eure Proxy folgendermaßen ein:
   Drückt die Windows Taste und sucht nach "Proxyeinstellungen ändern".
   Schaltet die Option "Einstellung automatisch erkennen" aus.
   Fügt `127.0.0.1` und Port `3002` als Proxy Server in euerem Host System hinzu.
   Achtet darauf, Außnahmen für die Proxy einzustellen. Schreibt in das Feld darunter 
   ```
   wss://*;ws://*;*zoom*;*google*;*paypal*;*streamable*;
   ```
   ![image](https://i.imgur.com/pG5mqEP.gif)

4. Entpackt den komprimierten Ordner "TeamPlatinDemoOption2.rar" 
5. Installiert [Wireshark](https://www.wireshark.org/download.html) (Packet Sniffing Tool) und [Burp](https://portswigger.net/burp/releases/professional-community-2021-12-1?requestededition=community) (MITM Tool). Beide Features, Paket Sniffing und MITM Attacken, sind auch in unserer eigenen App verfügbar.
6. Falls der Launcher nicht funktioniert, navigiert zum "mitm-demo-app" Ordner und führt den Command "npm run demo"
   als Command Line (Eingabeaufforderung) oder PowerShell (Im "mitm-demo-app" Ordner
   mit Shift+Rechtsklick die Option "PowerShell hier öffnen") aus.
  
### FAQ
```
Ist es normal, dass mein Browser vor der App warnt, während der Proxy Server aktiv ist?
```
Ja, da unsere Demo ein selbst-signiertes Zertifikat verwendet, weist der Browser auf mögliche Gefahren auf.

```
Die App lädt nicht, wieso?
```
Unter Umständen, müsst ihr das Browserfenster oder das Skript neu starten. Die HTTPS Version der Demo
braucht etwa eine halbe Minute zum starten.

### *Hinweise

Alle Schritte, die hier ausgeführt worden sind, insbesondere die Proxyeinstellung sowie die Änderung der Host Datei, sollten
nach dem Testen der Demo wieder rückgängig gemacht werden.
