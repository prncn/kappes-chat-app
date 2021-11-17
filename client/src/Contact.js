export default function Contact() {
  return (
    <div className="w-full h-16 mt-4 flex flex-row">
      <div className="bg-gradient-to-r from-green-300 to-teal-300 h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center">
        D M
      </div>
      <div className="h-16 flex-auto px-2">
        <p className="text-sm font-medium text-gray-500">Darius Marius</p>
        <p className="text-xs font-light text-gray-500 mt-1">
          Okay, thanks for letting me know! The details...
        </p>
      </div>
    </div>
  );
}
