import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  {
    q: "Unit of force?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: 0,
  },
];

export default function Quiz() {
  const navigate = useNavigate();

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [marked, setMarked] = useState<any>({});
  const [time, setTime] = useState(60 * 10); // 10 min

  const q = questions[i];

  // TIMER
  useEffect(() => {
    if (time <= 0) {
      finishTest();
      return;
    }

    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);

  const formatTime = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const select = (idx: number) => {
    setAnswers({ ...answers, [i]: idx });
  };

  const mark = () => {
    setMarked({ ...marked, [i]: !marked[i] });
  };

  const next = () => {
    if (i < questions.length - 1) setI(i + 1);
  };

  const prev = () => {
    if (i > 0) setI(i - 1);
  };

  const finishTest = () => {
    let s = 0;

    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        s++;
      }
    });

    navigate("/result", {
      state: {
        score: s,
        total: questions.length,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">

      <div className="grid md:grid-cols-4 gap-4">

        {/* QUESTION PANEL */}
        <div className="md:col-span-3 bg-slate-900 p-5 rounded-xl border border-slate-800">

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-4">

            <h2 className="text-lg font-bold">
              Question {i + 1}
            </h2>

            <div className="bg-amber-500 text-black px-3 py-1 rounded font-bold">
              ⏱ {formatTime()}
            </div>

          </div>

          {/* QUESTION */}
          <h3 className="text-xl mb-4">{q.q}</h3>

          {/* OPTIONS */}
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => select(idx)}
                className={`w-full p-3 rounded border ${
                  answers[i] === idx
                    ? "bg-amber-500 text-black"
                    : "bg-slate-800"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex gap-3 mt-6">

            <button onClick={prev} className="px-4 py-2 bg-slate-700 rounded">
              Previous
            </button>

            <button onClick={mark} className="px-4 py-2 bg-purple-600 rounded">
              {marked[i] ? "Unmark" : "Mark"}
            </button>

            <button onClick={next} className="px-4 py-2 bg-slate-700 rounded">
              Next
            </button>

            <button
              onClick={finishTest}
              className="ml-auto px-5 py-2 bg-green-500 text-black rounded font-bold"
            >
              Submit
            </button>

          </div>

        </div>

        {/* QUESTION GRID */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">

          <h3 className="font-bold mb-3">Questions</h3>

          <div className="grid grid-cols-4 gap-2">

            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`p-2 rounded text-sm ${
                  i === idx
                    ? "bg-amber-500 text-black"
                    : marked[idx]
                    ? "bg-purple-600"
                    : answers[idx] !== undefined
                    ? "bg-green-600"
                    : "bg-slate-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}

          </div>

          {/* LEGEND */}
          <div className="mt-4 text-xs space-y-1 text-slate-400">
            <p>🟩 Answered</p>
            <p>🟦 Marked</p>
            <p>🟨 Current</p>
          </div>

        </div>

      </div>

    </div>
  );
              }
