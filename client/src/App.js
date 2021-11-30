import './index.css';
import io from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import TextBox from './TextBox'
import Contact from './Contact'

const socket = io.connect('http://localhost:3001');

function Bubble({ content, mine }) {
  return (
    <div className={`p-2 mb-1 w-80 ${mine ? "ml-auto bg-gray-100 text-gray-600" : "mr-auto bg-gray-500 text-white"} rounded font-normal text-xs`}>
      {content}
    </div>
  );
}

function NavButtonGroup({ children }) {
  const [active, setActive] = useState('home');

  function switchActive(value) {
    if(value === active) 
      return;
    setActive(value);
    console.log(value + active);
  }

  return (
    <>
      {children.map(child => (
        <NavButton {...child.props} active={child.props.value === active} onClick={() => switchActive(child.props.value)} key={child.props.value}/>
      ))}
    </>
  );
}

function NavButton({ icon, active = false, onClick }) {
  return (
    <button className={active ? "opacity-100" : "opacity-50 + hover:opacity-80"} onClick={onClick}>
      <img src={`./${icon}.svg`} alt={icon} className="w-6 my-1" />
    </button>
  );
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState('home');

  function handlePage(e, newPage) {
    setPage(newPage);
  }

  function childToParent(e, input) {
    e.preventDefault();
    if (input === '') return;
    socket.emit('send', input);
    setMessages([...messages, { content: input, mine: true }]);
  }

  useEffect(() => {
    socket.on('receive', (content) => {
      setMessages([...messages, { content, mine: false }])
    });
  }, [messages]);

  return (
    <>
      <div className="min-h-screen bg-gray-300">
        <p className="text-white p-1 font-mono">Kappes ITSec Demo Platin</p>
        <div className="flex justify-center items-center">
          <div
            className="flex rounded-2xl shadow-lg bg-gray-500 overflow-hidden max-w-screen-lg"
            style={{ width: '100%', height: '700px' }}
          >
            <div className="flex-none bg-gray-700 __section __section-pad">
              <img src="./iconlogo.svg" alt="logoicon" className="w-9" />
              <div className="flex flex-col justify-center h-4/5">
                <NavButtonGroup
                  value={page}
                  onChange={handlePage}
                >
                  <NavButton value="home" icon="iconhome" />
                  <NavButton value="cal" icon="iconcal" />
                  <NavButton value="chat" icon="iconchat" />
                  <NavButton value="search" icon="iconsearch" />
                </NavButtonGroup>
              </div>
            </div>
            <div className="flex-1 bg-gray-100 w-full h-full __section">
              <div className="flex flex-col">
                <div className="w-full p-4 py-5">
                  <TextBox color="bg-white" search placeholder="Search" />
                </div>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
              </div>
            </div>
            <div className="overflow-y-auto h-full bg-white w-8/12 justify-end __section __section-pad">
              <div className="text-gray-300 text-xs font-medium my-2">Monday 5:04PM</div>
              {messages.map((msg, i) => (
                <Bubble content={msg.content} mine={msg.mine} key={i} />
              ))}
              <TextBox bottom color="bg-gray-100" send placeholder="Type something..." childToParent={childToParent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
