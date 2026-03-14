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

const Index = () => (
  <main className="bg-background">
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
