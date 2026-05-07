export default function ProfileBadge({
  tier,
}: {
  tier: "Bronze" | "Silver" | "Gold" | "Pro";
}) {
  const styles = {
    Bronze: "bg-orange-600",
    Silver: "bg-slate-300 text-black",
    Gold: "bg-yellow-500 text-black",
    Pro: "bg-fuchsia-500",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-bold ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
