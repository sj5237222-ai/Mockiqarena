import { useEffect, useState } from "react";
import { QuizAPI } from "../lib/api";

export default function Home() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    QuizAPI.profile().then(setProfile);
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card title="Streak" value={`${profile.streak} 🔥`} />
        <Card title="Tests" value={profile.tests} />
        <Card title="Accuracy" value={`${profile.accuracy}%`} />
        <Card title="Points" value={profile.points} />
      </div>

      <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
        <h2 className="text-xl font-bold mb-3">
          Daily DPP
        </h2>

        <p>
          Practice your weak topics with AI-powered
          personalized questions.
        </p>
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
}
