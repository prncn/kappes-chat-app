export default function NavButton({icon}) {
  return (
    <button className="opacity-50 hover:opacity-100">
      <img src={`./${icon}.svg`} alt="homeicon" className="w-6 my-1" />
    </button>
  );
}
