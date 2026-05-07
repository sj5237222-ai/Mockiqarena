import { useState } from "react";
import { startCheckout } from "../lib/razorpay";

export default function Payment() {
  const [loading, setLoading] = useState(false);

  async function buy(plan: "monthly" | "yearly") {
    setLoading(true);

    try {
      await startCheckout(plan);
      alert("Payment Success");
    } catch (err) {
      alert("Payment Failed");
    }

    setLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Plan
        title="Monthly"
        price="₹199"
        onClick={() => buy("monthly")}
        loading={loading}
      />

      <Plan
        title="Yearly"
        price="₹1499"
        onClick={() => buy("yearly")}
        loading={loading}
      />
    </div>
  );
}

function Plan({ title, price, onClick, loading }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="text-4xl text-amber-400 mt-3">
        {price}
      </p>

      <button
        disabled={loading}
        onClick={onClick}
        className="w-full bg-amber-500 text-black py-3 rounded mt-5 font-bold"
      >
        Subscribe
      </button>
    </div>
  );
}
