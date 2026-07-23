import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import imgAbout from "@/assets/img-about.jpg";



export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title="Meet Matshidi Group"
        description="A leading African digital transformation and AI solutions company — helping enterprises, SMEs and public sector organisations modernise, automate and grow with intelligent technology."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 overflow-hidden rounded-3xl border border-primary/20 shadow-2xl"
      >
        <img
          src={imgAbout}
          alt="Matshidi Group team reviewing AI analytics dashboards"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-[380px] w-full object-cover sm:h-[460px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
          <p className="max-w-xl font-display text-xl sm:text-2xl font-semibold leading-snug">
            Enterprise-grade AI that automates <span className="text-gold-gradient">engagement, sales and support</span> — built for African businesses.
          </p>
        </div>
      </motion.div>



      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {[
          {
            icon: Eye,
            title: "Our Vision",
            body:
              "To be Africa's most trusted digital transformation partner — building intelligent solutions that unlock growth, resilience and impact for every business we serve.",
          },
          {
            icon: Target,
            title: "Our Mission",
            body:
              "We combine AI, software engineering and expert delivery to help organisations innovate faster, operate leaner and serve customers better across the continent.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl bg-glass p-8 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
              <c.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">{c.title}</h3>
            <p className="text-foreground/75 leading-relaxed">{c.body}</p>
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-70 opacity-40" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
