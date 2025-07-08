import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/kenya-unity-hero.jpg";

const HeroSection = () => {
  const { t, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-heritage/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-white/20 rounded w-80 mx-auto mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-full max-w-2xl mx-auto mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="h-10 bg-white/20 rounded w-40"></div>
              <div className="h-10 bg-white/20 rounded w-40"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-1.5 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-heritage/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          {t('title.main', 'hero')}
          <span className="block bg-gradient-to-r from-unity to-white bg-clip-text text-transparent">
            {t('title.highlight', 'hero')}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle', 'hero')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="unity" 
            size="lg"
            className="text-base px-6 py-4"
            onClick={() => {
              document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('buttons.explore', 'hero')}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-base px-6 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            onClick={() => {
              document.getElementById('unity')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('buttons.unity', 'hero')}
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;