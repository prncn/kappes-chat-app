import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatApp from './pages/ChatApp';
import { ConsolePage } from './pages/ConsolePage';
import { Docs } from './pages/Docs';
import Main from './pages/Main';
import { PhishingDemo } from './pages/PhishingDemo';

export default function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/chatapp" element={<ChatApp />} />
          <Route path="/paypal" element={<PhishingDemo />} />
          <Route path="/mitmkonsole" element={<ConsolePage />} />
          <Route path="/docs" element={<Docs />}>
            <Route path=":page" element={<Docs />} />
          </Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
