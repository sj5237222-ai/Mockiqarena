import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const active = (path: string) =>
    location.pathname === path
      ? "text-amber-400"
      : "text-slate-300";

  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-amber-400">
          NEETPrep Clone
        </h1>

        <div className="flex gap-6 text-sm">

          <Link className={active("/")} to="/">
            Dashboard
          </Link>

          <Link className={active("/quiz")} to="/quiz">
            Quiz
          </Link>

          <Link className={active("/mocks")} to="/mocks">
            Mocks
          </Link>

        </div>

      </div>
    </div>
  );
}
