import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const solutionsData: Record<string, any> = {
  "chatbot-obslugi-klienta": {
    title: "Chatbot Obsługi Klienta 24/7",
    description: "Inteligentny asystent AI, który automatycznie odpowiada na pytania klientów o każdej porze dnia i nocy, redukując obciążenie zespołu obsługi.",
    problem: "Twoi klienci czekają godzinami na odpowiedź. Zespół obsługi nie radzi sobie z natłokiem zgłoszeń, szczególnie poza godzinami pracy. Tracisz klientów z powodu długiego czasu oczekiwania.",
    solution: "Nasz chatbot AI automatycznie obsługuje 80% standardowych zapytań, pracuje 24/7 i przekazuje tylko złożone sprawy do zespołu. Klienci otrzymują natychmiastowe odpowiedzi, a Twój zespół może skupić się na bardziej wymagających zadaniach.",
    features: [
      "Automatyczne odpowiedzi na FAQ",
      "Integracja z bazą wiedzy",
      "Przekierowanie do człowieka gdy potrzeba",
      "Wielojęzyczne wsparcie",
      "Analiza nastrojów klientów",
      "Zbieranie feedbacku"
    ],
    benefits: [
      "Skrócenie czasu odpowiedzi o 95%",
      "Redukcja kosztów obsługi o 60%",
      "Wzrost satysfakcji klientów",
      "Dostępność 24/7/365"
    ],
    price: "Od 2,999 zł/mies",
    tags: ["Obsługa klienta", "Automatyzacja", "24/7"]
  },
  "automatyzacja-email-marketing": {
    title: "Automatyzacja Email Marketing",
    description: "Inteligentny system email marketingu, który personalizuje komunikację na podstawie zachowań użytkowników i automatycznie optymalizuje kampanie.",
    problem: "Twoje kampanie emailowe mają niską skuteczność. Brak czasu na personalizację sprawia, że wysyłasz generyczne wiadomości. Nie wiesz, który content działa najlepiej.",
    solution: "Nasz system AI analizuje zachowania użytkowników i automatycznie tworzy spersonalizowane kampanie. Testuje różne wersje wiadomości i wysyła optymalny content w najlepszym momencie.",
    features: [
      "Segmentacja oparta na AI",
      "Personalizacja treści",
      "A/B testing automatyczny",
      "Optymalizacja czasu wysyłki",
      "Predykcja churn",
      "Dynamiczne rekomendacje produktów"
    ],
    benefits: [
      "Wzrost open rate o 40%",
      "Zwiększenie CTR o 65%",
      "Automatyzacja całego procesu",
      "Lepszy ROI kampanii"
    ],
    price: "Od 1,999 zł/mies",
    tags: ["Marketing", "Email", "Personalizacja"]
  }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const solution = id ? solutionsData[id] : null;

  if (!solution) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Rozwiązanie nie znalezione</h1>
            <Button asChild>
              <Link to="/rozwiazania">Wróć do listy rozwiązań</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": solution.title,
    "description": solution.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PLN",
      "price": solution.price
    }
  };

  return (
    <>
      <SEO
        title={`${solution.title} - Gotowe Rozwiązanie AI | Mediafy AI`}
        description={solution.description}
        keywords={`${solution.tags.join(", ")}, automatyzacje AI, AI workflow`}
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Breadcrumbs 
              items={[
                { label: "Gotowe rozwiązania", href: "/rozwiazania" },
                { label: solution.title, href: `/rozwiazania/${id}` }
              ]} 
            />
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {solution.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{solution.title}</h1>
              <p className="text-xl text-muted-foreground">{solution.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-8">
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Problem, który rozwiązujemy</h2>
                    <p className="text-muted-foreground leading-relaxed">{solution.problem}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Jak to działa?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{solution.solution}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Kluczowe funkcje:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Korzyści dla Twojego biznesu:</h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-primary/50 sticky top-24">
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Cena</div>
                      <div className="text-3xl font-bold text-primary mb-4">{solution.price}</div>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      Umów demo
                    </Button>

                    <div className="pt-4 border-t border-border space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Wdrożenie 7-14 dni</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Wsparcie techniczne 24/7</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Gwarancja zwrotu pieniędzy</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Potrzebujesz więcej informacji?</p>
                      <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary/10">
                        <Link to="/kontakt">Skontaktuj się z nami</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Zobacz także inne rozwiązania</h2>
              <p className="text-muted-foreground mb-6">
                Odkryj więcej gotowych rozwiązań AI, które mogą usprawnić Twój biznes
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/rozwiazania">
                  Przeglądaj wszystkie rozwiązania <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SolutionDetail;
