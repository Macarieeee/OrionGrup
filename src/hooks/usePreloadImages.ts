import { useEffect, useMemo, useState } from "react";

type Options = {
  timeoutMs?: number; // fallback să nu rămână blocat dacă un URL e mort
};

export function usePreloadImages(urls: string[], options: Options = {}) {
  const { timeoutMs = 8000 } = options;

  const stableUrls = useMemo(
    () => Array.from(new Set(urls.filter(Boolean))),
    [urls]
  );

  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (stableUrls.length === 0) {
      setReady(true);
      return;
    }

    setReady(false);

    const loadOne = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();

        const done = () => resolve();
        img.onload = done;
        img.onerror = done;

        img.src = src;
      });

    const timeoutPromise = new Promise<void>((resolve) => {
      const t = window.setTimeout(resolve, timeoutMs);
      // cleanup handled below by cancelled flag
      // (nu e critic să clearTimeout aici)
    });

    Promise.race([
      Promise.all(stableUrls.map(loadOne)).then(() => undefined),
      timeoutPromise,
    ]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [stableUrls, timeoutMs]);

  return { ready, total: stableUrls.length };
}
