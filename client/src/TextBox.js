import { useState } from "react";
import Bubble from "./Bubble";

export default function TextBox({ bottom, search, send, color, placeholder, childToParent }) {
  const [input, setInput] = useState([]);

  return (
    <form className={'w-full ' + (bottom ? 'mt-3' : '')}>
      <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
        {search && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
        )}
        {send && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              className="p-1 focus:outline-none focus:shadow-outline"
              onClick={e => { childToParent(e, input); setInput('') }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </span>
        )}
        <input
          className={
            'p-3 text-sm text-gray-500 rounded-lg pl-10 focus:outline-none w-full bg-gray-100 ' +
            color
          }
          placeholder={placeholder}
          autoComplete="off"
          value={input}
          onChange={e => { setInput(e.target.value) }}
        />
      </div>
    </form>
  );
}
