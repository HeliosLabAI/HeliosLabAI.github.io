import HeroSection from "@/components/HeroSection";
import PillarNav from "@/components/PillarNav";
import PillarOne from "@/components/PillarOne";
import PillarTwo from "@/components/PillarTwo";
import PillarThree from "@/components/PillarThree";
import PillarFour from "@/components/PillarFour";
import PillarFive from "@/components/PillarFive";
import PillarSix from "@/components/PillarSix";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import { Link } from "react-router-dom";

const Index = () => (
  <main className="bg-background">
    {/* Navigation */}
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      <Link
        to="/"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="/feedback"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        Feedback
      </Link>
      <Link
        to="/team"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        Team
      </Link>
      <button className="text-xs text-foreground font-semibold">
        Research
      </button>
    </div>
    
    <HeroSection />
    <PillarNav />
    <div id="pillar-1"><PillarOne /></div>
    <Divider />
    <div id="pillar-2"><PillarTwo /></div>
    <Divider />
    <div id="pillar-3"><PillarThree /></div>
    <Divider />
    <div id="pillar-4"><PillarFour /></div>
    <Divider />
    <div id="pillar-5"><PillarFive /></div>
    <Divider />
    <div id="pillar-6"><PillarSix /></div>
    <MissionSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
