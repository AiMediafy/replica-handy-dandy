import { Search, Map, Settings, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analiza Potrzeb",
    description: "Jakie cele chcesz osiągnąć? Kim jest Twoja grupa docelowa? Jakie problemy Twojej firmy może rozwiązać AI?",
    points: [
      "Audit obecnych procesów",
      "Identyfikacja możliwości AI",
      "Analiza konkurencji",
      "Określenie celów biznesowych"
    ]
  },
  {
    number: "02",
    icon: Map,
    title: "Planowanie Strategii",
    description: "Przygotowujemy kompleksowy plan - krok po kroku, dostosowany do specyfiki Twojej branży i budżetu.",
    points: [
      "Mapa drogowa implementacji",
      "Harmonogram wdrożenia",
      "Budżet i ROI",
      "Analiza ryzyka"
    ]
  },
  {
    number: "03",
    icon: Settings,
    title: "Wdrożenie i Testowanie",
    description: "Implementujemy rozwiązania AI z pełnym wsparciem technicznym, testujemy i optymalizujemy system.",
    points: [
      "Rozwój rozwiązań AI",
      "Integracja z systemami",
      "Testy i optymalizacja",
      "Szkolenie zespołu"
    ]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Uruchomienie i Rozwój",
    description: "Uruchamiamy system, monitorujemy wyniki i stale rozwijamy rozwiązanie w oparciu o zebrane dane.",
    points: [
      "Pełne uruchomienie",
      "Monitoring wydajności",
      "Ciągła optymalizacja",
      "Wsparcie techniczne"
    ]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="mb-4">Metodologia</Badge>
        </div>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nasz Proces Wdrożenia AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sprawdzony 4-etapowy proces, który gwarantuje sukces transformacji cyfrowej Twojej firmy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-xl">{step.number}</span>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Rozpocznij Swoją Podróż z AI</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Umów się na bezpłatną konsultację i dowiedz się, jak AI może zmienić Twój biznes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Umów bezpłatną konsultację
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
