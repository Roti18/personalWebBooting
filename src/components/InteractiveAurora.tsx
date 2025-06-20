"use client";

import { useRef, useEffect } from "react";

export default function InteractiveAurora() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!blob1Ref.current || !blob2Ref.current) return;

      const { clientX, clientY } = event;

      blob1Ref.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );

      blob2Ref.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <div
          ref={blob1Ref}
          className="absolute h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-3xl"
        />
        <div
          ref={blob2Ref}
          className="absolute h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>
    </div>
  );
}
