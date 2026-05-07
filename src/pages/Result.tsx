import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const location = useLocation();

  const state = location.state as {
    score: number;
    total: number;
  } | null;

  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center w-full max-w-md">

        <h1 className="text-3xl font-bold text-amber-400">
          Test Completed 🎯
        </h1>

        <p className="text-slate-400 mt-4">
          Your Score
        </p>

        <h2 className="text-5xl font-bold mt-2">
          {score} / {total}
        </h2>

        <p className="text-slate-500 mt-3 text-sm">
          Keep practicing to improve your rank 🚀
        </p>

        <Link
          to="/quiz"
          className="inline-block mt-6 bg-amber-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          Retry Test
        </Link>

        <Link
          to="/"
          className="block mt-3 text-slate-400 text-sm"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}
