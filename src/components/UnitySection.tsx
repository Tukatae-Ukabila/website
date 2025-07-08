import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    title: "Education & Awareness",
    description: "Promoting civic education that emphasizes shared Kenyan identity over ethnic divisions",
    actions: [
      "Inclusive history curriculum in schools",
      "Inter-ethnic cultural exchange programs",
      "National dialogue forums"
    ]
  },
  {
    title: "Institutional Reforms",
    description: "Strengthening institutions to ensure equitable representation and resource distribution",
    actions: [
      "Merit-based appointments in public service",
      "Transparent resource allocation mechanisms",
      "Independent electoral systems"
    ]
  },
  {
    title: "Economic Integration",
    description: "Creating economic opportunities that transcend ethnic boundaries",
    actions: [
      "Cross-tribal business partnerships",
      "Equitable regional development",
      "Youth employment programs"
    ]
  },
  {
    title: "Social Cohesion",
    description: "Building bridges through shared experiences and common goals",
    actions: [
      "Mixed residential developments",
      "National sports and cultural events",
      "Interfaith and inter-ethnic marriages support"
    ]
  }
];

const UnitySection = () => {
  return (
    <section id="unity" className="py-20 bg-gradient-to-b from-background to-unity/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building a United Kenya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Practical steps and initiatives to overcome tribal divisions and strengthen national unity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-heritage to-unity mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card key={solution.title} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index % 2 === 0 ? 'bg-heritage' : 'bg-unity'
                  }`}>
                    {index + 1}
                  </div>
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                    Key Actions:
                  </h4>
                  <ul className="space-y-2">
                    {solution.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          index % 2 === 0 ? 'bg-heritage' : 'bg-unity'
                        }`} />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-heritage/10 via-primary/10 to-unity/10 rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Join the Movement for Unity
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every Kenyan has a role to play in building a more inclusive and united nation. 
            Start conversations, challenge prejudices, and celebrate our diversity as our strength.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg" className="text-lg px-8 py-6">
              Share This Knowledge
            </Button>
            <Button variant="unity" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitySection;