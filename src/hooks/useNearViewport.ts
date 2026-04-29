import { useEffect, useRef, useState } from "react";

export function useNearViewport<T extends Element>(rootMargin = "600px") {
  const ref = useRef<T | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    if (isNearViewport) return;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isNearViewport, rootMargin]);

  return [ref, isNearViewport] as const;
}
