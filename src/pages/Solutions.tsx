import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, Calendar, ShoppingCart, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "chatbot-obslugi-klienta",
    icon: MessageSquare,
    title: "Chatbot Obsługi Klienta 24/7",
    shortDescription: "Inteligentny asystent, który odpowiada na pytania klientów o każdej porze dnia i nocy.",
    problem: "Klienci czekają godzinami na odpowiedź, a zespół obsługi nie radzi sobie z natłokiem zgłoszeń",
    tags: ["Obsługa klienta", "Automatyzacja", "24/7"],
    price: "Od 2,999 zł/mies"
  },
  {
    id: "automatyzacja-email-marketing",
    icon: Mail,
    title: "Automatyzacja Email Marketing",
    shortDescription: "Personalizowane kampanie emailowe oparte na zachowaniu użytkowników.",
    problem: "Niska skuteczność kampanii emailowych i brak czasu na personalizację komunikacji",
    tags: ["Marketing", "Email", "Personalizacja"],
    price: "Od 1,999 zł/mies"
  },
  {
    id: "system-rezerwacji-ai",
    icon: Calendar,
    title: "System Rezerwacji z AI",
    shortDescription: "Inteligentny system zarządzania terminami i rezerwacjami z automatycznymi przypomnieniami.",
    problem: "Chaos w kalendarzu, pominięte rezerwacje i straty z powodu no-show",
    tags: ["Rezerwacje", "Automatyzacja", "CRM"],
    price: "Od 3,499 zł/mies"
  },
  {
    id: "analiza-koszyka-ai",
    icon: ShoppingCart,
    title: "Analiza Koszyka i Rekomendacje",
    shortDescription: "AI analizuje zachowania użytkowników i rekomenduje produkty zwiększające sprzedaż.",
    problem: "Niska wartość koszyka i brak skutecznych rekomendacji produktowych",
    tags: ["E-commerce", "Rekomendacje", "Sprzedaż"],
    price: "Od 4,999 zł/mies"
  },
  {
    id: "przetwarzanie-dokumentow",
    icon: FileText,
    title: "Przetwarzanie Dokumentów AI",
    shortDescription: "Automatyczne wyciąganie danych z faktur, umów i innych dokumentów.",
    problem: "Ręczne przepisywanie danych z dokumentów zajmuje godziny i prowadzi do błędów",
    tags: ["OCR", "Dokumenty", "Automatyzacja"],
    price: "Od 2,499 zł/mies"
  },
  {
    id: "rekrutacja-ai",
    icon: Users,
    title: "Agent Rekrutacyjny AI",
    shortDescription: "Automatyczna preselekcja kandydatów i planowanie rozmów kwalifikacyjnych.",
    problem: "Przeprowadzanie preselekcji CV zajmuje zbyt dużo czasu działu HR",
    tags: ["HR", "Rekrutacja", "Automatyzacja"],
    price: "Od 3,999 zł/mies"
  }
];

const Solutions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": solutions.map((solution, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": solution.title,
      "description": solution.shortDescription,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PLN",
        "price": solution.price
      }
    }))
  };

  return (
    <>
      <SEO
        title="Gotowe Rozwiązania AI - Workflow i Agenci do Wdrożenia | Mediafy AI"
        description="Katalog gotowych rozwiązań AI i workflow n8n. Chatboty, automatyzacje email, systemy rezerwacji i więcej. Szybkie wdrożenie dla Twojej firmy."
        keywords="gotowe rozwiązania AI, AI workflow, automatyzacje n8n, chatbot AI, automatyzacja biznesu"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto">
            <Breadcrumbs items={[{ label: "Gotowe rozwiązania", href: "/rozwiazania" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Gotowe <span className="text-primary">Rozwiązania AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sprawdzone workflow i agenci AI gotowe do wdrożenia w Twojej firmie. Zacznij automatyzować już dziś.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {solutions.map((solution) => (
                <Card key={solution.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {solution.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Problem: </span>
                          {solution.problem}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {solution.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-primary">{solution.price}</div>
                      <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to={`/rozwiazania/${solution.id}`}>Zobacz szczegóły</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Nie znalazłeś odpowiedniego rozwiązania?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tworzymy dedykowane rozwiązania AI dopasowane do specyficznych potrzeb Twojej firmy. Umów konsultację i opowiedz nam o swoich wyzwaniach.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/kontakt">Umów bezpłatną konsultację</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Solutions;
