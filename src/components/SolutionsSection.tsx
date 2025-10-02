import { MessageSquare, BarChart3, Eye, FileText, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: MessageSquare,
    title: "Chatboty i Asystenci AI",
    description: "Zautomatyzuj obsługę klienta i zwiększ satysfakcję użytkowników dzięki inteligentnym chatbotom dostępnym 24/7.",
    features: [
      "Automatyczna odpowiedź na pytania",
      "Integracja z systemami CRM",
      "Wsparcie wielojęzyczne",
      "Analiza sentymentu"
    ],
    price: "Od 2,999 zł/mies"
  },
  {
    icon: BarChart3,
    title: "Analiza Danych i Predykcje",
    description: "Wykorzystaj moc danych do podejmowania lepszych decyzji biznesowych i przewidywania trendów rynkowych.",
    features: [
      "Zaawansowane dashboardy",
      "Predykcje sprzedaży",
      "Analiza zachowań klientów",
      "Raporty w czasie rzeczywistym"
    ],
    price: "Od 4,999 zł/mies"
  },
  {
    icon: Eye,
    title: "Rozpoznawanie Obrazu",
    description: "Automatyzuj kontrolę jakości, rozpoznawanie obiektów i analizę wizualną w Twojej branży.",
    features: [
      "Kontrola jakości produktów",
      "Rozpoznawanie twarzy",
      "Analiza dokumentów",
      "Monitorowanie bezpieczeństwa"
    ],
    price: "Od 3,999 zł/mies"
  },
  {
    icon: FileText,
    title: "Przetwarzanie Języka",
    description: "Analizuj teksty, generuj treści i automatyzuj komunikację dzięki zaawansowanym modelom językowym.",
    features: [
      "Automatyczne tłumaczenia",
      "Generowanie treści",
      "Analiza sentymentu",
      "Streszczanie dokumentów"
    ],
    price: "Od 2,499 zł/mies"
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo AI",
    description: "Chroń swoją firmę przed zagrożeniami cybernetycznymi dzięki inteligentnym systemom detekcji.",
    features: [
      "Detekcja anomalii",
      "Ochrona przed oszustwami",
      "Monitoring cyberbezpieczeństwa",
      "Analiza zagrożeń"
    ],
    price: "Od 5,999 zł/mies"
  },
  {
    icon: Sparkles,
    title: "Personalizacja",
    description: "Twórz spersonalizowane doświadczenia dla każdego klienta i zwiększaj konwersje.",
    features: [
      "Rekomendacje produktów",
      "Personalizacja treści",
      "Targetowane kampanie",
      "A/B testing AI"
    ],
    price: "Od 3,499 zł/mies"
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="rozwiazania">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="mb-4">Nasze rozwiązania</Badge>
        </div>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Rozwiązania AI Dopasowane do Twojej Branży
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Odkryj kompleksowe rozwiązania AI, które transformują sposób działania firm w różnych sektorach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary mb-3">{solution.price}</div>
                  <Button 
                    onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Dowiedz się więcej
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Nie Widzisz Swojego Rozwiązania?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tworzymy dedykowane rozwiązania AI dopasowane do specyficznych potrzeb Twojej firmy
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Zamów rozwiązanie na miarę
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
