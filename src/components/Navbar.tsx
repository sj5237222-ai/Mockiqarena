import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path;

  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-amber-400">
          QuizArena
        </h1>

        <div className="flex gap-4 text-sm">

          <Link
            to="/"
            className={
              isActive("/")
                ? "text-amber-400"
                : "text-slate-300"
            }
          >
            Home
          </Link>

          <Link
            to="/quiz"
            className={
              isActive("/quiz")
                ? "text-amber-400"
                : "text-slate-300"
            }
          >
            Quiz
          </Link>

        </div>

      </div>
    </div>
  );
}
