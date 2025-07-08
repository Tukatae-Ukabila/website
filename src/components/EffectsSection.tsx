import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Flag, History } from "lucide-react";

const effects = [
  {
    icon: Flag,
    title: "Political Impact",
    description: "Academic research shows that Kenyan politics have long been among the most 'ethnic' in Africa, with politicians seeking support from ethnic groups and citizens perceiving political battles as dividing the 'national cake' among constituent ethnic groups.",
    examples: [
      "Coalition building based on ethnic arithmetic rather than ideology",
      "Appointment of public officials following ethnic quotas",
      "Electoral violence targeting specific ethnic communities",
      "Voter mobilization along ethnic rather than policy lines"
    ],
    source: "https://www.jstor.org/stable/1167103",
    detail: "Political liberalization since 1991 has not fundamentally changed this ethnic atmosphere in Kenyan politics."
  },
  {
    icon: Users,
    title: "Social Consequences",
    description: "Urban studies reveal that migration to towns paradoxically consolidated tribal identities rather than diminishing them, creating stronger ethnic boundaries and reducing inter-ethnic interaction.",
    examples: [
      "Formation of ethnic enclaves in urban areas",
      "Decreased inter-ethnic marriages and social relationships",
      "Strengthened tribal associations in towns and cities",
      "Ethnic stereotyping and prejudicial attitudes"
    ],
    source: "https://www.cambridge.org/core/journals/journal-of-african-history/article/abs/tribal-associations-tribal-solidarity-and-tribal-chauvinism-in-a-kenya-town/90B0CF838C21B8FB216DA9ADF3AE37BF",
    detail: "Research in Nakuru from the 1920s-1960s showed urban life consolidated tribal identities and exacerbated differences."
  },
  {
    icon: History,
    title: "Economic Effects",
    description: "Colonial land policies and their legacy created lasting economic inequalities between ethnic groups, with land alienation particularly affecting certain communities and creating grievances that persist today.",
    examples: [
      "Unequal distribution of fertile land based on colonial policies",
      "Regional economic disparities correlating with ethnic demographics",
      "Employment discrimination in both public and private sectors",
      "Limited access to credit and business opportunities for marginalized groups"
    ],
    source: "https://mokoro.co.uk/wp-content/uploads/acts_policy_brief_land_tenure_and_violent_conflict_kenya1.pdf",
    detail: "Land tenure issues remain central to ethnic tensions and economic inequality in Kenya."
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
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {effect.description}
                </p>
                
                {effect.detail && (
                  <p className="text-sm text-muted-foreground/80 mb-6 italic border-l-2 border-primary/30 pl-4">
                    {effect.detail}
                  </p>
                )}
                
                <div className="space-y-4">
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
                  
                  {effect.source && (
                    <div className="pt-4 border-t border-border/50">
                      <a 
                        href={effect.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        📚 Academic Source
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18" />
                        </svg>
                      </a>
                    </div>
                  )}
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