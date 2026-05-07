const BASE_URL = import.meta.env.VITE_LOVABLE_WEBHOOK_URL;

export async function api(action: string, payload: any = {}) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, payload }),
  });

  if (!res.ok) throw new Error("API Error");

  return res.json();
}

export const QuizAPI = {
  mocks: () => api("mocks.list"),
  mock: (id: string) => api("mocks.get", { id }),
  submit: (data: any) => api("attempts.submit", data),
  analysis: (id: string) => api("attempts.analysis", { id }),
  profile: () => api("user.profile"),
  weak: () => api("user.weakTopics"),
  leaderboard: () => api("leaderboard.top"),
};
