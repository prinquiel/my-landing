import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { About } from "@/components/ui/about";
import { Servicios } from "@/components/ui/servicios";
import { Testimonials } from "@/components/ui/testimonials";
import { Contacto } from "@/components/ui/contacto";
import { Chatbox } from "@/components/ui/chatbox";

export default async function HomePage() {
  return (
    <div className="relative page-borders">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Servicios />
        <Testimonials />
        <Contacto />
      </main>
      <Chatbox />
    </div>
  );
}