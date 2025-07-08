import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "Pre-1895",
    title: "Traditional Communities",
    description: "Over 40 distinct ethnic communities lived across Kenya with established trade relationships, intermarriage, and cultural exchanges that fostered cooperation.",
    type: "positive",
    source: "https://ejtas.com/index.php/journal/article/download/240/198"
  },
  {
    year: "1895-1920",
    title: "Colonial Administration",
    description: "British colonial state established rigid spatial templates and administrative divisions that transformed inter-ethnic relations, implementing divide and rule policies.",
    type: "negative",
    source: "https://www.sciencedirect.com/science/article/pii/S0305748887801159"
  },
  {
    year: "1920s-1950s",
    title: "Land Alienation & Forced Labor",
    description: "The Crown Lands Ordinance of 1902 and subsequent policies displaced over 60,000 Kikuyu families, creating lasting grievances. The kipande system controlled African movement and labor.",
    type: "negative",
    source: "https://africanphilanthropy.issuelab.org/resources/19699/19699.pdf"
  },
  {
    year: "1920s-1960s",
    title: "Urban Tribal Consolidation",
    description: "Research in towns like Nakuru showed that urban migration paradoxically strengthened tribal identities and consolidated ethnic groups rather than diminishing tribal consciousness.",
    type: "negative",
    source: "https://www.cambridge.org/core/journals/journal-of-african-history/article/abs/tribal-associations-tribal-solidarity-and-tribal-chauvinism-in-a-kenya-town/90B0CF838C21B8FB216DA9ADF3AE37BF"
  },
  {
    year: "1963-1978",
    title: "Independence & Early Politics",
    description: "Kenya gained independence with Jomo Kenyatta as President. Despite initial unity efforts, ethnic considerations increasingly influenced political appointments and resource allocation.",
    type: "neutral",
    source: "https://www.jstor.org/stable/1167103"
  },
  {
    year: "1991-1992",
    title: "Political Liberalization",
    description: "Introduction of multiparty democracy saw politicians mobilizing support along ethnic lines. The repeal of Section 2A led to ethnic-based political coalitions and targeted violence.",
    type: "negative",
    source: "https://www.hrw.org/reports/1993/kenya1193.pdf"
  },
  {
    year: "2007-2008",
    title: "Post-Election Violence",
    description: "Disputed presidential election results led to widespread ethnic violence. 1,133 people died, over 350,000 were internally displaced, and 117,000 properties were destroyed.",
    type: "critical",
    source: "https://www.csis.org/blogs/smart-global-health/post-election-violence-kenya-and-its-aftermath"
  },
  {
    year: "2008-2009",
    title: "Truth & Reconciliation",
    description: "Establishment of the Truth, Justice and Reconciliation Commission (TJRC) and Commission of Inquiry into Post-Election Violence (CIPEV) to investigate historical injustices.",
    type: "positive",
    source: "https://en.wikipedia.org/wiki/Truth,_Justice_and_Reconciliation_Commission_of_Kenya"
  },
  {
    year: "2010",
    title: "New Constitution & Devolution",
    description: "The 2010 Constitution introduced devolution of power to 47 counties, mechanisms for addressing historical injustices, and strengthened institutions to promote national unity and equal representation.",
    type: "positive",
    source: "https://law.stanford.edu/wp-content/uploads/2016/07/Cho-Connors-Fatima-Yalim-Preventing-Post-Election-Violence-Based-on-the-Kenyan-Experience.pdf"
  },
  {
    year: "2011-Present",
    title: "National Cohesion Efforts",
    description: "The National Cohesion and Integration Commission (NCIC) works to eliminate discrimination and promote national unity. Kenya has seen improved electoral processes and reduced post-election violence.",
    type: "positive",
    source: "https://www.usip.org/sites/default/files/PW101-Elections-and-Violent-Conflict-in-Kenya-Making-Prevention-Stick.pdf"
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