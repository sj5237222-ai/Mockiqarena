import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6">

      {/* HERO */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome Back Aspirant 🚀
        </h1>

        <p className="text-slate-400 mt-2">
          Crack NEET with smart practice, mocks & analytics.
        </p>

        <Link
          to="/quiz"
          className="inline-block mt-5 bg-amber-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          Start Practice Test
        </Link>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4">

        <Stat label="Tests" value="24" />
        <Stat label="Accuracy" value="82%" />
        <Stat label="Streak" value="7🔥" />
        <Stat label="Rank" value="#98" />

      </div>

      {/* FEATURED SECTION */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-4 text-amber-400">
          Featured Mocks
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <MockCard title="NEET Full Test 1" questions={180} />
          <MockCard title="Physics Chapter Test" questions={45} />

        </div>

      </div>

    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:scale-105 transition">
      <p className="text-slate-400 text-sm">{label}</p>
      <h2 className="text-2xl font-bold text-amber-400">{value}</h2>
    </div>
  );
}

function MockCard({ title, questions }: any) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-amber-400 transition">
      <h3 className="font-bold">{title}</h3>
      <p className="text-slate-400 text-sm">{questions} Questions</p>

      <button className="mt-3 bg-amber-500 text-black px-3 py-1 rounded">
        Start
      </button>
    </div>
  );
}
