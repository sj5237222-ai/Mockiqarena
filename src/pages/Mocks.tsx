import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuizAPI } from "../lib/api";

export default function Mocks() {
  const [mocks, setMocks] = useState<any[]>([]);

  useEffect(() => {
    QuizAPI.listMocks().then((r: any) => {
      setMocks(r.mocks || []);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {mocks.map((mock) => (
        <Link
          key={mock.id}
          to={`/mocks/${mock.id}`}
          className="bg-slate-900 border border-slate-800 rounded-xl p-5"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">
              {mock.title}
            </h2>

            <span className="bg-emerald-600 px-2 py-1 rounded text-xs">
              {mock.isFree ? "FREE" : "PRO"}
            </span>
          </div>

          <p className="text-slate-400 mt-3">
            {mock.questions} Questions
          </p>
        </Link>
      ))}
    </div>
  );
}
