import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-slate-950">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto p-6">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-400">
            QuizArena
          </h1>

          <button className="px-4 py-2 rounded bg-slate-800">
            Login
          </button>
        </div>

        {/* HERO */}
        <div className="mt-12 bg-slate-900 border border-slate-800 p-8 rounded-2xl">

          <h2 className="text-4xl font-bold">
            Crack NEET with
            <span className="text-amber-400"> Smart Practice</span>
          </h2>

          <p className="text-slate-400 mt-3">
            Mock tests • DPPs • Analytics • Weak topic improvement
          </p>

          <Link
            to="/quiz"
            className="inline-block mt-6 bg-amber-500 text-black px-6 py-3 rounded-xl font-bold"
          >
            Start Mock Test
          </Link>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">

          <Card title="Questions" value="5000+" />
          <Card title="Mocks" value="100+" />
          <Card title="Students" value="50K+" />

        </div>

        {/* SUBJECTS */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Subjects
          </h3>

          <div className="grid md:grid-cols-3 gap-4">

            <Subject name="Physics" color="blue" />
            <Subject name="Chemistry" color="green" />
            <Subject name="Biology" color="pink" />

          </div>
        </div>

      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
      <p className="text-slate-400">{title}</p>
      <h2 className="text-2xl font-bold text-amber-400">{value}</h2>
    </div>
  );
}

function Subject({ name, color }: any) {
  return (
    <div className={`p-5 rounded-xl bg-${color}-600/20 border border-${color}-500`}>
      <h2 className="font-bold">{name}</h2>
      <p className="text-sm text-slate-400">Practice MCQs & PYQs</p>
    </div>
  );
}
