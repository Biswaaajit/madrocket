import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-slate-950 flex justify-center items-center py-2.5 text-2xl">
      <Link to="/" className="text-amber-600 font-extrabold">
        Pokkie-mon
      </Link>
    </div>
  );
}

export default Navigation;
