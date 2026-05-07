import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    subject: "Physics",
    question: "SI unit of Force is?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: 0,
  },
  {
    id: 2,
    subject: "Physics",
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
    subject: "Chemistry",
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
    const saved = localStorage.getItem("quizAnswers");

    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quizAnswers",
      JSON.stringify(answers)
    );
  }, [answers]);

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

  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  answers.forEach((ans, i) => {
    if (ans === -1) {
      unattempted++;
    } else if (ans === questions[i].answer) {
      score += 4;
      correct++;
    } else {
      score -= 1;
      wrong++;
    }
  });

  const accuracy =
    correct + wrong === 0
      ? 0
      : Math.round(
          (correct / (correct + wrong)) * 100
        );

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h1 className="text-3xl font-bold text-emerald-400">
            Test Submitted ✅
          </h1>

          <p className="text-4xl font-bold mt-4 text-amber-400">
            {score} Marks
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <Card title="Correct" value={correct} color="text-emerald-400" />
            <Card title="Wrong" value={wrong} color="text-red-400" />
            <Card title="Unattempted" value={unattempted} color="text-slate-400" />
            <Card title="Accuracy" value={`${accuracy}%`} color="text-amber-400" />
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h2 className="text-2xl font-bold mb-4">
            Question Review
          </h2>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAns = answers[idx];

              const correctAns = q.answer;

              const isCorrect = userAns === correctAns;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border ${
                    userAns === -1
                      ? "border-slate-700"
                      : isCorrect
                      ? "border-emerald-500"
                      : "border-red-500"
                  }`}
                >
                  <p className="font-semibold">
                    Q{idx + 1}. {q.question}
                  </p>

                  <p className="text-sm mt-2">
                    Your Answer:{" "}
                    <span className="text-amber-400">
                      {userAns === -1
                        ? "Not Attempted"
                        : q.options[userAns]}
                    </span>
                  </p>

                  <p className="text-sm">
                    Correct Answer:{" "}
                    <span className="text-emerald-400">
                      {q.options[correctAns]}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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

        <p className="text-sm text-fuchsia-400 mb-2">
          {q.subject}
        </p>

        <h2 className="text-xl mb-6">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => selectOption(idx)}
              className={`w-full text-left p-4 rounded-lg border transition ${
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
            onClick={() => {
              localStorage.removeItem("quizAnswers");
              setSubmitted(true);
            }}
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

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: any;
  color: string;
}) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`text-2xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
                  }
