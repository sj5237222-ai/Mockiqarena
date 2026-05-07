import { useEffect, useState } from "react";
import { QuizAPI } from "../lib/api";
import ProfileBadge from "../components/ProfileBadge";

export default function Leaderboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    QuizAPI.leaderboard().then((r: any) => {
      setUsers(r.users || []);
    });
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr>
            <th className="p-4">#</th>
            <th>User</th>
            <th>Accuracy</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr
              key={u.id}
              className="border-t border-slate-800"
            >
              <td className="p-4">{i + 1}</td>

              <td className="flex gap-3 items-center p-4">
                {u.name}
                <ProfileBadge tier={u.tier || "Bronze"} />
              </td>

              <td>{u.accuracy}%</td>
              <td>{u.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
