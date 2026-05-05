"use client";

import { useEffect, useState } from "react";

export default function HeroIntro() {

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % 2);
  }, 6000); // κάθε 4 sec

  return () => clearInterval(interval);
}, []);

const statements = [
  "WE ARE HWAL MOO DO",
  "ΕΙΜΑΣΤΕ ΤΟ HWAL MOO DO",
];

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black text-white">
      
      {/* BACKGROUND LOGO */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/images/logo.png"
          alt="A.C. Athina logo"
          className={`w-[720px] max-w-[95%] transition-all duration-1000 ${
            index === 0 ? "opacity-30 scale-100" : "opacity-10 scale-105"
          }`}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-400">
          ΚΑΛΩΣ ΗΛΘΑΤΕ
        </p>

        <h1 className="text-4xl font-light tracking-[0.4em] md:text-6xl">
          <span
            key={index}
            className="block transition-all duration-700 animate-fade"
          >
            {statements[index]}
          </span>
        </h1>

        <div className="mt-10">
          <a
            href="/programs"
            className="inline-block border border-white px-6 py-3 text-sm tracking-widest transition hover:bg-white hover:text-black"
          >
            ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
          </a>
        </div>
      </div>
    </section>
  );
}