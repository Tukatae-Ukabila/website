import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Flag, History } from "lucide-react";

const effects = [
  {
    icon: Flag,
    title: "Political Impact",
    description: "Ethnic voting patterns and political mobilization along tribal lines have weakened democratic institutions and merit-based governance.",
    examples: [
      "Coalition building based on ethnic calculations",
      "Appointment of public officials along tribal lines",
      "Electoral violence during contested polls"
    ]
  },
  {
    icon: Users,
    title: "Social Consequences",
    description: "Tribalism has created social divisions that affect intermarriage, friendships, and community cohesion across ethnic lines.",
    examples: [
      "Reduced inter-ethnic marriages",
      "Segregated social circles and communities",
      "Stereotyping and prejudice between groups"
    ]
  },
  {
    icon: History,
    title: "Economic Effects",
    description: "Resource allocation and economic opportunities have been influenced by tribal considerations, hindering national development.",
    examples: [
      "Unequal distribution of development projects",
      "Employment discrimination in private and public sectors",
      "Limited cross-tribal business partnerships"
    ]
  }
];

const EffectsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Effects on Kenya's Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How tribalism has impacted various aspects of Kenyan society and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {effects.map((effect, index) => (
            <Card key={effect.title} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-heritage/20' : 
                  index === 1 ? 'bg-unity/20' : 'bg-primary/20'
                }`}>
                  <effect.icon className={`w-8 h-8 ${
                    index === 0 ? 'text-heritage' : 
                    index === 1 ? 'text-unity' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {effect.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {effect.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                    Key Examples:
                  </h4>
                  <ul className="space-y-2">
                    {effect.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          index === 0 ? 'bg-heritage' : 
                          index === 1 ? 'bg-unity' : 'bg-primary'
                        }`} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffectsSection;