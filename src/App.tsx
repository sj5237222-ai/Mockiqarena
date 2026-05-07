import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Mocks from "./pages/Mocks";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="font-bold text-xl text-amber-400">
            QuizArena
          </h1>

          <nav className="flex gap-4">
            <Link to="/" className="hover:text-amber-400">
              Home
            </Link>

            <Link to="/mocks" className="hover:text-amber-400">
              Mocks
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mocks" element={<Mocks />} />
        </Routes>
      </main>
    </div>
  );
}
