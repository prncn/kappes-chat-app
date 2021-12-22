import ReactPlayer from 'react-player';
import '../index.css';
import ChatApp from './ChatApp';
import React, { useState, useRef } from 'react';
import Typical from 'react-typical';

export default function Main() {
  const topics = [
    'SSL Stripping',
    'Was ist SSL/TLS?',
    'Chat App',
    'Web Sockets',
    'Zertifikate',
  ];

  return (
    <div className="bg-black h-min-screen flex flex-col items-center">
      <div className="w-2/3">
        <div className="flex">
          <div className="flex flex-col justify-center w-2/3 mt-20 text-gray-100 space-y-4">
            <p className="text-xl text-yellow-200 font-semibold">Team Platin</p>
            <h1 className="text-6xl font-bold text-yellow-50 uppercase tracking-tight">
              {'< '} <br /> ITSec Demo. Von Studenten für Studenten. <br />{' '}
              {'/>'}
            </h1>
            <p className="text-xl font-medium">
              Erstellen und Validieren von Sicherheitsdemos.
            </p>
            <div className="flex space-x-4 w-1/2">
              <button className="px-10 py-4 bg-yellow-200 hover:bg-yellow-300 text-black">
                <span>Github</span>
              </button>
              <button className="px-10 py-4 border border-white text-white hover:bg-gray-900">
                <span>Docs</span>
              </button>
            </div>
          </div>
          <div className="bg-lock-main bg-cover absolute top-0 right-0 w-1/2 h-96 bg-no-repeat bg-right"></div>
        </div>
        <div className="my-20 grid grid-cols-4 grid-rows-2 items-start gap-4">
          {topics.map((topic, i) => (
            <div
              className={`bg-card-${
                i % 3
              } bg-contain bg-no-repeat cursor-pointer hover:bg-gray-900 hover:underline transition p-4 h-40 text-white border border-white rounded flex justify-center items-center`}
            >
              <p className="hover:bg-red-50 p-1 hover:text-black">{topic}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen bg-yellow-50 w-full flex flex-col items-center">
        <div className="w-2/3 flex mt-20">
          <div className="w-full flex flex-col space-y-4">
            <h1 className="text-5xl font-semibold w-52 py-10">
              Sicherheit aus Nutzerperspektive.
            </h1>
            <p className="w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="flex justify-end mt-10">
            <ReactPlayer
              width={700}
              height={400}
              muted
              url="https://streamable.com/l7eamj"
            />
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col items-center dark bg-dev bg-no-repeat bg-right-top">
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

  function ConsolePage() {
    const [lines, setLines] = useState([]);
    const inputRef = useRef();

    function handleSubmit(e) {
      e.preventDefault();
      setLines([...lines, inputRef.current.value]);
      inputRef.current = null;
    }

    function Line({ command }) {
      return (
        <>
          <div className="h-5 flex w-full mt-2">
            <p className="w-auto mr-5 flex items-center">user@root ~ $</p>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                autoFocus
                className="text-white bg-transparent w-full focus:outline-none"
                ref={inputRef}
                value={command}
              />
              <button type="submit" className="invisible"></button>
            </form>
          </div>
          {command && <p>{command + ' '} success</p>}
        </>
      );
    }

    return (
      <div className="h-screen bg-black text-white w-full flex flex-col justify-center items-center space-y-5">
        <div className="text-6xl pr-4 font-semibold">
          Greif die Chat App hier an
        </div>
        <p className="inline-flex font-mono">
          user@root {'  '} ~ $ {'  '}
          <Typical
            steps={['read message -v', 2000, 'expose ssl cert', 5000]}
            loop={Infinity}
            wrapper="p"
            className="mx-4"
          />
        </p>
        <div className="h-1/2 w-1/2 border-white rounded-lg border relative font-mono">
          <div className="space-x-2 absolute left-3 top-3">
            <div className="inline-block rounded-full bg-green-700 w-3 h-3"></div>
            <div className="inline-block rounded-full bg-green-600 w-3 h-3"></div>
            <div className="inline-block rounded-full bg-green-500 w-3 h-3"></div>
          </div>
          <div
            className="w-full absolute bottom-0 border-t border-white p-4 inline-flex flex-col "
            style={{ height: '90%' }}
          >
            {lines.map((line) => (
              <Line command={line} />
            ))}
            <Line command={null} />
          </div>
        </div>
      </div>
    );
  }
}
