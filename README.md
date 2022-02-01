## MITM React App

Eine React/Node App zur Demonstrierung von "Man in the Middle" Attacken durch Proxys.
Diese App enthält einen Kurs zur thematischen Einführung über relavante Themen (Docs)
und eine interaktive Pseudo-Bash Konsole zur Manipulation von Client Daten (MITM Console).

## Installation

Ihr habt zwei Optionen die App zu verwenden. Entweder innerhalb der mitgegebenen virtuellen
Maschine (empfohlen), oder direkt auf euer Host System.

### VM Image Option

1. Im Ordner "Image Option", befindet sich ein virtuelles Windows Image.
2. Importiert die `.ova` Datei in Virtual Box.
![image](https://user-images.githubusercontent.com/65875722/152023935-98c743f2-ce36-4604-94a6-c561f9c7eadb.png)
4. Benutzt das Passwort `0202` und startet die VM. Fertig.

### Host Option

1. Ladet folgende Software herunter:
   <br/>a. [NodeJS LTS](https://nodejs.org/en/download/)
   <br/>b. (Falls Windows, bereits vorinstalliert auf Linux) [Ncap for Windows](https://npcap.com/#download)

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
   ![image](https://im7.ezgif.com/tmp/ezgif-7-8ee787675e.gif)

4. Im Ordner "Host Option", startet das PowerShell Skript. Fertig.
