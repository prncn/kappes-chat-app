import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="overflow-hidden h-screen bg-gradient-to-tr from-ebony-700 via-ebony-700 to-pink-900 animate-gradient-y text-ebony-50 w-full flex flex-col justify-center items-center space-y-5 pb-5">
      <Link
        to="/"
        className="absolute top-10 left-40 text-2xl tracking-tight leading-none font-semibold"
      >
        mitm
        <br />
        demo
      </Link>
      <div className="flex flex-col">
        <span
          className="font-semibold leading-none font-mono"
          style={{ fontSize: '20em' }}
        >
          404.
        </span>
        <span className="text-xl">Du hast dich verirrt.</span>
      </div>
      <div
        className={`absolute bottom-0 bg-cover bg-no-repeat w-96 rounded-xl bg-card-1 h-96 overflow-hidden`}
      />
    </div>
  );
}
