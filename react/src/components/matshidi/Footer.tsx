import logo from "@/assets/matshidi-logo.png.asset.json";

export function Footer() {
  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "approach", label: "Approach" },
    { id: "industries", label: "Industries" },
    { id: "why-us", label: "Why Us" },
    { id: "contact", label: "Contact" },
  ];
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logo.url} alt="Matshidi Group" className="h-10 w-auto mb-4" />
            <p className="max-w-sm text-sm text-foreground/65 leading-relaxed">
              Matshidi Group — AI, software and managed IT solutions helping African businesses
              innovate, automate and thrive.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Explore
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="tel:+27814760434" className="hover:text-primary">+27 81 476 0434</a></li>
              <li><a href="mailto:admin@matshidigroup.com" className="hover:text-primary">admin@matshidigroup.com</a></li>
              <li className="text-foreground/60">Olifantsfontein, Midrand<br />1666, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Matshidi Group. All rights reserved.</p>
          <p className="tracking-wider uppercase">Innovate · Transform · Thrive</p>
        </div>
      </div>
    </footer>
  );
}
