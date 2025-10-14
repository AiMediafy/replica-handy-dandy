import { Check, X, Sparkles } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const packages = [
  {
    name: "Starter",
    badge: "Dla małych firm",
    price: "1,999",
    period: "/mies",
    description: "Idealne na początek transformacji AI",
    features: [
      { text: "1 chatbot AI (24/7 obsługa klienta)", included: true },
      { text: "3 workflow n8n", included: true },
      { text: "Integracja z 5 systemami", included: true },
      { text: "Email support (odp. do 24h)", included: true },
      { text: "Miesięczny raport wydajności", included: true },
      { text: "Dedykowany agent AI", included: false },
      { text: "Custom integracje", included: false },
      { text: "Priorytetowy support", included: false },
    ],
    cta: "Wybierz Starter",
    variant: "outline" as const,
  },
  {
    name: "Business",
    badge: "Najpopularniejszy",
    price: "4,999",
    period: "/mies",
    description: "Kompleksowa automatyzacja dla rozwijających się firm",
    features: [
      { text: "3 agenci AI (autonomiczne zadania)", included: true },
      { text: "10 workflow n8n", included: true },
      { text: "Unlimited integracje", included: true },
      { text: "Priorytetowy support (odp. do 4h)", included: true },
      { text: "Tygodniowe raporty + optymalizacja", included: true },
      { text: "Szkolenie zespołu (2x rocznie)", included: true },
      { text: "1 custom AI agent", included: true },
      { text: "Dedykowany account manager", included: true },
    ],
    cta: "Wybierz Business",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    badge: "Dla korporacji",
    price: "Wycena",
    period: "indywidualna",
    description: "Dedykowane rozwiązania dla dużych organizacji",
    features: [
      { text: "Unlimited agenci AI", included: true },
      { text: "Unlimited workflow n8n", included: true },
      { text: "Dedykowany AI developer (on-demand)", included: true },
      { text: "SLA 99.9% uptime", included: true },
      { text: "Support 24/7 (telefon + Slack)", included: true },
      { text: "White-label rozwiązania", included: true },
      { text: "Hosting on-premise (opcja)", included: true },
      { text: "Audyt bezpieczeństwa RODO", included: true },
    ],
    cta: "Umów Konsultację",
    variant: "outline" as const,
  },
];

const PricingTiers = () => {
  const scrollToContact = () => {
    document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Wybierz Pakiet dla Swojej Firmy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparentne ceny bez ukrytych kosztów. Płacisz za rezultaty, nie za czas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${
                pkg.popular
                  ? 'border-primary shadow-xl shadow-primary/20 md:scale-105'
                  : 'border-border hover:border-primary/50'
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              
              {!pkg.popular && (
                <Badge variant="secondary" className="absolute -top-3 right-4">
                  {pkg.badge}
                </Badge>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {pkg.description}
                </p>
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-bold">
                    {pkg.price}
                    {pkg.price !== "Wycena" && " zł"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={pkg.variant}
                  className="w-full"
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Nie jesteś pewien, który pakiet wybrać? Porozmawiajmy!
          </p>
          <Button onClick={scrollToContact} size="lg" variant="outline">
            Umów Darmowy Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
