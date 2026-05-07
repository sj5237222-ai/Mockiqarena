import { useEffect, useState } from "react";
import { QuizAPI } from "../lib/api";
import ProfileBadge from "../components/ProfileBadge";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    QuizAPI.profile().then(setProfile);
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-5 items-center">
        <img
          src={profile.avatar}
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {profile.name}
          </h1>

          <div className="mt-2">
            <ProfileBadge tier={profile.tier} />
          </div>
        </div>
      </div>
    </div>
  );
}
