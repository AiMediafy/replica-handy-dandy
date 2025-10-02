import { Zap, Brain, Rocket, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Automatyzacja i Optymalizacja",
    description: "Eliminuj powtarzalne zadania, przyspieszaj procesy i redukuj koszty operacyjne dzięki inteligentnej automatyzacji, która działa 24/7."
  },
  {
    icon: Brain,
    title: "Lepsze Decyzje Biznesowe",
    description: "Wykorzystuj zaawansowaną analizę danych opartą na AI, aby podejmować trafniejsze, szybsze i bardziej strategiczne decyzje oparte na faktach, a nie intuicji."
  },
  {
    icon: Rocket,
    title: "Innowacyjność i Nowe Możliwości",
    description: "Twórz przełomowe produkty, usługi i modele biznesowe. AI otwiera drzwi do nowych rynków i pozwala wyprzedzić konkurencję."
  },
  {
    icon: Target,
    title: "Personalizacja Doświadczeń",
    description: "Dostarczaj klientom spersonalizowane oferty i obsługę na niespotykanym dotąd poziomie, budując ich lojalność i maksymalizując satysfakcję."
  },
  {
    icon: Users,
    title: "Wydajność Zespołu",
    description: "Wspieraj swoje zespoły inteligentnymi narzędziami. Odciąż ich od rutyny, pozwalając skupić się na kreatywności, strategii i rozwoju firmy."
  },
  {
    icon: TrendingUp,
    title: "Przewidywanie Trendów",
    description: "Analizuj wzorce rynkowe i prognozuj przyszłe tendencje, aby lepiej dostosować swoją strategię i minimalizować ryzyko."
  }
];

const WhyAISection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dlaczego AI to Klucz do Przyszłości Twojej Firmy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Odkryj, jak sztuczna inteligencja rewolucjonizuje biznes i dlaczego warto zainwestować w nią już dziś, aby zyskać przewagę konkurencyjną.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Gotowy na Transformację?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dołącz do grona firm, które już wykorzystują potęgę AI do osiągania lepszych wyników biznesowych.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Rozpocznij swoją transformację
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
