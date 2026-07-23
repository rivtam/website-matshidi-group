import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/matshidi/Navbar";
import { Hero } from "@/components/matshidi/Hero";
import { About } from "@/components/matshidi/About";
import { Services } from "@/components/matshidi/Services";
import { SmeThrive } from "@/components/matshidi/SmeThrive";

import { Industries } from "@/components/matshidi/Industries";
import { WhyUs } from "@/components/matshidi/WhyUs";
import { Contact } from "@/components/matshidi/Contact";
import { Footer } from "@/components/matshidi/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SmeThrive />
        
        <Industries />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
