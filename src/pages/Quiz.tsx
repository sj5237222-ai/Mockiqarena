import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      q: "What is acceleration due to gravity?",
      options: ["9.8", "10", "5", "0"],
      answer: 0,
    },
    {
      q: "Water formula?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      answer: 1,
    },
  ];

  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [marked, setMarked] = useState<any>({});
  const [time, setTime] = useState(60 * 30);

  const q = questions[i];

  useEffect(() => {
    if (time === 0) finish();
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);

  const format = () => `${Math.floor(time / 60)}:${time % 60}`;

  const select = (idx: number) =>
    setAnswers({ ...answers, [i]: idx });

  const finish = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) score++;
    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
        answers,
        questions,
      },
    });
  };

  return (
    <div className="grid md:grid-cols-4 gap-4">

      {/* QUESTION AREA */}
      <div className="md:col-span-3 bg-slate-900 p-5 rounded-xl">

        <div className="flex justify-between mb-4">
          <h2>Q{i + 1}</h2>
          <span className="bg-amber-500 text-black px-3 rounded">
            {format()}
          </span>
        </div>

        <h3 className="text-xl mb-4">{q.q}</h3>

        {q.options.map((o, idx) => (
          <button
            key={idx}
            onClick={() => select(idx)}
            className={`block w-full p-3 mb-2 rounded ${
              answers[i] === idx ? "bg-amber-500 text-black" : "bg-slate-800"
            }`}
          >
            {o}
          </button>
        ))}

        <div className="flex gap-2 mt-4">
          <button onClick={() => setI(i - 1)} className="bg-slate-700 px-3">
            Prev
          </button>

          <button
            onClick={() => setMarked({ ...marked, [i]: true })}
            className="bg-purple-600 px-3"
          >
            Mark
          </button>

          <button onClick={() => setI(i + 1)} className="bg-slate-700 px-3">
            Next
          </button>

          <button onClick={finish} className="bg-green-500 px-3 ml-auto">
            Submit
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="bg-slate-900 p-3 rounded-xl">
        <div className="grid grid-cols-4 gap-2">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`p-2 rounded ${
                marked[idx]
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
      </div>
    </div>
  );
}
