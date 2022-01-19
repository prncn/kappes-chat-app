import "../index.css";
import ChatApp from "./ChatApp";
import React from "react";
import { ConsolePage } from "./ConsolePage";
import { Link } from "react-router-dom";

export default function Main() {
  const topics = [
    "Tools",
    "Was ist SSL/TLS?",
    "Chat App",
    "Web Sockets",
    "Zertifikate",
    "Packets",
  ];

  return (
    <div className="h-min-screen flex flex-col items-center bg-ebony-800">
      <div className="w-2/3">
        <p className="text-ebony-50 font-semibold lowercase mt-5 ml-1 cursor-default">
          Platin
        </p>
        <div className="flex flex-col justify-center w-2/3 mt-20 text-ebony-100 space-y-4">
          <h1 className="text-7xl font-bold text-yellow-50 tracking-tight">
            MITM <br />
            <div className="bg-gradient-to-r from-yellow-200 to-pink-700 text-transparent animate-gradient-y bg-clip-text">
              DEMO
            </div>
          </h1>
          <p className="text-2xl font-medium text-white py-5">
            Erstellen und Validieren von Sicherheitsdemos. <br />
            Von Studenten für Studenten.
          </p>
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
        <div className="my-20 grid grid-cols-4 grid-rows-2 items-start gap-4">
          {topics.map((topic, i) => (
            <Link to="/docs" key={i}>
              <div
                className={`${
                  i === 2 && "bg-card-1 bg-cover bg-top"
                } text-white cursor-pointer hover:bg-ebony-900 transition h-40 border border-white rounded flex justify-center items-center`}
              >
                <p className={`${i === 2 && "bg-ebony-800"} p-3 rounded`}>
                  {topic}
                </p>
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
          <p className="w-96">
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
      <div className="bg-yellow-50 w-full flex flex-col items-end bg-lock-main bg-no-repeat bg-left-top">
        <div className="w-1/3 flex flex-col my-20 justify-end">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono">
            Sicherheit aus Nutzerperspektive.
          </h1>
          <p className="w-96">
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
      <div className="bg-ebony-800 w-full flex flex-col items-center bg-dev bg-no-repeat bg-right-top">
        <div className="w-2/3 flex flex-col text-yellow-50 my-20">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono">
            Sicherheit aus Entwicklerperspektive.
          </h1>
          <p className="w-96">
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
