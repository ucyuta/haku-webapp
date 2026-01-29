import { useEffect, useRef, useState } from "react";

export function useHideOnScroll(options?: {
  threshold?: number;
  topAlwaysShow?: number;
}) {
  const threshold = options?.threshold ?? 12;
  const topAlwaysShow = options?.topAlwaysShow ?? 8;

  const [show, setShow] = useState(true);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const lastY = lastYRef.current;
        const delta = y - lastY;

        if (y <= topAlwaysShow) {
          setShow(true);
        } else if (Math.abs(delta) >= threshold) {
          if (delta > 0) setShow(false);
          else setShow(true);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topAlwaysShow]);

  return show;
}
