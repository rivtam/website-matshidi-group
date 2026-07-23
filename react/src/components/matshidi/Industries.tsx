import { motion } from "framer-motion";
import {
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  Landmark,
  Truck,
  GraduationCap,
  Briefcase,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useTilt } from "@/hooks/useTilt";

type Industry = { icon: LucideIcon; name: string; uses: string[] };

const industries: Industry[] = [
  { icon: ShoppingBag, name: "Retail & E-commerce", uses: ["AI customer support", "Automated order flows"] },
  { icon: Stethoscope, name: "Healthcare", uses: ["Patient bookings & reminders", "Practice management systems"] },
  { icon: UtensilsCrossed, name: "Hospitality", uses: ["Reservations automation", "Guest experience apps"] },
  { icon: Landmark, name: "Financial Services", uses: ["Customer onboarding", "Secure workflow automation"] },
  { icon: Truck, name: "Logistics & Supply Chain", uses: ["Fleet & route platforms", "Tracking & notifications"] },
  { icon: GraduationCap, name: "Education", uses: ["Learner engagement bots", "Enrolment & LMS builds"] },
  { icon: Briefcase, name: "Professional Services", uses: ["Client portals", "Consulting automations"] },
  { icon: Building2, name: "Government & Public Sector", uses: ["Citizen service portals", "Digital transformation"] },
];

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeader
        eyebrow="Industries"
        title="Sectors we serve"
        description="Deep experience across regulated, customer-facing and operations-heavy industries — with reusable playbooks that accelerate delivery."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <IndustryCard key={ind.name} industry={ind} index={i} />
        ))}
      </div>
    </Section>
  );
}

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);
  const Icon = industry.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group h-full rounded-2xl bg-glass p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-gold-glow will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25"
          style={{ transform: "translateZ(25px)" }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-3 text-base font-bold" style={{ transform: "translateZ(15px)" }}>
          {industry.name}
        </h3>
        <ul className="space-y-1.5">
          {industry.uses.map((u) => (
            <li key={u} className="flex items-start gap-2 text-xs text-foreground/60">
              <span className="mt-1 h-1 w-1 rounded-full bg-primary shrink-0" /> {u}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
