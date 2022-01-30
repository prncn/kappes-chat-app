import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Burp } from '../articles/Burp';
import { Konsole } from '../articles/Konsole';
import { Packets } from '../articles/Packets';
import { Schutzmechanismen } from '../articles/Schutzmechanismen';
import { Spoofing } from '../articles/Spoofing';
import { SSL } from '../articles/SSL';
import { Wireshark } from '../articles/Wireshark';
import Switch from 'react-switch';
import UniLogoLight from '../img/1200px-Frankfurt_University_of_Applied_Sciences_logo_notype.png';
import UniLogoDark from '../img/1200px-Frankfurt_University_of_Applied_Sciences_logo_black_notype.png';

export function Paragraph({ children, short }) {
  return (
    <p className={`text-justify pb-5 ${short ? 'w-1/3' : 'w-2/3'}`}>
      {children}
    </p>
  );
}

export function Heading({ children, main, sub }) {
  return (
    <h1
      className={`${main ? 'text-6xl pt-10 font-bold' : 'py-0'} ${
        sub ? 'pb-0 font-thin text-lg' : 'pt-8 pb-0 font-bold text-xl'
      } tracking-tight max-w-xl`}
    >
      {children}
    </h1>
  );
}

export function Code({ children }) {
  return (
    <div className="p-5 bg-ebony-600 font-mono rounded-lg my-10 text-indigo-300">
      {children}
    </div>
  );
}

export function Docs() {
  const params = useParams();
  const currentPage = params?.page;
  const [lightMode, setLightMode] = useState(false);

  class chapter {
    constructor(title, pages) {
      this.title = title;
      this.pages = pages;
    }
  }
  const chapters = [
    new chapter('Tools', ['Wireshark', 'Burp']),
    new chapter('Angriffe', ['Packets', 'MITM Konsole', 'Spoofing']),
    new chapter('Schutz', ['Schutzmechanismen', 'SSL']),
  ];

  return (
    <div
      className={`h-screen flex transition-all ${
        lightMode ? 'bg-ebony-50 text-black' : 'bg-ebony-700 text-ebony-50'
      }`}
    >
      <Helmet>
        <title>Docs | Platin Demo</title>
      </Helmet>
      <a
        href="https://www.frankfurt-university.de/"
        className="absolute bottom-10 right-16"
      >
        <img src={lightMode ? UniLogoDark : UniLogoLight} alt="" width={100} />
      </a>
      <div className="h-full w-1/4 flex flex-col pl-20">
        <div className="font-semibold">
          <Link to="/">
            <div className="font-bold pt-10">Home</div>
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
                      isActive ? 'text-yellow-400' : 'text-ebony-400'
                    } hover:text-ebony-100`
                  }
                >
                  <div className="my-2">{page}</div>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-auto py-4 flex space-x-2 font-semibold text-sm items-center">
          <span className="opacity-80">Licht schalten</span>
          <Switch
            checked={lightMode}
            onChange={setLightMode}
            onColor="#c7d2fe"
            onHandleColor="#6366f1"
            uncheckedIcon={false}
            checkedIcon={false}
            height={25}
            width={48}
          />
        </div>
      </div>
      {!lightMode && (
        <div
          className={`h-full w-1 bg-gradient-to-t from-ebony-700 via-ebony-600 to-ebony-700`}
        />
      )}
      <div className="p-10 w-full flex items-center flex-col overflow-y-auto py-20">
        {
          {
            undefined: <Intro />,
            wireshark: <Wireshark />,
            burp: <Burp />,
            packets: <Packets />,
            ssl: <SSL />,
            schutzmechanismen: (
              <Schutzmechanismen
                lightMode={lightMode}
                setLightMode={setLightMode}
              />
            ),
            'mitm konsole': <Konsole />,
            spoofing: <Spoofing />,
          }[currentPage]
        }
      </div>
    </div>
  );

  function Intro() {
    return (
      <>
        <div className="w-4/5 space-y-6">
          <h1 className="text-6xl font-bold tracking-tight">
            Einführung zur Demo
          </h1>
          <p className="text-2xl w-96">Dokumentation zu den Tools.</p>
          <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-indigo-300 to-pink-500 animate-gradient-y p-4 flex items-end">
            <h1 className="text-2xl font-semibold">Getting Started</h1>
          </div>
          <p>
            Auf diesen Seiten findet ihr Guides und Erklärungen zu der Nutzung
            und den Hintergründen der Tools. Wählt einen Abschnitt auf der
            linken Navigation.
          </p>
        </div>
      </>
    );
  }
}
