import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { Link, NavLink, useParams } from "react-router-dom";

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
    new chapter("Tools", ["Wireshark", "Burp", "Ettercap"]),
    new chapter("Security", ["Packets", "Proxy Server", "Pinging", "Sockets"]),
    new chapter("Verschlüsselung", ["SSL/TLS", "Zertifikate"]),
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
                      isActive ? "text-indigo-500" : "text-ebony-400"
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
          style={{ width: "43rem", height: "24rem" }}
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
          style={{ height: "43rem" }}
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
  const [segCode, setSegCode] = useState("");
  const [segName, setSegName] = useState("");
  const [segLen, setSegLen] = useState(0);

  function DisplayBytes({ bytes, name }) {
    function isASCII(str) {
      return /^[\x20-\x7F]*$/.test(str);
    }

    const decoded = Buffer.from(bytes)
      .toString()
      .split("")
      .map((c) => (isASCII(c) ? c : "."));

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
            {byte.toString(16).padStart(2, "0")}
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
          {"< Buffer "}
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

          {" >"}
        </div>
      </div>
    </>
  );
}
