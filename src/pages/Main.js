// import ReactPlayer from "react-player";
import "../index.css";
import ChatApp from "./ChatApp";
import React from "react";
import { ConsolePage } from "./ConsolePage";
import { Link } from "react-router-dom";

export default function Main() {
  const topics = [
    "SSL Stripping",
    "Was ist SSL/TLS?",
    "Chat App",
    "Web Sockets",
    "Zertifikate",
    "Packets",
  ];

  return (
    <div className="h-min-screen flex flex-col items-center bg-ebony-800">
      <div className="w-2/3">
            <p className="text-ebony-50 font-semibold lowercase mt-5 ml-1 cursor-default">Platin</p>
          <div className="flex flex-col justify-center w-2/3 mt-20 text-ebony-100 space-y-4">
            <h1 className="text-9xl font-bold text-yellow-50 tracking-tight">
              MITM <br />{" "}
              <div className="bg-gradient-to-r from-yellow-200 to-pink-700 text-transparent bg-clip-text">
                Demo
              </div>
            </h1>
            <p className="text-2xl font-medium py-5">
              Erstellen und Validieren von Sicherheitsdemos. <br />
              Von Studenten für Studenten.
            </p>
            <div className="flex space-x-4 w-1/2">
              <Link to="/docs">
                <button className="rounded px-10 py-4 bg-yellow-200 hover:bg-yellow-300 text-black font-semibold">
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
                className={`hover:bg-card-${
                  i % 3
                } bg-cover bg-left-top bg-no-repeat cursor-pointer hover:bg-ebony-900 hover:underline transition p-4 h-40 text-white border border-white rounded flex justify-center items-center`}
              >
                <p className="hover:bg-red-50 p-1 hover:text-black rounded">
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
            Demo mit Wireshark.
          </h1>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="bg-yellow-50 w-full flex flex-col items-end bg-lock-main bg-no-repeat bg-left-top">
        <div className="w-1/3 flex flex-col my-20 justify-end">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono">
            Sicherheit aus Nutzerperspektive.
          </h1>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        {/* <ReactPlayer muted url="https://streamable.com/l7eamj" /> */}
      </div>
      <div className="bg-ebony-800 w-full flex flex-col items-center bg-dev bg-no-repeat bg-right-top">
        <div className="w-2/3 flex flex-col text-yellow-50 my-20">
          <h1 className="text-4xl font-semibold w-52 py-10 font-mono">
            Sicherheit aus Entwicklerperspektive.
          </h1>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <ChatApp />
      <ConsolePage />
    </div>
  );
}
