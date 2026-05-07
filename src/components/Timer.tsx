import { useEffect, useState } from "react";

interface Props {
  seconds: number;
  onEnd: () => void;
}

export default function Timer({ seconds, onEnd }: Props) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time <= 0) {
      onEnd();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return (
    <div className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-lg font-bold">
      {min}:{sec}
    </div>
  );
}
