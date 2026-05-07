import { api } from "../lib/api";

export default function Payment() {
  const buy = async () => {
    const order = await api("payment.create", { plan: "pro" });

    const rzp = new (window as any).Razorpay({
      key: "YOUR_KEY",
      order_id: order.id,
      handler: () => alert("Success"),
    });

    rzp.open();
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2>Upgrade to Pro</h2>

      <button
        onClick={buy}
        className="bg-amber-500 text-black px-4 py-2 rounded"
      >
        Buy Pro
      </button>

    </div>
  );
}
