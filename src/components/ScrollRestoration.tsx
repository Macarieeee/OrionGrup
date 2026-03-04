import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const KEY = "scroll-positions-v1";

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function writePositions(obj: Record<string, number>) {
  sessionStorage.setItem(KEY, JSON.stringify(obj));
}

export default function ScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType(); // "POP" la back/forward

  useEffect(() => {
    const positions = readPositions();
    const key = location.pathname + location.search;

    // dacă e back/forward -> restaurăm
    if (navType === "POP") {
      const y = positions[key];
      // folosim rAF ca să prindem după ce s-a randat pagina
      requestAnimationFrame(() => {
        window.scrollTo(0, typeof y === "number" ? y : 0);
      });
      return;
    }

    // dacă e navigare normală -> sus
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [location.pathname, location.search, navType]);

  // salvăm poziția curentă la scroll (throttle simplu)
  useEffect(() => {
    const onScroll = () => {
      const positions = readPositions();
      const key = location.pathname + location.search;
      positions[key] = window.scrollY;
      writePositions(positions);
    };

    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [location.pathname, location.search]);

  return null;
}