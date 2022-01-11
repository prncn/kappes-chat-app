import React from "react";
import { Link } from "react-router-dom";

export function Docs() {
  class chapter {
    constructor(title, pages) {
      this.title = title;
      this.pages = pages;
    }
  }
  const chapters = [
    new chapter("getting stated", ["balb", "alb", "bla"]),
    new chapter("getting stated", ["balb", "alb", "bla"]),
    new chapter("getting stated", ["balb", "alb", "bla"]),
  ];

  return (
    <div className="h-screen flex bg-ebony-700 py-10">
      <div className="h-full w-1/4 flex flex-col items-center">
        <div className="text-white font-semibold space-y-3">
          <Link to="/">
            <div className="font-bold pt-10">Zurück</div>
          </Link>

          <div className="font-bold pt-10">Getting Started</div>
          <div className="text-ebony-400">Introduction</div>
          <div className="text-ebony-400">Examples</div>

          <div className="font-bold pt-10">API</div>
          <div className="text-ebony-400">Animation</div>
          <div className="text-ebony-400">Transition</div>
          <div className="text-ebony-400">Restoration</div>
          <div className="text-ebony-400">Transition</div>

          <div className="font-bold pt-10">Components</div>
          <div className="text-ebony-400">Movement</div>
          <div className="text-ebony-400">Builds</div>
        </div>
      </div>
      <div className="h-full w-1 bg-gradient-to-t from-ebony-700 via-ebony-600 to-ebony-700" />
      <div className="p-10 w-full flex items-center flex-col">
        <div className="w-4/5 space-y-6">
          <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
            Einführung zur Demo
          </h1>
          <p className="text-2xl text-ebony-50 w-96">
            Complete documentation of the library and code features.
          </p>
          <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y p-4 text-white flex items-end">
            <h1 className="text-2xl font-semibold">Getting Started</h1>
          </div>
        </div>
      </div>
      <p>
        WIRESHARK
        Überschrift: Nachrichten abfangen Als erste Angriffsmöglichkeit möchten
        wir die Nachrichten zwischen zwei Parteien anfangen und selber lesen.
        Das Abfangen solcher Nachrichten verletzt in der Informationssicherheit
        die Vertraulichkeit, da die Nachricht nun auch von Dritten gelesen
        werden kann. Zur Hilfe nehmen wir uns Wireshark, die wohl bekannteste
        Paket-Sniffer Software. Während die Software die ganze Zeit die
        Netzwerkverbindung abhört, fangen wir die Datenpakete, die in unserem
        Netzwerk verschickt werden, ab. Darunter auch die Pakete, die mittels
        unserer Chat-App verschickt werden.
      </p>
      <p>
        BURP
        Überschrift: Nachrichten modifizieren Wir haben bereits das Tool
        Wireshark kennengelernt und konnten die Nachrichten inspizieren. Im
        nächsten Schritt schauen wir uns das Modifizieren der Nachrichten an. Es
        gibt einige Tools, die uns das ermöglichen. Das Abändern von Nachrichten
        wird in der Informationssicherheit als Verletzung der Integrität
        betrachtet, da wir eine Datenänderung vornehmen. Wir fokussieren uns in
        diesem Beispiel auf “Burp Suite“. Mit diesem Tool können wir unseren
        HTTP- und HTTPS-Verkehr abfangen und so modifizieren, dass die von uns
        geschriebene Nachricht anstatt der ursprünglichen Nachricht an den
        Empfänger geschickt wird. Schauen wir uns den Angriff im Video genauer
        an.
      </p>
    </div>
  );
}
