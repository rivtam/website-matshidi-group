import { motion } from "framer-motion";

export function SplineScene(_: { scene?: string }) {
  return <SceneFallback />;
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-[0.18]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, color-mix(in oklab, var(--gold) 35%, transparent), transparent 30%, color-mix(in oklab, var(--emerald) 45%, transparent) 55%, transparent 75%, color-mix(in oklab, var(--gold) 35%, transparent))",
          filter: "blur(40px)",
          opacity: 0.55,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[26vmin] w-[26vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
