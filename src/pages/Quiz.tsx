import { useState, useEffect } from "react";

import questions from "../data/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const [marked, setMarked] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  const [visited, setVisited] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  const [submitted, setSubmitted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const saved = localStorage.getItem("quizData");

    if (saved) {
      const data = JSON.parse(saved);

      setAnswers(data.answers || []);
      setMarked(data.marked || []);
      setVisited(data.visited || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quizData",
      JSON.stringify({
        answers,
        marked,
        visited,
      })
    );
  }, [answers, marked, visited]);

  useEffect(() => {
    const copy = [...visited];
    copy[current] = true;
    setVisited(copy);
  }, [current]);

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

          <p className="text-5xl font-bold mt-4 text-amber-400">
            {score}
          </p>

          <p className="text-slate-400 mt-2">
            Final Score
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <Card
              title="Correct"
              value={correct}
              color="text-emerald-400"
            />

            <Card
              title="Wrong"
              value={wrong}
              color="text-red-400"
            />

            <Card
              title="Unattempted"
              value={unattempted}
              color="text-slate-400"
            />

            <Card
              title="Accuracy"
              value={`${accuracy}%`}
              color="text-amber-400"
            />
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h2 className="text-2xl font-bold mb-5">
            Question Review
          </h2>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAns = answers[idx];

              const correctAns = q.answer;

              const isCorrect =
                userAns === correctAns;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
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

                  <p className="text-sm mt-3">
                    Your Answer:
                    <span className="text-amber-400 ml-2">
                      {userAns === -1
                        ? "Not Attempted"
                        : q.options[userAns]}
                    </span>
                  </p>

                  <p className="text-sm mt-1">
                    Correct Answer:
                    <span className="text-emerald-400 ml-2">
                      {q.options[correctAns]}
                    </span>
                  </p>

                  <p className="text-sm mt-3 text-slate-300 leading-6">
                    <span className="text-fuchsia-400 font-semibold">
                      Explanation:
                    </span>{" "}
                    {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              localStorage.removeItem(
                "quizData"
              );

              window.location.reload();
            }}
            className="mt-6 px-5 py-3 bg-amber-500 text-black rounded-xl font-bold"
          >
            Restart Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[1fr_260px] gap-6">
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-fuchsia-400 text-sm">
              {q.subject}
            </p>

            <h1 className="text-2xl font-bold">
              Question {current + 1}
            </h1>
          </div>

          <div className="bg-amber-500 text-black px-4 py-2 rounded-lg font-bold">
            {minutes}:{seconds
              .toString()
              .padStart(2, "0")}
          </div>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <h2 className="text-xl leading-8">
            {q.question}
          </h2>
        </div>

        <div className="space-y-3 mt-5">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() =>
                selectOption(idx)
              }
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                answers[current] === idx
                  ? "bg-amber-500 text-black border-amber-500"
                  : "bg-slate-800 border-slate-700 hover:border-amber-400"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          <button
            disabled={current === 0}
            onClick={() =>
              setCurrent(current - 1)
            }
            className="px-4 py-2 bg-slate-700 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={
              current === questions.length - 1
            }
            onClick={() =>
              setCurrent(current + 1)
            }
            className="px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold disabled:opacity-50"
          >
            Next
          </button>

          <button
            onClick={() => {
              const copy = [...marked];

              copy[current] =
                !copy[current];

              setMarked(copy);
            }}
            className={`px-4 py-2 rounded-lg font-semibold ${
              marked[current]
                ? "bg-purple-600"
                : "bg-slate-700"
            }`}
          >
            {marked[current]
              ? "Unmark"
              : "Mark"}
          </button>

          <button
            onClick={() => {
              localStorage.removeItem(
                "quizData"
              );

              setSubmitted(true);
            }}
            className="ml-auto px-5 py-2 bg-emerald-600 rounded-lg font-bold"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 h-fit sticky top-5">
        <h2 className="text-xl font-bold mb-4">
          Questions
        </h2>

        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, idx) => {
            let color =
              "bg-slate-700";

            if (marked[idx]) {
              color = "bg-purple-600";
            } else if (
              answers[idx] !== -1
            ) {
              color = "bg-emerald-600";
            } else if (
              visited[idx]
            ) {
              color =
                "bg-yellow-500 text-black";
            }

            return (
              <button
                key={idx}
                onClick={() =>
                  setCurrent(idx)
                }
                className={`h-10 rounded-lg font-bold ${color}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="space-y-2 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-700"></div>
            <p>Unvisited</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500"></div>
            <p>Visited</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-600"></div>
            <p>Answered</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-600"></div>
            <p>Marked for Review</p>
          </div>
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

      <h2
        className={`text-2xl font-bold mt-2 ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}
