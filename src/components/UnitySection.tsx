import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    title: "Education & Awareness",
    description: "Research emphasizes the need for civic education that promotes shared Kenyan identity over ethnic divisions, with evidence showing success in countries that have implemented similar programs.",
    actions: [
      "Inclusive history curriculum that teaches pre-colonial cooperation",
      "Inter-ethnic cultural exchange programs in schools and universities",
      "National dialogue forums and peace education",
      "Media literacy programs to counter ethnic stereotypes"
    ],
    source: "https://law.stanford.edu/wp-content/uploads/2016/07/Cho-Connors-Fatima-Yalim-Preventing-Post-Election-Violence-Based-on-the-Kenyan-Experience.pdf",
    evidence: "Stanford research on Kenya shows prevention programs significantly reduce electoral violence."
  },
  {
    title: "Institutional Reforms",
    description: "The 2010 Constitution's devolution system and institutions like NCIC represent important steps, but require strengthening to ensure equitable representation and resource distribution.",
    actions: [
      "Strengthening National Cohesion and Integration Commission (NCIC)",
      "Merit-based appointments with ethnic balance considerations",
      "Transparent county-level resource allocation mechanisms",
      "Independent electoral systems with ethnic violence prevention"
    ],
    source: "https://www.usip.org/sites/default/files/PW101-Elections-and-Violent-Conflict-in-Kenya-Making-Prevention-Stick.pdf",
    evidence: "USIP analysis shows institutional reforms have reduced but not eliminated electoral violence."
  },
  {
    title: "Land & Economic Justice",
    description: "Addressing historical land grievances and creating economic opportunities that transcend ethnic boundaries, as land tenure remains central to ethnic tensions.",
    actions: [
      "Comprehensive land reform addressing historical injustices",
      "Cross-ethnic business partnerships and cooperatives",
      "Equitable regional development investment",
      "Youth employment programs targeting marginalized communities"
    ],
    source: "https://mokoro.co.uk/wp-content/uploads/acts_policy_brief_land_tenure_and_violent_conflict_kenya1.pdf",
    evidence: "Land conflicts remain a major driver of ethnic tensions, requiring urgent address."
  },
  {
    title: "Social Cohesion Building",
    description: "Creating positive inter-ethnic contact through shared experiences, as research shows that urban migration alone does not reduce ethnic identification.",
    actions: [
      "Mixed residential developments with affordable housing",
      "National sports leagues with ethnic diversity requirements",
      "Interfaith dialogue and inter-ethnic marriage support",
      "Community peace committees in volatile areas"
    ],
    source: "https://www.cambridge.org/core/journals/journal-of-african-history/article/abs/tribal-associations-tribal-solidarity-and-tribal-chauvinism-in-a-kenya-town/90B0CF838C21B8FB216DA9ADF3AE37BF",
    evidence: "Urban studies show proximity alone doesn't reduce ethnic identity - active integration needed."
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
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                {solution.evidence && (
                  <p className="text-sm text-muted-foreground/80 mb-6 italic border-l-2 border-unity/30 pl-4">
                    {solution.evidence}
                  </p>
                )}
                
                <div className="space-y-4">
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
                  
                  {solution.source && (
                    <div className="pt-4 border-t border-border/50">
                      <a 
                        href={solution.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-unity hover:text-unity/80 transition-colors"
                      >
                        📚 Research Source
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18" />
                        </svg>
                      </a>
                    </div>
                  )}
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