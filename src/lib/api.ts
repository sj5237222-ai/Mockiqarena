const BASE_URL = import.meta.env.VITE_LOVABLE_WEBHOOK_URL;

export async function api(action: string, payload: any = {}) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action, payload }),
  });

  if (!res.ok) throw new Error("API Error");

  return res.json();
}
