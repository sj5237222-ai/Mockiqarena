import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6">

      {/* HERO SECTION */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome to QuizArena 🚀
        </h1>

        <p className="text-slate-300 mt-3">
          Practice NEET mock tests, daily DPPs and compete with toppers.
        </p>

        {/* START BUTTON */}
        <Link
          to="/quiz"
          className="inline-block mt-5 bg-amber-500 text-black px-5 py-2 rounded-lg font-bold"
        >
          Start Quiz
        </Link>
      </div>

      {/* STATS SECTION */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">5000+</h2>
          <p className="text-slate-400">Questions</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">100+</h2>
          <p className="text-slate-400">Mock Tests</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">24/7</h2>
          <p className="text-slate-400">Practice Mode</p>
        </div>

      </div>

      {/* SUBJECT SECTION */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Subjects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-blue-600/20 border border-blue-500 p-4 rounded-xl">
            Physics
          </div>

          <div className="bg-green-600/20 border border-green-500 p-4 rounded-xl">
            Chemistry
          </div>

          <div className="bg-pink-600/20 border border-pink-500 p-4 rounded-xl">
            Biology
          </div>

        </div>
      </div>

    </div>
  );
}
