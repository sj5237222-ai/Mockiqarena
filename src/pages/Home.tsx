export default function Home() {
  return (
    <div className="space-y-6">

      {/* HERO */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-amber-400">
          Welcome Back Aspirant 🚀
        </h1>
        <p className="text-slate-400 mt-2">
          Track progress, attempt mocks, improve weak topics.
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4">

        <Card title="Tests" value="12" />
        <Card title="Accuracy" value="78%" />
        <Card title="Streak" value="5🔥" />
        <Card title="Rank" value="#124" />

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">

        <h2 className="font-bold text-lg mb-3">Quick Actions</h2>

        <div className="flex gap-3">

          <button className="bg-amber-500 text-black px-4 py-2 rounded">
            Start Quiz
          </button>

          <button className="bg-slate-800 px-4 py-2 rounded">
            Daily DPP
          </button>

        </div>

      </div>

    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
      <p className="text-slate-400 text-sm">{title}</p>
      <h2 className="text-2xl font-bold text-amber-400">{value}</h2>
    </div>
  );
}
