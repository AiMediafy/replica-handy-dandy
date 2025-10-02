import { Zap, Brain, Rocket, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Automatyzacje AI dla Biznesu",
    description: "Eliminuj powtarzalne zadania dzięki automatyzacjom AI i workflow n8n. Inteligentne agenty AI pracują 24/7, optymalizując procesy biznesowe i redukując koszty operacyjne o 60%."
  },
  {
    icon: Brain,
    title: "Agenci AI do Analizy Danych",
    description: "Wykorzystaj AI agents do zaawansowanej analizy danych w czasie rzeczywistym. Podejmuj lepsze decyzje biznesowe oparte na predykcjach AI, nie intuicji."
  },
  {
    icon: Rocket,
    title: "Workflow n8n dla Innowacji",
    description: "Twórz zaawansowane workflow n8n łączące różne systemy. Automatyzacja procesów w firmach otwiera drzwi do nowych możliwości biznesowych i przewagi konkurencyjnej."
  },
  {
    icon: Target,
    title: "Personalizacja z AI w Biznesie",
    description: "AI w biznesie to personalizacja obsługi klienta na nowym poziomie. Chatboty AI i agenci automatycznie dostosowują komunikację, zwiększając konwersje o 40%."
  },
  {
    icon: Users,
    title: "Optymalizacja Procesów Firmowych",
    description: "Automatyzacje n8n i agenci AI wspierają zespoły, eliminując rutynowe zadania. Optymalizacja procesów za pomocą AI pozwala skupić się na rozwoju firmy."
  },
  {
    icon: TrendingUp,
    title: "AI Agent do Predykcji Trendów",
    description: "Inteligentne agenci AI analizują wzorce rynkowe i przewidują trendy. Optymalizuj strategię biznesową dzięki predykcyjnej analityce AI."
  }
];

const WhyAISection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dlaczego <span className="text-primary">Automatyzacje AI</span> to Przyszłość Biznesu?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sztuczna inteligencja w biznesie to nie przyszłość - to teraźniejszość. Workflow n8n, agenci AI i automatyzacje procesów zwiększają wydajność firm o 97% i redukują koszty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" aria-hidden="true" />
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
          <h3 className="text-2xl font-bold mb-6">Wdróż Automatyzacje AI w Swojej Firmie</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dołącz do 50+ firm, które już wykorzystują automatyzacje AI, workflow n8n i agentów AI do optymalizacji procesów biznesowych. Zobacz gotowe rozwiązania lub umów demo.
          </p>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('rozwiazania')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sprawdź automatyzacje AI dla firm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
