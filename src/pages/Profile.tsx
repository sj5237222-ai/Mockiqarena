import { useEffect, useState } from "react";
import { QuizAPI } from "../lib/api";

export default function Profile() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    QuizAPI.profile().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-4">

      <div className="bg-slate-900 p-5 rounded-xl">
        <h2>{data.name}</h2>
        <p>Rank: #{data.rank}</p>
        <p>Accuracy: {data.accuracy}%</p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">

        <Box title="Tests" value={data.tests} />
        <Box title="Streak" value={data.streak} />
        <Box title="Points" value={data.points} />

      </div>

    </div>
  );
}

function Box({ title, value }: any) {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <p>{title}</p>
      <h3 className="text-2xl text-amber-400">{value}</h3>
    </div>
  );
}
