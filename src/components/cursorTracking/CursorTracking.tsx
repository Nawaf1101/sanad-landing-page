import { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";

const CursorTracking = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.left = `${e.clientX}px`;
          dotRef.current.style.top = `${e.clientY}px`;
        }
      });
    };
  
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <Flex
      ref={dotRef}
      display={{base:"none",md:"flex"}}
      position="fixed"
      top={0}
      left={0}
      width="200px"
      height="200px"
      bg="rgba(99, 220, 160)"
      borderRadius="full"
      filter="blur(80px)"
      opacity={0.8}
      transform="translate(-50%, -50%)"
      pointerEvents="none"
      zIndex={9999}
      style={{
        contain: "layout style",
        backfaceVisibility: "hidden",
        willChange: "transform, top, left",
      }}
    />
  );
};

export default CursorTracking;
