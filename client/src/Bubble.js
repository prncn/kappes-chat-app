export default function Bubble({content, mine}) {
  return (
    <div className={`p-2 mb-3 w-80 ${mine ? "ml-auto bg-gray-100 text-gray-600" : "mr-auto bg-gray-500 text-white"} rounded font-normal text-xs`}>
      { content }
    </div>
  );
}
