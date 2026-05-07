import { Link } from "react-router-dom";

const mocks = [
  { id: 1, title: "NEET Full Mock Test 1", q: 90 },
  { id: 2, title: "Physics Chapter Test", q: 45 },
  { id: 3, title: "Chemistry Practice Test", q: 60 },
];

export default function Mocks() {
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
              {m.q} Questions
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
