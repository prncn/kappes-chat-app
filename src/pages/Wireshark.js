import React from 'react';
import ReactPlayer from 'react-player';

export function Wireshark() {
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
