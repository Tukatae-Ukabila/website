import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const iconMap = {
  0: BookOpen,
  1: FileText,
  2: Users,
  3: Globe
};

const ResourcesSection = () => {
  const { t, isLoading } = useLanguage();
  const categories = t('categories', 'resources') || [];
  const footer = t('footer', 'resources') || {};

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('title', 'resources')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle', 'resources')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {Array.isArray(categories) && categories.map((category: any, categoryIndex: number) => {
            const IconComponent = iconMap[categoryIndex as keyof typeof iconMap] || BookOpen;
            return (
            <Card key={category.category} className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-card/80">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    categoryIndex % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-heritage/20 text-heritage'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                 <div className="space-y-3">
                   {Array.isArray(category.items) && category.items.slice(0, 3).map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="border-l-2 border-primary/30 pl-3 pb-2 border-b border-border/30 last:border-b-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                          categoryIndex % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-heritage/20 text-heritage'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-foreground mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2 overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {item.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        View
                        <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18" />
                        </svg>
                      </Button>
                    </div>
                  ))}
                  {category.items && category.items.length > 3 && (
                    <p className="text-xs text-muted-foreground text-center pt-2">
                      +{category.items.length - 3} more sources
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-primary/10 via-heritage/10 to-unity/10 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-foreground mb-2">
              {footer.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {footer.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;