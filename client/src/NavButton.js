export default function NavButton({icon, onClick}) {
  return (
    <button className="opacity-50 hover:opacity-100" onClick={onClick}>
      <img src={`./${icon}.svg`} alt="homeicon" className="w-6 my-1" />
    </button>
  );
}
