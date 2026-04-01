import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiments />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        © 2026 Helios Lab. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
