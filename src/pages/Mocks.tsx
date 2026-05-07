import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";

export default function Mocks() {
  const [mocks, setMocks] = useState<any[]>([]);

  useEffect(() => {
    api("mocks.list").then((res) => {
      setMocks(res.mocks || []);
    });
  }, []);

  return (
    <div className="space-y-4">

      <h1 className="text-2xl font-bold">Mock Tests</h1>

      {mocks.map((m) => (
        <div
          key={m.id}
          className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between"
        >

          <div>
            <h2 className="font-bold">{m.title}</h2>
            <p className="text-slate-400 text-sm">
              {m.questions} Questions • {m.duration} min
            </p>
          </div>

          <Link
            to="/quiz"
            className="bg-amber-500 text-black px-4 py-2 rounded"
          >
            Start
          </Link>

        </div>
      ))}

    </div>
  );
}
