import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import EffectsSection from "@/components/EffectsSection";
import UnitySection from "@/components/UnitySection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <EffectsSection />
      <UnitySection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
