import { useState } from "react";

const questions = [
  {
    q: "What is acceleration due to gravity?",
    options: ["9.8 m/s²", "10 m/s²", "5 m/s²", "0 m/s²"],
    answer: 0,
  },
  {
    q: "Chemical formula of water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1,
  },
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);

  const q = questions[i];

  const handle = (idx: number) => {
    if (idx === q.answer) setScore(score + 1);

    if (i < questions.length - 1) setI(i + 1);
    else alert("Quiz finished! Score: " + score);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-xl border border-slate-800">

        <h2 className="text-xl font-bold mb-4">
          Q{i + 1}. {q.q}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handle(idx)}
              className="w-full bg-slate-800 p-3 rounded hover:bg-amber-500 hover:text-black"
            >
              {opt}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
