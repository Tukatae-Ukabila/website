import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import SocialShare from "@/components/SocialShare";

const UnitySection = () => {
  const { t, isLoading } = useLanguage();
  const solutions = t("solutions", "unity") || [];
  const callToAction = t("callToAction", "unity") || {};
  const summary = t("summary", "unity") || {};

  const handleReportIssues = () => {
    window.open(
      "https://github.com/tukatae-ukabila/website/issues/new",
      "_blank",
    );
  };

  if (isLoading) {
    return (
      <section
        id="unity"
        className="py-20 bg-gradient-to-b from-background to-unity/5"
      >
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
    <section
      id="unity"
      className="py-20 bg-gradient-to-b from-background to-unity/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("title", "unity")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("subtitle", "unity")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-heritage to-unity mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {Array.isArray(solutions) &&
            solutions.map((solution: any, index: number) => (
              <Card
                key={solution.title}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        index % 2 === 0 ? "bg-heritage" : "bg-unity"
                      }`}
                    >
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
                      {Array.isArray(solution.actions) &&
                        solution.actions.map((action: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div
                              className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                index % 2 === 0 ? "bg-heritage" : "bg-unity"
                              }`}
                            />
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
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-1M14 6h8m0 0v8m0-8L10 18"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Quick Action Summary */}
        {summary.actions && (
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {summary.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {summary.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {summary.actions.map(
                (item: { area: string; action: string }, index: number) => (
                  <Card
                    key={item.area}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="text-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 ${
                          index % 4 === 0
                            ? "bg-heritage"
                            : index % 4 === 1
                              ? "bg-unity"
                              : index % 4 === 2
                                ? "bg-primary"
                                : "bg-secondary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">
                        {item.area}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.action}
                      </p>
                    </div>
                  </Card>
                ),
              )}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-heritage/10 via-primary/10 to-unity/10 rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            {callToAction.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SocialShare
              title="Tukatae Ukabila - Unity Guide for Kenyan Citizens"
              text="Practical actions for Kenyans to prevent electoral violence and build unity. Every citizen has the power to make a difference."
              hashtags={["KenyaUnity", "PeacefulElections", "TukataeUkabila"]}
              variant="heritage"
              size="lg"
              className="text-lg px-8 py-6"
            />
            <Button
              variant="unity"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={handleReportIssues}
            >
              {callToAction.buttons?.learn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitySection;

