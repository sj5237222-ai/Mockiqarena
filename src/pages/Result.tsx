import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { score, total } = (location.state as any) || {
    score: 0,
    total: 0,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">

        <h1 className="text-3xl font-bold text-amber-400">
          Quiz Completed 🎯
        </h1>

        <p className="mt-4 text-slate-300">
          Your Score
        </p>

        <h2 className="text-5xl font-bold mt-2">
          {score} / {total}
        </h2>

        <Link
          to="/quiz"
          className="inline-block mt-6 bg-amber-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          Retry Quiz
        </Link>

      </div>

    </div>
  );
}
