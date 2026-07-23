import { motion } from "framer-motion";
import { CalendarCheck, Users, Clock, TrendingUp, Heart } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import imgSme from "@/assets/img-sme.jpg";


const outcomes = [
  { icon: Users, label: "More Customers", body: "Automated bookings and AI assistants keep pipelines full." },
  { icon: Clock, label: "More Time Back", body: "Automate repetitive work and reclaim hours every week." },
  { icon: TrendingUp, label: "More Profit", body: "Higher conversion, lower overheads, better margins." },
  { icon: Heart, label: "More Impact", body: "Delight customers and grow your reputation." },
];

export function SmeThrive() {
  return (
    <Section id="sme" className="relative">
      <SectionHeader
        eyebrow="Built for SMEs"
        title="We help small businesses thrive"
        description="From our AI-powered Smart Bookings system to end-to-end automation, we hand SMEs the same technology advantage that used to belong to enterprise."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] items-center rounded-3xl overflow-hidden bg-glass p-4 sm:p-6"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={imgSme}
            alt="African small business owner receiving a booking confirmation on WhatsApp"
            loading="lazy"
            width={1408}
            height={1200}
            className="h-full w-full object-cover aspect-[7/6]"
          />
        </div>
        <div className="px-2 sm:px-6 py-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-wider text-primary mb-4">
            Real SME impact
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-3">
            Enterprise-grade AI, at <span className="text-gold-gradient">SME-friendly cost</span>
          </h3>
          <p className="text-foreground/75 leading-relaxed">
            From boutique retail to clinics and hospitality, our automations capture every enquiry,
            confirm bookings on WhatsApp, and follow up until the customer walks in the door.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-stretch">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-glass p-8 sm:p-10"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold text-[oklch(0.20_0.045_155)] shadow-gold-glow">
            <CalendarCheck className="h-7 w-7" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-3">Smart Bookings</h3>
          <p className="text-foreground/75 leading-relaxed mb-6">
            An AI-driven booking assistant that handles enquiries on WhatsApp and web, qualifies
            leads, schedules appointments and reminds customers — automatically. Fewer no-shows,
            more revenue, zero admin.
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/85">
            {[
              "24/7 conversational booking on WhatsApp & web",
              "Automated reminders and rescheduling",
              "Integrated calendar, payments and CRM",
              "Insights dashboard and customer history",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-glass p-6 hover:border-primary/40 transition-colors"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                <o.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-1.5">{o.label}</h4>
              <p className="text-sm text-foreground/65 leading-relaxed">{o.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
