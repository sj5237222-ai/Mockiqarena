export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome to QuizArena 🚀
        </h1>

        <p className="text-slate-300 mt-3">
          Practice NEET mock tests, daily DPPs and compete with toppers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">5000+</h2>
          <p className="text-slate-400">Questions</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">100+</h2>
          <p className="text-slate-400">Mock Tests</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="text-xl font-bold">24/7</h2>
          <p className="text-slate-400">Practice</p>
        </div>
      </div>
    </div>
  );
}
