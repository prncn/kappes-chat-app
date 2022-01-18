export default function Contact({ person, recent, index }) {
  const colors = ['indigo', 'blue', 'green', 'indigo'];
  const color = () => colors.at(1);

  return (
    <button className="text-left hover:bg-gray-200">
      <div className="w-full h-16 my-2 flex flex-row px-4">
        <div className={`bg-${color()}-200 h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center`}>
          { person.first.at(0).toUpperCase() + ' ' + person.last.at(0).toUpperCase() }
        </div>
        <div className="h-16 flex-auto px-2">
          <p className="text-sm font-medium text-gray-500">{ person.first + ' ' + person.last}</p>
          <p className="text-xs font-light text-gray-500 mt-1">
            { recent }
          </p>
        </div>
      </div>
    </button>
  );
}
