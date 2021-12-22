import '../index.css';
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import TextBox from '../components/TextBox';
import Contact from '../components/Contact';

const socket = io.connect('http://localhost:3001', {
  rejectUnauthorized: false,
});

function Bubble({ content, mine }) {
  return (
    <div
      className={`p-2 mb-1 ${
        mine
          ? 'ml-auto bg-gray-100 text-gray-600'
          : 'mr-auto bg-gray-500 text-white'
      } rounded font-normal text-xs`}
    >
      {content}
    </div>
  );
}

function NavButtonGroup({ children, page, onChange }) {
  return (
    <>
      {children.map((child) => (
        <NavButton
          {...child.props}
          active={child.props.value === page}
          onClick={() => onChange(child.props.value)}
          key={child.props.value}
        />
      ))}
    </>
  );
}

function NavButton({ icon, active = false, onClick }) {
  return (
    <button
      className={active ? 'opacity-100' : 'opacity-50 + hover:opacity-80'}
      onClick={onClick}
    >
      <img src={`./${icon}.svg`} alt={icon} className="w-6 my-1" />
    </button>
  );
}

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState('chat');

  function handlePage(newPage) {
    if (newPage !== page) {
      setPage(newPage);
    }
  }

  function childToParent(e, input) {
    e.preventDefault();
    if (input === '') return;
    socket.emit('send', input);
    setMessages([...messages, { content: input, mine: true }]);
  }

  useEffect(() => {
    socket.on('receive', (content) => {
      setMessages([...messages, { content, mine: false }]);
    });
  }, [messages]);

  return (
    <>
      <div className="min-h-screen bg-gray-300 w-full">
        <p className="text-white p-1">KAPPES ITSEC DEMO PLATIN</p>
        <div className="flex justify-center items-center h-full">
          <div
            className="flex rounded-2xl shadow-lg bg-gray-500 overflow-hidden max-w-screen-lg"
            style={{ width: '100%', height: '700px' }}
          >
            <div className="flex-none bg-gray-700 __section __section-pad">
              <img src="./iconlogo.svg" alt="logoicon" className="w-9" />
              <div className="flex flex-col justify-center h-4/5">
                <NavButtonGroup page={page} onChange={handlePage}>
                  <NavButton value="home" icon="iconhome" />
                  <NavButton value="cal" icon="iconcal" />
                  <NavButton value="chat" icon="iconchat" />
                  <NavButton value="search" icon="iconsearch" />
                </NavButtonGroup>
              </div>
            </div>
            {page === 'chat' && (
              <ChatView messages={messages} childToParent={childToParent} />
            )}
            {page === 'home' && (
              <HomeView />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ChatView({ messages, childToParent }) {
  return (
    <>
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
        <div className="text-gray-300 text-xs font-medium my-2">
          Monday 5:04PM
        </div>
        {messages.map((msg, i) => (
          <Bubble content={msg.content} mine={msg.mine} key={i} />
        ))}
        <TextBox
          bottom
          color="bg-gray-100"
          send
          placeholder="Type something..."
          childToParent={childToParent}
        />
      </div>
    </>
  );
}

function HomeView() {
  return(
    <div className="w-full h-full bg-gradient-to-r from-green-300 to-green-200 __section flex justify-center items-center">
      <form className="w-80 h-96 flex flex-col justify-center">
        <h1 className="font-semibold text-3xl">Sign In</h1>
        <input type="text" className="w-full p-3 my-2 bg-gray-100 rounded-lg focus:outline-none text-gray-700"></input>
        <input type="password" className="w-full p-3 my-2 bg-gray-100 rounded-lg focus:outline-none text-gray-700"></input>
      </form>
    </div>
  );
}