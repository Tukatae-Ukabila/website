import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kenya-unity-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-heritage/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Understanding
          <span className="block bg-gradient-to-r from-unity to-white bg-clip-text text-transparent">
            Tribalism in Kenya
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Exploring our shared history, acknowledging our challenges, and building bridges toward a more unified Kenya
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="unity" 
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => {
              document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Our History
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            onClick={() => {
              document.getElementById('unity')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Path to Unity
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;