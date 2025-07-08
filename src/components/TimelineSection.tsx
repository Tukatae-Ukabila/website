import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const TimelineSection = () => {
  const { t, isLoading } = useLanguage();
  const timelineEvents = t('events', 'timeline') || [];

  if (isLoading) {
    return (
      <section id="history" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="history" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('title', 'timeline')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle', 'timeline')}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-heritage via-primary to-unity" />
          
          <div className="space-y-12">
            {Array.isArray(timelineEvents) && timelineEvents.map((event: any, index: number) => (
              <div 
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-10 ${
                  event.type === 'positive' ? 'bg-unity' :
                  event.type === 'negative' ? 'bg-heritage' :
                  event.type === 'critical' ? 'bg-destructive' : 'bg-primary'
                }`} />
                
                {/* Content Card */}
                <Card className={`ml-20 md:ml-0 md:w-5/12 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}>
                  <CardContent className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                      event.type === 'positive' ? 'bg-unity/20 text-unity' :
                      event.type === 'negative' ? 'bg-heritage/20 text-heritage' :
                      event.type === 'critical' ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'
                    }`}>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {event.description}
                    </p>
                    {event.source && (
                      <a 
                        href={event.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        📚 Source
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18" />
                        </svg>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;