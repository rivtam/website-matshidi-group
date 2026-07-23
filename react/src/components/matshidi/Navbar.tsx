import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/matshidi-logo.png.asset.json";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  
  { id: "industries", label: "Industries" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60 shadow-elevated" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => go("hero")} className="flex items-center gap-2 group">
          <img src={logo.url} alt="Matshidi Group" className="h-9 w-auto sm:h-10 drop-shadow-[0_0_18px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105" />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go("contact")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.17_95)] to-[oklch(0.78_0.15_92)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.20_0.045_155)] shadow-gold-glow hover:brightness-110 transition-all"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left px-4 py-3 rounded-md hover:bg-secondary text-foreground/90"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.17_95)] to-[oklch(0.78_0.15_92)] px-5 py-3 text-sm font-semibold text-[oklch(0.20_0.045_155)]"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
