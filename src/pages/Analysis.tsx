import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizAPI } from "../lib/api";

export default function Analysis() {
  const { attemptId } = useParams();

  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (attemptId) {
      QuizAPI.getAnalysis(attemptId).then(setAnalysis);
    }
  }, [attemptId]);

  if (!analysis) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card title="Score" value={analysis.score} />
        <Card title="Accuracy" value={`${analysis.accuracy}%`} />
        <Card title="Rank" value={analysis.rank} />
        <Card title="Time" value={`${analysis.timeMin} min`} />
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <h2 className="text-xl font-bold mb-5">
          Question Review
        </h2>

        <div className="space-y-3">
          {analysis.questions.map((q: any, i: number) => (
            <div
              key={q.id}
              className={`p-4 rounded ${
                q.correct
                  ? "bg-emerald-900/40"
                  : "bg-red-900/40"
              }`}
            >
              <p>
                Q{i + 1}. {q.text}
              </p>

              <p className="text-sm text-slate-300 mt-2">
                Correct Answer: {q.correctAnswer}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {q.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="text-slate-400 text-sm">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
}
