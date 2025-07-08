import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "Pre-1895",
    title: "Traditional Communities",
    description: "Over 40 distinct ethnic communities lived across Kenya with established trade relationships and cultural exchanges.",
    type: "positive"
  },
  {
    year: "1895-1963",
    title: "Colonial Era",
    description: "British colonial rule introduced the 'divide and rule' policy, artificially amplifying tribal differences for administrative control.",
    type: "negative"
  },
  {
    year: "1920s-1950s",
    title: "Land Alienation",
    description: "Colonial land policies displaced communities, creating ethnic tensions over land ownership and resources.",
    type: "negative"
  },
  {
    year: "1963",
    title: "Independence",
    description: "Kenya gained independence, but tribal politics began to emerge in the new democratic system.",
    type: "neutral"
  },
  {
    year: "1992",
    title: "Multiparty Politics",
    description: "Introduction of multiparty democracy saw the rise of ethnic-based political mobilization and violence.",
    type: "negative"
  },
  {
    year: "2007-2008",
    title: "Post-Election Violence",
    description: "Disputed elections led to ethnic violence affecting over 1,000 lives and displacing 600,000 people.",
    type: "critical"
  },
  {
    year: "2010",
    title: "New Constitution",
    description: "A new constitution introduced devolution and mechanisms to address historical injustices and promote unity.",
    type: "positive"
  },
  {
    year: "2013-Present",
    title: "Building Bridges",
    description: "Ongoing efforts through institutions like NCIC and initiatives promoting national cohesion and integration.",
    type: "positive"
  }
];

const TimelineSection = () => {
  return (
    <section id="history" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Historical Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding how historical events shaped tribal dynamics in Kenya
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-heritage via-primary to-unity" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
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
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
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