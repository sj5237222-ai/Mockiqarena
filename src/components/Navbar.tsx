import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-amber-400">
          QuizArena
        </h1>

        <nav className="flex gap-6 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mocks">Mocks</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/payment">Go Pro</NavLink>
        </nav>
      </div>
    </header>
  );
}
