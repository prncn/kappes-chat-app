import React, { useState, useRef } from "react";
import Typical from "react-typical";
import JSONPretty from "react-json-prettify";

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

  function Line({ command }) {
    async function handleSubmit(e) {
      e.preventDefault();
      const input = inputRef.current.value;

      const failMsg = [
        "Sorry",
        "Try again",
        "Check available commands",
        "Nope",
        "Refer to the docs",
      ];

      if (!/^ *$/.test(input)) {
        const inputArray = input.split(" ");
        setHasEntered(true);
        let result = {
          in: input,
          out: `${inputArray.at(0)} not found. ${failMsg.at(
            Math.random() * failMsg.length
          )}.`,
        };

        switch (inputArray.at(0)) {
          case "clear":
            setLines([]);
            inputRef.current.value = "";
            return;

          case "read":
            result.out = 'packet: length 88, ["receive","someos"]';
            break;

          case "devices":
            const devices = await fetchData("http://localhost:3001/devices");
            result.out = JSON.stringify(devices, null, "\t");
            break;

          case "packet":
            const packet = await fetchData("http://localhost:3001/packet");
            result.out = packet;
            break;

          case "headers":
            const headers = await fetchData("http://localhost:3001/headers");
            result.out = headers;
            break;

          case "inject":
            const injectMsg = inputArray.at(1);
            if(injectMsg === undefined) {
              result.out = `Usage "inject <message>" or "inject clear" to send original messages`;
            } else {
              await fetch(`http://localhost:3001/inject?msg=${injectMsg}`);
              result.out = `Injected a message "${injectMsg}"`;
            }
            break;

          default:
            break;
        }
        setLines([...lines, result]);
        inputRef.current.value = "";
      }
    }

    const JSONtheme = {
      background: "rgb(39, 40, 34)",
      brace: "rgb(129, 211, 204)",
      keyQuotes: "rgb(129, 211, 204)",
      valueQuotes: "rgb(129, 211, 204)",
      colon: "rgb(129, 211, 204)",
      comma: "rgb(129, 211, 204)",
      key: "rgb(201, 70, 56)",
      value: {
        string: "rgb(242, 152, 59)",
        null: "rgb(201, 70, 56)",
        number: "green",
        boolean: "rgb(129, 211, 204)",
      },
      bracket: "rgb(129, 211, 204)",
    };

    return (
      <>
        <div className="h-5 flex w-full mt-2">
          <p className="w-auto mr-3 flex items-center">user@root ~ $</p>
          <form onSubmit={handleSubmit} className="flex items-center">
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
          <div className="overflow-y-visible">
            <JSONPretty json={command?.out} theme={JSONtheme} padding={1} />
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
            user@root {"  "} ~ $ {"  "}
            <Typical
              steps={["read message -v", 2000, "expose ssl cert", 5000]}
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
          style={{ height: "90%" }}
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
