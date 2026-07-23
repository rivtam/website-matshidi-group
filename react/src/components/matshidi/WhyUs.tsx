import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Award,
  Handshake,
  Sparkles,
  Zap,
  TrendingDown,
  Clock,
  Smile,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import imgAfrica from "@/assets/img-africa.jpg";


const values: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Lightbulb, title: "Innovation", body: "We stay on the edge of AI and cloud so you don't have to." },
  { icon: ShieldCheck, title: "Trust", body: "Security, compliance and transparency at every step." },
  { icon: Award, title: "Excellence", body: "Senior teams, rigorous quality gates, uncompromising delivery." },
  { icon: Handshake, title: "Partnership", body: "We invest in your outcomes — not just the deliverables." },
  { icon: Sparkles, title: "Impact", body: "Every engagement is measured on business value created." },
  { icon: Zap, title: "Agility", body: "Fast, adaptive teams that thrive under change." },
];

const outcomes = [
  { icon: TrendingDown, label: "Lower Costs" },
  { icon: Clock, label: "Save Time" },
  { icon: Smile, label: "Delight Customers" },
  { icon: Rocket, label: "Drive Growth" },
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <SectionHeader
        eyebrow="Why Matshidi"
        title="A growth partner, not just a vendor"
        description="Six values that shape how we work, and four outcomes we consistently deliver for the businesses we serve."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="rounded-2xl bg-glass p-6 hover:border-primary/40 transition-colors"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1.5 text-lg font-bold">{v.title}</h3>
            <p className="text-sm text-foreground/65 leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {outcomes.map((o) => (
          <div
            key={o.label}
            className="flex items-center gap-3 rounded-xl bg-glass px-5 py-4"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-[oklch(0.20_0.045_155)]">
              <o.icon className="h-4.5 w-4.5" />
            </div>
            <span className="font-semibold text-sm sm:text-base">{o.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-14 relative overflow-hidden rounded-3xl border border-primary/25 p-10 sm:p-16 text-center min-h-[320px] flex items-center justify-center"
      >
        <img
          src={imgAfrica}
          alt="African city skyline with digital network overlay"
          loading="lazy"
          width={1808}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/85" />
        <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_center,oklch(0.78_0.15_92_/_0.18),transparent_60%)]" />
        <p className="relative mx-auto max-w-3xl font-display text-2xl sm:text-3xl font-bold leading-snug">
          We're building the digital backbone of the next generation of{" "}
          <span className="text-gold-gradient">African businesses</span> — one intelligent solution at a time.
        </p>
      </motion.div>

    </Section>
  );
}
