import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "SI unit of Force is?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: 0,
  },
  {
    id: 2,
    question: "Velocity is a?",
    options: [
      "Scalar quantity",
      "Vector quantity",
      "Neither",
      "Both",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "pH of pure water is?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const [submitted, setSubmitted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  const q = questions[current];

  const selectOption = (index: number) => {
    const copy = [...answers];
    copy[current] = index;
    setAnswers(copy);
  };

  const score = answers.reduce((acc, ans, i) => {
    return ans === questions[i].answer ? acc + 4 : acc;
  }, 0);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h1 className="text-3xl font-bold text-emerald-400">
          Test Submitted ✅
        </h1>

        <p className="mt-4 text-xl">
          Your Score: {score}
        </p>

        <p className="text-slate-400 mt-2">
          Correct Answers: {score / 4} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[1fr_250px] gap-6">
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Question {current + 1}
          </h1>

          <div className="bg-amber-500 text-black px-4 py-2 rounded-lg font-bold">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        <h2 className="text-xl mb-6">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => selectOption(idx)}
              className={`w-full text-left p-4 rounded-lg border ${
                answers[current] === idx
                  ? "bg-amber-500 text-black border-amber-500"
                  : "bg-slate-800 border-slate-700 hover:border-amber-400"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
            className="px-4 py-2 bg-slate-700 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={current === questions.length - 1}
            onClick={() => setCurrent(current + 1)}
            className="px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold disabled:opacity-50"
          >
            Next
          </button>

          <button
            onClick={() => setSubmitted(true)}
            className="ml-auto px-4 py-2 bg-emerald-600 rounded-lg font-semibold"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
        <h2 className="text-xl font-bold mb-4">
          Questions
        </h2>

        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-10 rounded-lg font-semibold ${
                answers[idx] !== -1
                  ? "bg-emerald-600"
                  : "bg-slate-700"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
