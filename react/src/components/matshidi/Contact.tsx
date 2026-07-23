import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, Globe, MapPin, Send, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Thanks — we'll be in touch shortly.", {
      description: `Received your message, ${data.name.split(" ")[0]}.`,
    });
    reset();
  };

  const details = [
    { icon: Phone, label: "Phone", value: "+27 81 476 0434", href: "tel:+27814760434" },
    { icon: Mail, label: "Email", value: "admin@matshidigroup.com", href: "mailto:admin@matshidigroup.com" },
    { icon: Globe, label: "Website", value: "www.matshidigroup.com", href: "https://www.matshidigroup.com" },
    { icon: MapPin, label: "Address", value: "Olifantsfontein, Midrand, 1666, South Africa" },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's build something remarkable"
        description="Tell us about your goals — we'll come back within one working day with a plan to move forward."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-glass p-6 sm:p-8 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/70">
                Name
              </label>
              <Input
                {...register("name")}
                placeholder="Your full name"
                className="bg-background/40 border-border/60 h-11"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/70">
                Email
              </label>
              <Input
                type="email"
                {...register("email")}
                placeholder="you@company.com"
                className="bg-background/40 border-border/60 h-11"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/70">
              Company (optional)
            </label>
            <Input
              {...register("company")}
              placeholder="Company name"
              className="bg-background/40 border-border/60 h-11"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/70">
              How can we help?
            </label>
            <Textarea
              {...register("message")}
              rows={5}
              placeholder="Tell us about your project, goals or challenges…"
              className="bg-background/40 border-border/60 resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.17_95)] to-[oklch(0.78_0.15_92)] px-6 py-3 text-sm font-semibold text-[oklch(0.20_0.045_155)] shadow-gold-glow transition-all hover:brightness-110 disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface via-surface-2 to-surface p-6 sm:p-8 border border-primary/20"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <h3 className="text-xl font-display font-bold mb-6">Reach us directly</h3>
          <ul className="space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                  <d.icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
                    {d.label}
                  </div>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm sm:text-base text-foreground hover:text-primary transition-colors break-words"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <div className="text-sm sm:text-base text-foreground break-words">{d.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a
            href="mailto:admin@matshidigroup.com?subject=Book%20a%20Consultation"
            className="mt-8 group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
