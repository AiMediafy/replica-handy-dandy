import { Building2, ShoppingCart, Briefcase, TrendingUp, Users, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Automatyzacje AI dla sklepów online - chatboty, analiza koszyka, rekomendacje produktów"
  },
  {
    icon: Briefcase,
    title: "Firmy B2B",
    description: "Workflow n8n do zarządzania leadami, CRM i automatyzacji sprzedaży B2B"
  },
  {
    icon: Building2,
    title: "Firmy produkcyjne",
    description: "Optymalizacja procesów produkcyjnych, przetwarzanie dokumentów OCR, zarządzanie magazynem"
  },
  {
    icon: TrendingUp,
    title: "Marketing i Agencje",
    description: "Automatyzacje email marketing, agenci AI do content creation, analiza kampanii"
  },
  {
    icon: Users,
    title: "Firmy usługowe",
    description: "Systemy rezerwacji z AI, obsługa klienta 24/7, automatyzacja procesów HR"
  },
  {
    icon: Smartphone,
    title: "Startupy technologiczne",
    description: "Szybkie wdrożenia AI agents, MVP workflow, skalowalne automatyzacje biznesowe"
  }
];

const TrustedBySection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dla Kogo Są Nasze <span className="text-primary">Rozwiązania AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Automatyzacje AI i workflow n8n dla firm z każdej branży. Od e-commerce po produkcję - optymalizujemy procesy biznesowe za pomocą sztucznej inteligencji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Nie widzisz swojej branży? Tworzymy dedykowane <strong>rozwiązania AI</strong> i <strong>automatyzacje n8n</strong> dla każdego biznesu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
