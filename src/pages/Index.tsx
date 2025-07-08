import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import EffectsSection from "@/components/EffectsSection";
import UnitySection from "@/components/UnitySection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import TextSelectionShare from "@/components/TextSelectionShare";
import FloatingShareButton from "@/components/FloatingShareButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <HeroSection />
      <TimelineSection />
      <EffectsSection />
      <UnitySection />
      <ResourcesSection />
      <Footer />
      <TextSelectionShare />
      <FloatingShareButton />
    </div>
  );
};

export default Index;
