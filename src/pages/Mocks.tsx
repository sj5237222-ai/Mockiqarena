const mocks = [
  {
    id: 1,
    title: "NEET Full Mock 1",
    questions: 180,
    duration: "3 Hours",
  },
  {
    id: 2,
    title: "Physics Test",
    questions: 45,
    duration: "45 Min",
  },
];

export default function Mocks() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Mock Tests
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {mocks.map((mock) => (
          <div
            key={mock.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <h2 className="text-xl font-bold text-amber-400">
              {mock.title}
            </h2>

            <p className="text-slate-400 mt-2">
              {mock.questions} Questions
            </p>

            <p className="text-slate-400">
              {mock.duration}
            </p>

            <button className="mt-4 px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
