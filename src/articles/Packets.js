import React, { useState } from 'react';
import { Heading, Paragraph } from '../pages/Docs';

export function Packets() {
  const [segCode, setSegCode] = useState('');
  const [segName, setSegName] = useState('');
  const [segLen, setSegLen] = useState(0);
  const [bufferMessage, setBufferMessage] = useState('call me sometime');
  const [hoverIndex, setHoverIndex] = useState(0);

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
        className="flex flex-wrap rounded-lg hover:opacity-100 opacity-60 transition"
        onMouseEnter={() => {
          setSegCode(decoded);
          setSegName(name);
          setSegLen(bytes.length);
        }}
      >
        {bytes.map((byte, i) => (
          <div
            key={i}
            className="p-3 rounded font-semibold cursor-default text-lg text-indigo-400 hover:text-green-300 mx-2"
            onMouseEnter={() => setHoverIndex(i)}
          >
            {byte.toString(16).padStart(2, '0')}
          </div>
        ))}
      </div>
    );
  }

  function bufferToArray(str) {
    let arrBuff = [];
    const padStr = `.!42["receive","${str}"]`;
    for (const byte of Buffer.from(padStr, 'ascii')) {
      arrBuff.push(byte);
    }

    return arrBuff;
  }

  return (
    <>
      <div className="w-4/5 space-y-6">
        <Heading main sub>
          Packets
        </Heading>
        <Heading sub>Betrachtung von Datenpaketen.</Heading>
        <Paragraph>
          Ein Datenpaket oder einfach „Paket“ ist in der Datenverarbeitung eine
          der Bezeichnungen für in sich geschlossene Dateneinheiten, die ein
          Sender oder ein sendender Prozess einem Empfänger sendet. Das
          OSI-Schichtenmodell ist für solche Pakete kaum sinnvoll, da 4 von 7
          OSI-Schichten (Anwendungsschicht, Darstellungsschicht,
          Sitzungsschicht, Transportschicht und ) hier belanglos sind und nicht
          implementiert werden.
        </Paragraph>
        <Paragraph>
          Platzier die Maus über die Segmente des Buffers unten, um zu sehen,
          welches Segment des Datenpaket es repräsentiert. Im Input unten kannst
          du deine eigene Nachricht hereinschreiben, um das Paket zu
          modifizieren.
        </Paragraph>
        <div className="pb-20" />
        <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y p-4 flex items-end">
          <div className="text-2xl font-mono transition">
            Dekodiert: {segCode} <br />
            Segment: {segName} <br />
            Länge: {segLen} <br />
            Current Char:
            <div className="text-green-300 inline-block px-2">
              {segCode[hoverIndex]}
            </div>
          </div>
        </div>
        <div>
          <input
            autoComplete={false}
            spellCheck={false}
            className="p-3 rounded focus:outline-none border bg-transparent"
            value={bufferMessage}
            onChange={(event) => setBufferMessage(event.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4 text-lg font-semibold font-mono rounded-lg py-10">
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
            // bytes={[
            //   // Data
            //   0x81, 0x21, 0x34, 0x32, 0x5b, 0x22, 0x72, 0x65, 0x63, 0x65, 0x69,
            //   0x76, 0x65, 0x22, 0x2c, 0x22, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x6d,
            //   0x65, 0x20, 0x73, 0x6f, 0x6d, 0x65, 0x20, 0x74, 0x69, 0x6d, 0x65,
            //   0x22, 0x5d,
            // ]}
            bytes={bufferToArray(bufferMessage)}
            name="Data"
          />
        </div>
      </div>
    </>
  );
}
