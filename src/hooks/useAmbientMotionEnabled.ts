import { useEffect, useState } from "react";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SMALL_SCREEN_QUERY = "(max-width: 1024px)";

function canRunAmbientMotion() {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  const smallScreen = window.matchMedia(SMALL_SCREEN_QUERY).matches;
  const saveData = typeof navigator !== "undefined"
    ? Boolean((navigator as NavigatorWithConnection).connection?.saveData)
    : false;
  const lowCpu = typeof navigator !== "undefined" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const hidden = typeof document !== "undefined" && document.visibilityState !== "visible";

  return !(prefersReducedMotion || smallScreen || saveData || lowCpu || hidden);
}

export function useAmbientMotionEnabled(enabled = true) {
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setMotionEnabled(false);
      return;
    }

    const sync = () => setMotionEnabled(canRunAmbientMotion());
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    const smallScreen = window.matchMedia(SMALL_SCREEN_QUERY);
    const connection = (navigator as NavigatorWithConnection).connection;

    sync();
    reducedMotion.addEventListener("change", sync);
    smallScreen.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    connection?.addEventListener?.("change", sync);

    return () => {
      reducedMotion.removeEventListener("change", sync);
      smallScreen.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      connection?.removeEventListener?.("change", sync);
    };
  }, [enabled]);

  return motionEnabled;
}
