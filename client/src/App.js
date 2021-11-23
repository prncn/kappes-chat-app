import io from 'socket.io-client'
import { useState } from 'react'
import TextBox from './TextBox'
import Bubble from './Bubble'
import Contact from './Contact'
import NavButton from './NavButton'

const socket = io.connect('http://localhost:3001');

export default function App() {
  const chat = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis viverra turpis vitae placerat. Praesent pellentesque condimentum ex, eget consectetur felis sagittis non. Cras at facilisis dui, in mollis massa. Integer iaculis nulla semper arcu elementum, auctor bibendum leo vehicula. Integer a lobortis dolor. Donec a aliquet dolor. Pellentesque pretium sem velit, vel tincidunt tellus vestibulum sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
    "Okay, thanks for letting me know! The details have been sent.",
    "Okay, thanks for letting me know! The details have been sent."
  ]
  const [messages, setMessages] = useState(chat);
  
  const sectioncss =
  ' text-white font-semibold flex flex-col items-center py-3 px-3';
  
  const childToParent = (e, input) => {
    e.preventDefault();
    if(input === '') return;
    setMessages([...messages, input]);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-300">
        <p className="text-white p-1 font-mono">Kappes ITSec Demo Platin</p>
        <div className="flex justify-center items-center">
          <div
            className="flex rounded-2xl shadow-lg bg-gray-500 overflow-hidden max-w-screen-lg"
            style={{ width: '100%', height: '700px' }}
          >
            <div className={'flex-none bg-gray-700' + sectioncss}>
              <img src="./iconlogo.svg" alt="logoicon" className="w-9" />
              <div className="flex flex-col justify-center h-4/5">
                <NavButton icon="iconhome" />
                <NavButton icon="iconcal" />
                <NavButton icon="iconchat" />
                <NavButton icon="iconsearch" />
              </div>
            </div>
            <div className={'flex-1 bg-gray-100 p-1 w-full h-full' + sectioncss}>
              <div className="flex flex-col p-4">
                <TextBox color="bg-white" search placeholder="Search" />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
              </div>
            </div>
            <div className={'overflow-y-auto h-full bg-white w-8/12 justify-end' + sectioncss}>
              <div className="text-gray-300 text-xs font-medium my-2">Monday 5:04PM</div>
              {messages.map((msg, i) => (
                <Bubble content={msg} mine key={i}/>
              ))}
              <TextBox bottom color="bg-gray-100" send placeholder="Type something..." childToParent={childToParent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
