import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, Calendar, ShoppingCart, FileText, Users, Check, X, Sparkles } from "lucide-react";
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
  },
  {
    id: "sentiment-analysis",
    icon: MessageSquare,
    title: "Analiza Sentymentu Opinii",
    shortDescription: "Automatyczna analiza nastrojów klientów z opinii, recenzji i mediów społecznościowych.",
    problem: "Trudność w monitorowaniu i analizie tysięcy opinii klientów",
    tags: ["Analityka", "Marketing", "Monitoring"],
    price: "Od 2,799 zł/mies"
  },
  {
    id: "lead-scoring-ai",
    icon: Users,
    title: "Lead Scoring z AI",
    shortDescription: "Automatyczna ocena i priorytetyzacja potencjalnych klientów na podstawie AI.",
    problem: "Zespół sprzedaży traci czas na niekonwertujących leadów",
    tags: ["Sprzedaż", "CRM", "Automatyzacja"],
    price: "Od 3,299 zł/mies"
  },
  {
    id: "inventory-optimization",
    icon: ShoppingCart,
    title: "Optymalizacja Stanów Magazynowych",
    shortDescription: "AI przewiduje zapotrzebowanie i automatycznie zarządza stanem magazynowym.",
    problem: "Nadmierne zapasy lub brak produktów na stanie",
    tags: ["Logistyka", "E-commerce", "Predykcja"],
    price: "Od 4,499 zł/mies"
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
        title="Gotowe Automatyzacje AI dla Firm | Workflow n8n | AI Agents - Mediafy"
        description="9 gotowych automatyzacji AI i workflow n8n do wdrożenia: chatboty AI, email marketing, OCR dokumentów. Wdrożenie 7-14 dni. Od 1999 zł/mies."
        keywords="gotowe rozwiązania ai, automatyzacje ai dla firm, workflow n8n, ai agent gotowy, chatbot ai, automatyzacja email marketing ai"
        canonical="https://mediafy.ai/rozwiazania"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto">
            <Breadcrumbs items={[{ label: "Gotowe rozwiązania", href: "/rozwiazania" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Automatyzacje AI <span className="text-primary">dla Twojej Firmy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gotowe pakiety lub pojedyncze rozwiązania - wszystko wdrożone w 7-14 dni
              </p>
            </div>

            {/* Pricing Packages Section */}
            <div className="mb-20">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nasze Pakiety
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Kompleksowe rozwiązania dostosowane do wielkości Twojej firmy
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                {/* STARTER */}
                <Card className="border-border hover:border-primary/50 transition-all duration-300">
                  <Badge variant="secondary" className="absolute -top-3 right-4">
                    Dla małych firm
                  </Badge>
                  <CardHeader className="text-center pb-8 pt-8">
                    <h3 className="text-2xl font-bold mb-2">Starter</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Idealne na początek transformacji AI
                    </p>
                    <div className="space-y-1">
                      <div className="text-4xl md:text-5xl font-bold">
                        1,999 zł<span className="text-base font-normal">/mies</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>1 chatbot AI (24/7 obsługa klienta)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>3 workflow n8n</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Integracja z 5 systemami</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Email support (odp. do 24h)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Miesięczny raport wydajności</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Dedykowany agent AI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Custom integracje</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/kontakt">Wybierz Starter</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* BUSINESS - Popular */}
                <Card className="relative border-primary shadow-xl shadow-primary/20 md:scale-105">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Sparkles className="w-3 h-3 mr-1 inline" />
                      Najpopularniejszy
                    </Badge>
                  </div>
                  <CardHeader className="text-center pb-8 pt-8">
                    <h3 className="text-2xl font-bold mb-2">Business</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Kompleksowa automatyzacja dla rozwijających się firm
                    </p>
                    <div className="space-y-1">
                      <div className="text-4xl md:text-5xl font-bold">
                        4,999 zł<span className="text-base font-normal">/mies</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>3 agenci AI (autonomiczne zadania)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>10 workflow n8n</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Unlimited integracje</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Priorytetowy support (odp. do 4h)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Tygodniowe raporty + optymalizacja</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Szkolenie zespołu (2x rocznie)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>1 custom AI agent</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary" size="lg" asChild>
                      <Link to="/kontakt">Wybierz Business</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* ENTERPRISE */}
                <Card className="border-border hover:border-primary/50 transition-all duration-300">
                  <Badge variant="secondary" className="absolute -top-3 right-4">
                    Dla korporacji
                  </Badge>
                  <CardHeader className="text-center pb-8 pt-8">
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Dedykowane rozwiązania dla dużych organizacji
                    </p>
                    <div className="space-y-1">
                      <div className="text-4xl md:text-5xl font-bold">
                        Wycena
                      </div>
                      <div className="text-sm text-muted-foreground">
                        indywidualna
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Unlimited agenci AI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Unlimited workflow n8n</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Dedykowany AI developer (on-demand)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>SLA 99.9% uptime</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Support 24/7 (telefon + Slack)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>White-label rozwiązania</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Audyt bezpieczeństwa RODO</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/kontakt">Umów Konsultację</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Individual Solutions Section */}
            <div className="mb-12">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Pojedyncze <span className="text-primary">Automatyzacje</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Wybierz konkretne narzędzie AI z naszej biblioteki gotowych rozwiązań
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
