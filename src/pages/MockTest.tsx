import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizAPI } from "../lib/api";
import Timer from "../components/Timer";

export default function MockTest() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mock, setMock] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});

  useEffect(() => {
    if (id) {
      QuizAPI.getMock(id).then(setMock);
    }
  }, [id]);

  if (!mock) {
    return <p>Loading...</p>;
  }

  const question = mock.questions[index];

  async function submit() {
    const res = await QuizAPI.submitAttempt({
      mockId: id,
      answers,
    });

    navigate(`/analysis/${res.attemptId}`);
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Question {index + 1}
        </h2>

        <Timer
          seconds={mock.durationMin * 60}
          onEnd={submit}
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 className="text-lg font-semibold mb-4">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.options.map((opt: string, i: number) => (
            <label
              key={i}
              className="flex gap-3 p-4 rounded bg-slate-800 cursor-pointer"
            >
              <input
                type="radio"
                checked={answers[question.id] === i}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    [question.id]: i,
                  })
                }
              />

              <span>{opt}</span>
            </label>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() =>
              setIndex((p) => Math.max(0, p - 1))
            }
            className="bg-slate-700 px-4 py-2 rounded"
          >
            Previous
          </button>

          <button
            onClick={() =>
              setIndex((p) =>
                Math.min(mock.questions.length - 1, p + 1)
              )
            }
            className="bg-amber-500 text-black px-4 py-2 rounded"
          >
            Next
          </button>

          <button
            onClick={submit}
            className="ml-auto bg-emerald-600 px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
      }
