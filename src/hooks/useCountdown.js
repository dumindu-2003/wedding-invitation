import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function split(diff) {
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
}

export default function useCountdown(dateTime) {
  const target = useMemo(() => new Date(dateTime).getTime(), [dateTime]);
  const valid = Number.isFinite(target);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!valid) return undefined;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [valid]);

  if (!valid) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: false, isValid: false };
  }

  const diff = target - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true, isValid: true };
  }

  return { ...split(diff), isComplete: false, isValid: true };
}
