import { QuizAPI } from "./api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export async function startCheckout(
  plan: "monthly" | "yearly"
) {
  const order = await QuizAPI.createOrder(plan);

  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.orderId,
      name: "QuizArena Pro",
      theme: {
        color: "#f59e0b",
      },
      handler: async function (response: any) {
        const verify = await QuizAPI.verifyPayment(response);
        resolve(verify);
      },
      modal: {
        ondismiss: () => reject("Cancelled"),
      },
    });

    rzp.open();
  });
}
