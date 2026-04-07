"use client";

import { useEffect, useState } from "react";

export default function BrandStatement() {
  const phrases = [
    {
      top: "We Are Hwal Moo Do",
      bottom: "Είμαστε το Hwal Moo Do",
    },
    {
      top: "Είμαστε το Hwal Moo Do",
      bottom: "We Are Hwal Moo Do",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Our Identity
        </p>

        <div className="mt-4 space-y-3">
          <h2
            key={`top-${index}`}
            className="animate-pulse text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          >
            {phrases[index].top}
          </h2>

          <p
            key={`bottom-${index}`}
            className="text-base font-medium text-white/85 sm:text-lg"
          >
            {phrases[index].bottom}
          </p>
        </div>
      </div>
    </section>
  );
}