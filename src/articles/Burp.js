import ReactPlayer from 'react-player';

export function Burp() {
  return (
    <>
      <div className="w-full space-y-6 relative flex flex-col items-center">
        <div className="w-4/5 space-y-6 mb-10">
          <h1 className="text-6xl font-bold text-ebony-50 tracking-tight">
            Burp Suite
          </h1>
          <p className="text-2xl text-ebony-50 w-96">
            Nachrichten modifizieren mit Burp.
          </p>
          <p className="text-justify w-2/3">
            Wir haben bereits das Tool Wireshark kennengelernt und konnten die
            Nachrichten inspizieren. Im nächsten Schritt schauen wir uns das
            Modifizieren der Nachrichten an. Es gibt einige Tools, die uns das
            ermöglichen. Das Abändern von Nachrichten wird in der
            Informationssicherheit als Verletzung der Integrität betrachtet, da
            wir eine Datenänderung vornehmen. Wir fokussieren uns in diesem
            Beispiel auf “Burp Suite“. Mit diesem Tool können wir unseren HTTP-
            und HTTPS-Verkehr abfangen und so modifizieren, dass die von uns
            geschriebene Nachricht anstatt der ursprünglichen Nachricht an den
            Empfänger geschickt wird. Schauen wir uns den Angriff im Video
            genauer an.
          </p>
        </div>
        <div
          className="w-full overflow-hidden rounded-lg"
          style={{ height: '43rem' }}
        >
          <ReactPlayer
            muted
            url="https://streamable.com/ig7bcj"
            playsinline
            width="100%"
            height="100%"
            playing="true"
          />
        </div>
      </div>
    </>
  );
}
