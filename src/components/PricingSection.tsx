import { Check, Star, Zap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const programs = [
  {
    badge: "Bestseller",
    icon: Star,
    title: "Program Edukacyjny AI",
    subtitle: "Podstawy AI dla Biznesu",
    duration: "6 tygodni",
    level: "Początkujący",
    description: "Kompleksowy kurs wprowadzający do świata AI dla przedsiębiorców i menedżerów, którzy chcą zrozumieć potencjał sztucznej inteligencji.",
    features: [
      "20+ godzin materiałów wideo",
      "Praktyczne case studies",
      "Dostęp do ekspertów AI",
      "Certyfikat ukończenia",
      "Grupa wsparcia online"
    ],
    price: "1,999 zł",
    originalPrice: "2,999 zł"
  },
  {
    badge: "Premium",
    icon: Zap,
    title: "Program Mentoringowy",
    subtitle: "Indywidualne Wsparcie w Transformacji",
    duration: "3 miesiące",
    level: "Zaawansowany",
    description: "Personalisowane wsparcie eksperta AI, który przeprowadzi Cię przez cały proces implementacji rozwiązań w Twojej firmie.",
    features: [
      "12 sesji 1-na-1 z ekspertem",
      "Spersonalizowana strategia AI",
      "Wsparcie w implementacji",
      "Analiza ROI i KPI",
      "Dostęp przez 6 miesięcy"
    ],
    price: "9,999 zł",
    originalPrice: "14,999 zł"
  },
  {
    badge: "Enterprise",
    icon: Rocket,
    title: "Program Akceleracyjny",
    subtitle: "AI Transformation Bootcamp",
    duration: "8 tygodni",
    level: "Ekspercki",
    description: "Intensywny program dla firm gotowych na pełną transformację cyfrową z wykorzystaniem najnowszych technologii AI.",
    features: [
      "Dedykowany zespół ekspertów",
      "Kompletna implementacja AI",
      "24/7 wsparcie techniczne",
      "Gwarancja rezultatów",
      "Dożywotnie updates"
    ],
    price: "49,999 zł",
    originalPrice: "69,999 zł"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="mb-4">Programy szkoleniowe</Badge>
        </div>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Programy Edukacyjne i Wsparcie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rozwijaj kompetencje AI w swojej organizacji dzięki naszym sprawdzonym programom edukacyjnym
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">{program.badge}</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {program.subtitle}
                </CardDescription>
                <div className="flex gap-4 justify-center mt-4">
                  <Badge variant="outline" className="border-primary/30">
                    {program.duration}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30">
                    {program.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground text-center">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{program.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{program.originalPrice}</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Wybierz program
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Potrzebujesz Programu Grupowego?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Oferujemy specjalne ceny dla zespołów i dedykowane programy szkoleniowe dla większych organizacji
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Zapytaj o program grupowy
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Pobierz program nauczania
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
