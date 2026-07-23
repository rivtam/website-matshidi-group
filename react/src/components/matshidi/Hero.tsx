import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { SplineScene } from "./SplineScene";
import imgHero from "@/assets/img-hero.jpg";


export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen overflow-hidden pt-24">
      {/* 3D scene background */}
      <div className="absolute inset-0">
        <SplineScene scene="https://prod.spline.design/xZaBqxKPqYw3aM8h/scene.splinecode" />
      </div>

      {/* Vignette + tech grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]" />
      <div className="pointer-events-none absolute inset-0 grid-tech opacity-[0.07]" />

      {/* Floating gold orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.15 92 / 0.35), transparent 70%)",
          y,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.42 0.09 152 / 0.55), transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, -80]),
        }}
      />

      {/* Floating phone showcase (desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="pointer-events-none absolute right-[-4%] top-1/2 z-[5] hidden xl:block w-[380px] -translate-y-1/2"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden ring-1 ring-primary/30 shadow-gold-glow">
          <img
            src={imgHero}
            alt="AI booking assistant chat on WhatsApp"
            width={1408}
            height={1408}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </motion.div>

      <motion.div

        style={{ opacity, scale }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-glass px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Matshidi Group · Innovate · Transform · Thrive
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          INNOVATE.{" "}
          <span className="text-gold-gradient">AUTOMATE.</span>
          <br />
          TRANSFORM.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-8 max-w-2xl text-lg text-foreground/80 sm:text-xl"
        >
          Intelligent Solutions. Stronger Businesses.
          <br />
          <span className="text-muted-foreground text-base">
            AI, software and managed IT built for African enterprises ready to scale.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => scrollTo("services")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.17_95)] to-[oklch(0.78_0.15_92)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.20_0.045_155)] shadow-gold-glow transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Explore Our Solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-glass px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary transition-all hover:-translate-y-0.5"
          >
            Book a Consultation
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary/70 hover:text-primary"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-xs font-medium tracking-wider uppercase"
        >
          Scroll
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
