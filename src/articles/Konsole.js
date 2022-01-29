import React from 'react';
import { Heading, Paragraph } from '../pages/Docs';
import Typical from 'react-typical';

export function Konsole() {
  return (
    <div className="w-4/5 space-y-6">
      <Heading main>Die Konsole</Heading>
      <Heading sub>Guide zur Nutzung der Konsole </Heading>
      <Paragraph>
        Bei Social Engineering wird das Opfer verführt, Links mit infizierten
        Seiten zu öffnen und vertrauliche Informationen wie Anmeldedaten oder
        Kreditkartennummern preiszugeben. Wenn es um eine Phishing-Seite geht,
        ist es nicht einfach zu erkennen, ob es sich um eine Phishing-Seite
        handelt oder nicht.
      </Paragraph>
      <FauxConsole />
    </div>
  );

  function FauxConsole() {
    return (
      <div className="h-1/2 xl:w-1/2 w-2/3 border-white rounded-lg border relative font-mono overflow-y-auto overflow-x-hidden">
        <div className="space-x-2 absolute left-3 top-3">
          <div className="inline-block rounded-full bg-green-700 w-3 h-3"></div>
          <div className="inline-block rounded-full bg-green-600 w-3 h-3"></div>
          <div className="inline-block rounded-full bg-green-500 w-3 h-3"></div>
        </div>
        <div
          className="w-full absolute bottom-0 border-white p-4 inline-flex flex-col text-lg"
          style={{ height: '70%' }}
        >
          <Typical
            steps={['Start (pretend) hacking...', 5000]}
            loop={Infinity}
            className="mx-4"
          />
        </div>
      </div>
    );
  }
}
