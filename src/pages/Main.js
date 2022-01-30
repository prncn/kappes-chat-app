import '../index.css';
import ChatApp from './ChatApp';
import React from 'react';
import { ConsolePage } from './ConsolePage';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

export default function Main() {
  const topics = [
    { name: 'Konsole', link: '/mitmkonsole' },
    { name: 'Was ist SSL/TLS?', link: '/docs/ssl' },
    { name: 'Chat App', link: '/chatapp' },
    { name: 'Web Sockets', link: '/docs' },
    { name: 'Packets', link: '/docs/packets' },
    { name: 'Phishing Demo', link: '/paypal' },
  ];

  return (
    <div className="h-min-screen flex flex-col items-center bg-ebony-800">
      <div className="w-2/3">
        <p className="text-ebony-50 font-semibold lowercase mt-5 ml-1 cursor-default">
          Platin
        </p>
        <div className="flex flex-col justify-center w-2/3 mt-20 text-ebony-100 space-y-4">
          <h1 className="text-9xl font-bold lowercase text-yellow-50 tracking-tight">
            <div className="bg-gradient-to-r from-yellow-200 to-pink-700 text-transparent animate-gradient-y bg-clip-text">
              MITM <br />
              DEMO
            </div>
          </h1>
          <Typical
            steps={[
              'Erstellen und Validieren von Sicherheitsdemos.',
              2000,
              'Von Studenten für Studenten.',
              2000,
              'Man in the Middle Attacks',
              2000,
            ]}
            loop={Infinity}
            className="text-2xl font-medium text-white py-5"
          />
          <div className="flex space-x-4 w-1/2">
            <Link to="/docs">
              <button className="rounded px-10 py-4 bg-yellow-200 hover:bg-yellow-300 text-black font-semibold shadow-lg shadow-white">
                <span>Docs</span>
              </button>
            </Link>
            <button className="rounded px-10 py-4 border border-white text-white hover:bg-ebony-900">
              <span>Github</span>
            </button>
          </div>
        </div>
        {/* <div className="bg-lock-main bg-cover absolute top-0 right-0 w-1/2 h-96 bg-no-repeat bg-right"></div> */}
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-200 to-pink-700 h-96 w-96 rounded-b-xl animate-gradient-y" />
        <div className="my-20 flex flex-wrap  items-start justify-start gap-4">
          {topics.map((topic, i) => (
            <Link to={topic.link} key={i}>
              <div className="text-white relative cursor-pointer hover:bg-ebony-900 bg-indigo-400 transition rounded-xl flex h-64 w-72 overflow-hidden">
                <p className={`p-10 rounded text-3xl w-4/5 font-semibold`}>
                  {topic.name}
                </p>
                <div
                  className={`bg-card-${i} + absolute -bottom-20 -right-20 bg-cover w-full h-full`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-ebony-800 w-full flex flex-col items-center">
        <div className="w-2/3 flex flex-col text-yellow-50 my-20">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono">
            Demo mit Interaktion.
          </h1>
          <p className="max-w-lg">
            Ziel dieser Website ist es, dass Thema „Website Verschlüsselung mit
            https“ durch eine Mischung aus Hintergrundinformationen, Tutorials
            mit Videoanleitungen und interaktives Testen näher an den Besucher
            dieser Seite zu bringen. Wir schauen uns dafür an, wie das Protokoll
            http ausgebaut ist und zeigen mithilfe der Tools „Wireshark“ und
            „Burp Suite Community“ Angriffe auf die unsichere Version der
            Website. Eine virtuelle Maschine ist in Kapitel ___ mitgeliefert und
            ermöglicht das selbständige Testen der Angriffe. Die Durchführung
            der Angriffe wird in kommenden Kapiteln mit Videos und
            Hintergrundinformationen erläutert. Durch unsere interaktive Konsole
            ist es jedem möglich, neben den oben genannten Tools die Angriffe
            auch direkt auf der Seite durchführen zu können. Gegen Ende erklären
            wir neben der HTTPS-Verschlüsselung weitere Schutzmechanismen, um
            die eigene Seite sicherer zu gestalten.
          </p>
        </div>
      </div>
      <div className="bg-yellow-50 w-full flex flex-col items-end bg-lock-main bg-no-repeat bg-left-top">
        <div className="w-1/3 flex flex-col my-20 justify-end">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono bg-yellow-50 p-3 rounded-lg">
            Sicherheit aus Nutzerperspektive.
          </h1>
          <p className="w-96 bg-yellow-50 p-3 rounded-lg">
            Bei der Demonstration der Angriffe werden wir auf die Schutzziele
            der IT-Sicherheit eingehen und versuchen zu erläutern, wieso wir bei
            den Angriffen gegen diese verstoßen und welche Auswirkungen es haben
            kann. Das Erstellen einer Seite, die einen Chat zwischen zwei
            Nutzern zur Verfügung stellt, benötigt so viele Schutzmöglichkeiten,
            wie nur möglich. Zwei Nutzer tauschen Informationen untereinander
            aus, die nur für sie selbst einsehbar sein sollten. Wird es durch
            unzureichenden Schutz einem Angreifer ermöglicht, diese Nachrichten
            abzufangen oder sogar zu modifizieren, hat das große negative Folgen
            auf die Schutzziele der IT-Sicherheit und auf die
            Kundenzufriedenheit. All das soll in den kommenden Kapiteln
            angeschnitten werden.
          </p>
        </div>
      </div>
      <div className="bg-ebony-800 w-full flex flex-col items-center bg-dev bg-no-repeat bg-right-top">
        <div className="w-2/3 flex flex-col text-yellow-50 my-20">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono bg-ebony-700 p-2 rounded-lg shadow-xl">
            Sicherheit aus Entwicklerperspektive.
          </h1>
          <p className="w-96 bg-ebony-700 p-3 rounded-lg shadow-xl">
            Die Digitalisierung durchdringt sämtliche Lebens-, Arbeits- und
            Geschäftsbereiche. Die Bedeutung von Informations- und
            Cybersicherheit nimmt stetig zu. Die Digitalisierung in Staat,
            Wirtschaft und Gesellschaft hat Deutschland in nur wenigen Jahren
            grundlegend verändert. Neue Möglichkeiten der Kommunikation, des
            Wissenszugangs und der innovativen Gestaltung führen zu mehr
            sozialer Interaktion, neuen Geschäftsmodellen und neuen Feldern für
            Forschung und Entwicklung. Vernetzte elektronische Geräte prägen
            verstärkt den Lebens- und Arbeitsalltag der Menschen.
          </p>
        </div>
      </div>
      <ChatApp />
      <ConsolePage />
    </div>
  );
}
