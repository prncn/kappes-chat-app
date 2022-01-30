import React, { useState, useRef } from 'react';
import Typical from 'react-typical';
import JSONPretty from 'react-json-prettify';
import { dracula } from 'react-json-prettify/dist/themes';
import { useNavigate } from 'react-router-dom';

async function fetchData(url) {
  const data = await fetch(url);
  const json = await data.json();
  console.log(json);
  return json;
}

export function ConsolePage() {
  const [lines, setLines] = useState([]);
  const [hasEntered, setHasEntered] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();

  function Line({ command }) {
    async function handleSubmit(e) {
      e.preventDefault();
      const input = inputRef.current.value;

      const failMsg = [
        'Sorry',
        'Try again',
        'Check available commands',
        'Nope',
        'Refer to the docs',
      ];

      const ENDPOINT = `http${
        JSON.parse(process.env.REACT_APP_SERVER_HTTPS) ? 's' : ''
      }://platin.demo.com:3001/api`;

      if (!/^ *$/.test(input)) {
        const inputArray = input.split(' ');
        setHasEntered(true);
        let result = {
          in: input,
          out: `${inputArray.at(0)} not found. ${failMsg.at(
            Math.floor(Math.random() * failMsg.length)
          )}.`,
        };

        switch (inputArray.at(0)) {
          case 'clear':
            setLines([]);
            inputRef.current.value = '';
            return;

          case 'help':
            navigate('/docs/mitmkonsole');
            return;

          case 'read':
            result.out = 'packet: length 88, ["receive","someos"]';
            break;

          case 'devices':
            const devices = await fetchData(ENDPOINT + '/devices');
            result.out = JSON.stringify(devices, null, '\t');
            break;

          case 'packet':
            const packet = await fetchData(ENDPOINT + '/packet');
            result.out = packet;
            break;

          case 'paypal':
            const paypal = await fetchData(ENDPOINT + '/account');
            result.out = paypal;
            break;

          case 'inject':
            const injectMsg = inputArray.at(1);
            if (injectMsg === undefined) {
              result.out = `Usage "inject <message>" or "inject clear" to send original messages`;
            } else {
              await fetch(ENDPOINT + `/inject?msg=${injectMsg}`);
              if (injectMsg === 'clear') {
                result.out = 'Cleared message tampering';
              } else {
                result.out = `Injected a message "${injectMsg}"`;
              }
            }
            break;

          case 'expose':
            const exposeParam = inputArray.at(1);
            if (exposeParam === 'cert') {
              const exposedCert = await fetchData(
                ENDPOINT + '/expose?get=cert'
              );
              result.out = exposedCert;
            } else if (exposeParam === 'key') {
              const exposedCert = await fetchData(ENDPOINT + '/expose?get=key');
              result.out = exposedCert;
            } else {
              result.out = 'Missing param to expose. Try expose cert';
            }
            break;

          default:
            break;
        }
        setLines([...lines, result]);
        inputRef.current.value = '';
      }
    }

    return (
      <>
        <div className="h-5 flex w-full mt-2">
          <p className="w-auto mr-3 flex items-center">user@root ~ $</p>
          <form onSubmit={handleSubmit} className="flex items-center flex-grow">
            <input
              type="text"
              className="text-white bg-transparent w-full focus:outline-none"
              ref={inputRef}
              value={command?.in || undefined}
              readOnly={command?.in}
              autoFocus={hasEntered}
              spellCheck="false"
            />
            <button type="submit" className="invisible"></button>
          </form>
        </div>
        {command?.in && (
          <div className="overflow-y-visible ">
            <div className="overflow-x-hidden">
              <JSONPretty json={command?.out} theme={dracula} padding={1} />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="h-screen bg-dark text-white w-full flex flex-col justify-center items-center space-y-5 pb-5">
      <div className="text-6xl pr-4 font-semibold">
        Greife die Chat App hier an
      </div>
      <div className="h-10">
        {!hasEntered && (
          <div className="inline-flex font-mono">
            user@root {'  '} ~ $ {'  '}
            <Typical
              steps={['packets', 2000, 'expose cert', 5000]}
              loop={Infinity}
              className="mx-4"
            />
          </div>
        )}
      </div>
      <div className="h-1/2 xl:w-1/2 w-2/3 border-white rounded-lg border relative font-mono overflow-y-auto overflow-x-hidden">
        <div className="space-x-2 absolute left-3 top-3">
          <div className="inline-block rounded-full bg-green-700 w-3 h-3"></div>
          <div className="inline-block rounded-full bg-green-600 w-3 h-3"></div>
          <div className="inline-block rounded-full bg-green-500 w-3 h-3"></div>
        </div>
        <div
          className="w-full absolute bottom-0 border-t border-white p-4 inline-flex flex-col "
          style={{ height: '90%' }}
        >
          {lines.map((line, i) => (
            <Line command={line} key={i} />
          ))}
          <Line command={null} />
        </div>
      </div>
    </div>
  );
}
