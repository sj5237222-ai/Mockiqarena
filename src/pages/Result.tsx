import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const { state }: any = useLocation();

  const score = state?.score || 0;
  const total = state?.total || 0;

  const accuracy = ((score / total) * 100).toFixed(1);

  return (
    <div className="space-y-6">

      <div className="bg-slate-900 p-6 rounded-xl">
        <h1 className="text-2xl text-amber-400">Result</h1>

        <p>Score: {score} / {total}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>

      <Link to="/quiz" className="bg-amber-500 text-black px-4 py-2 rounded">
        Retry
      </Link>

    </div>
  );
}
