import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, Globe } from "lucide-react";

const resources = [
  {
    category: "Academic Research",
    icon: BookOpen,
    items: [
      {
        title: "Tribal Associations in Kenyan Towns",
        description: "Cambridge University research on how urban migration affected tribal identity formation in Kenya",
        url: "https://www.cambridge.org/core/journals/journal-of-african-history/article/abs/tribal-associations-tribal-solidarity-and-tribal-chauvinism-in-a-kenya-town/90B0CF838C21B8FB216DA9ADF3AE37BF",
        type: "Academic Paper"
      },
      {
        title: "Moral Ethnicity and Political Tribalism",
        description: "JSTOR analysis of ethnic politics in Kenya's democratic transition",
        url: "https://www.jstor.org/stable/1167103",
        type: "Academic Paper"
      },
      {
        title: "Colonial State and Spatial Differentiation",
        description: "Research on how colonial policies created lasting regional inequalities",
        url: "https://www.sciencedirect.com/science/article/pii/S0305748887801159",
        type: "Academic Paper"
      }
    ]
  },
  {
    category: "Government & Policy",
    icon: FileText,
    items: [
      {
        title: "Preventing Post-Election Violence",
        description: "Stanford Law School analysis of Kenya's experience and prevention mechanisms",
        url: "https://law.stanford.edu/wp-content/uploads/2016/07/Cho-Connors-Fatima-Yalim-Preventing-Post-Election-Violence-Based-on-the-Kenyan-Experience.pdf",
        type: "Policy Report"
      },
      {
        title: "Land Tenure and Violent Conflict",
        description: "Analysis of how land issues contribute to ethnic tensions in Kenya",
        url: "https://mokoro.co.uk/wp-content/uploads/acts_policy_brief_land_tenure_and_violent_conflict_kenya1.pdf",
        type: "Policy Brief"
      },
      {
        title: "Elections and Violent Conflict",
        description: "US Institute of Peace study on making electoral violence prevention stick",
        url: "https://www.usip.org/sites/default/files/PW101-Elections-and-Violent-Conflict-in-Kenya-Making-Prevention-Stick.pdf",
        type: "Policy Report"
      }
    ]
  },
  {
    category: "Human Rights & Peace",
    icon: Users,
    items: [
      {
        title: "Divide and Rule - Human Rights Watch",
        description: "1993 report on state-sponsored ethnic violence in Kenya",
        url: "https://www.hrw.org/reports/1993/kenya1193.pdf",
        type: "Human Rights Report"
      },
      {
        title: "Post-Election Violence Commission",
        description: "International Center for Transitional Justice report on CIPEV",
        url: "https://www.ictj.org/publication/kenyan-commission-inquiry-post-election-violence",
        type: "Commission Report"
      },
      {
        title: "Truth, Justice and Reconciliation Commission",
        description: "Information about Kenya's TJRC established to address historical injustices",
        url: "https://en.wikipedia.org/wiki/Truth,_Justice_and_Reconciliation_Commission_of_Kenya",
        type: "Commission Info"
      }
    ]
  },
  {
    category: "Historical Context",
    icon: Globe,
    items: [
      {
        title: "Colonialism and Its Legacies in Kenya",
        description: "Comprehensive analysis of colonial impact on modern Kenya",
        url: "https://africanphilanthropy.issuelab.org/resources/19699/19699.pdf",
        type: "Historical Analysis"
      },
      {
        title: "Colonial State and Inter-Ethnic Conflicts",
        description: "Study of how colonial administration transformed ethnic relations",
        url: "https://ejtas.com/index.php/journal/article/download/240/198",
        type: "Historical Research"
      },
      {
        title: "Post-Election Violence Analysis",
        description: "Academic analysis of the 2007 post-election violence in Kenya",
        url: "https://ndpmetrics.com/papers/Kenya_Conflict_2007.pdf",
        type: "Conflict Analysis"
      }
    ]
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic Resources & Sources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All content on this website is sourced from academic research, government reports, and credible institutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {resources.map((category, categoryIndex) => (
            <Card key={category.category} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    categoryIndex % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-heritage/20 text-heritage'
                  }`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/30 pl-4 pb-4 border-b border-border/50 last:border-b-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          categoryIndex % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-heritage/20 text-heritage'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        View Source
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18" />
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-heritage/10 to-unity/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Academic Integrity & Transparency
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This educational website is built on rigorous academic research from universities, policy institutes, 
              and human rights organizations. Every claim is sourced and linked to peer-reviewed research, 
              government reports, and credible institutions to ensure accuracy and enable further learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;