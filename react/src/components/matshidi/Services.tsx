import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessagesSquare,
  Package,
  ClipboardList,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useTilt } from "@/hooks/useTilt";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Service = {
  icon: LucideIcon;
  title: string;
  short: string;
  bullets: string[];
  detail: string;
};

const services: Service[] = [
  {
    icon: MessagesSquare,
    title: "Conversational AI Solutions",
    short:
      "AI assistants and chatbots that engage customers, automate support and drive bookings 24/7.",
    bullets: ["WhatsApp & web assistants", "Smart Bookings automation", "Multi-language support"],
    detail:
      "We design and deploy production-grade conversational AI — from customer service chatbots and voice bots to intelligent booking assistants. Integrated with your CRM, calendar and payment stack to remove friction and convert conversations into revenue.",
  },
  {
    icon: Package,
    title: "Product Management Services",
    short:
      "Strategy, discovery and roadmap execution for digital products that customers actually use.",
    bullets: ["Vision & roadmap", "Discovery & research", "Metrics & iteration"],
    detail:
      "Embedded product leadership that aligns business goals, user needs and delivery. From opportunity sizing and roadmap definition to launch, adoption and continuous iteration — we own the outcome, not just the artefacts.",
  },
  {
    icon: ClipboardList,
    title: "Project Management Services",
    short:
      "Certified project delivery that keeps scope, time and cost predictable — even at scale.",
    bullets: ["Agile & hybrid delivery", "Governance & reporting", "Risk & change control"],
    detail:
      "Senior programme and project managers who run complex, cross-functional initiatives to plan. We standardise governance, tighten reporting and de-risk execution across technology, operations and transformation programmes.",
  },
  {
    icon: Code2,
    title: "Software Development",
    short:
      "Custom web, mobile and cloud platforms engineered for performance, security and scale.",
    bullets: ["Web & mobile apps", "APIs & integrations", "Cloud-native architecture"],
    detail:
      "Full-stack product engineering — modern web, mobile and backend systems built on cloud-native architectures. Secure, observable and built to scale from MVP to enterprise workloads.",
  },
  {
    icon: ShieldCheck,
    title: "IT Support & Managed Services",
    short:
      "Proactive IT operations, infrastructure and cybersecurity so your team can focus on growth.",
    bullets: ["24/7 monitoring", "Cloud & endpoint management", "Cybersecurity & compliance"],
    detail:
      "Fully managed IT — helpdesk, infrastructure, cloud, endpoints and cybersecurity — with clear SLAs and continuous optimisation. Predictable costs, no more firefighting.",
  },
];

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Core Services"
        title="Solutions that move the needle"
        description="Five focused offerings that combine AI, engineering and expert delivery — each designed to unlock measurable business outcomes."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} onOpen={() => setOpenIdx(i)} />
        ))}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-lg bg-surface border-border/60">
          {openIdx !== null && (
            <>
              <DialogHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  {(() => {
                    const Icon = services[openIdx].icon;
                    return <Icon className="h-6 w-6" />;
                  })()}
                </div>
                <DialogTitle className="text-2xl font-display">
                  {services[openIdx].title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/75 leading-relaxed pt-2">
                  {services[openIdx].detail}
                </DialogDescription>
              </DialogHeader>
              <ul className="mt-4 space-y-2">
                {services[openIdx].bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: Service;
  index: number;
  onOpen: () => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onOpen}
        className="group relative h-full cursor-pointer rounded-2xl bg-glass p-7 transition-[transform,box-shadow,border-color] duration-300 will-change-transform hover:shadow-gold-glow hover:border-primary/50"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div
          className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 text-primary ring-1 ring-primary/30"
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3
          className="mb-3 text-xl font-bold leading-tight"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.title}
        </h3>
        <p
          className="mb-5 text-sm text-foreground/70 leading-relaxed"
          style={{ transform: "translateZ(15px)" }}
        >
          {service.short}
        </p>

        <ul className="mb-6 space-y-1.5" style={{ transform: "translateZ(10px)" }}>
          {service.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs text-foreground/60">
              <span className="h-1 w-1 rounded-full bg-primary" /> {b}
            </li>
          ))}
        </ul>

        <div
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          style={{ transform: "translateZ(25px)" }}
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
