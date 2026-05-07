const WEBHOOK = import.meta.env.VITE_LOVABLE_WEBHOOK_URL;

export async function api(action: string, payload: any = {}) {
  const res = await fetch(WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action,
      payload,
    }),
  });

  if (!res.ok) {
    throw new Error(`API Error ${res.status}`);
  }

  return await res.json();
}

export const QuizAPI = {
  listMocks: () => api("mocks.list"),

  getMock: (id: string) => api("mocks.get", { id }),

  submitAttempt: (data: any) => api("attempts.submit", data),

  getAnalysis: (attemptId: string) =>
    api("attempts.analysis", { attemptId }),

  leaderboard: () => api("leaderboard.top"),

  profile: () => api("user.profile"),

  weakTopics: () => api("user.weakTopics"),

  dailyDPP: () => api("dpp.today"),

  createOrder: (plan: string) =>
    api("payments.createOrder", { plan }),

  verifyPayment: (data: any) =>
    api("payments.verify", data),
};
