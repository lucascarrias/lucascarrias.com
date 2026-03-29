import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="space-y-24 px-6 max-w-3xl mx-auto">
        <Hero />
        <About />
        <Career />
        <Contact />
      </div>
    </div>
  );
}
