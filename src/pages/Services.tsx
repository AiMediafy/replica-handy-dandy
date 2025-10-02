import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Cpu, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "Automatyzacje AI",
    description: "Eliminuj powtarzalne zadania dzięki inteligentnej automatyzacji procesów biznesowych. Nasze rozwiązania AI działają 24/7, zwiększając wydajność i redukując koszty operacyjne.",
    benefits: [
      "Automatyzacja obsługi klienta",
      "Przetwarzanie dokumentów",
      "Analiza danych w czasie rzeczywistym",
      "Integracja z istniejącymi systemami"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow w n8n",
    description: "Projektujemy i wdrażamy zaawansowane workflow wykorzystując platformę n8n. Łączymy różne systemy i aplikacje w jeden zautomatyzowany proces, oszczędzając czas i eliminując błędy.",
    benefits: [
      "Integracja aplikacji bez kodu",
      "Automatyzacja procesów marketingowych",
      "Synchronizacja danych między systemami",
      "Monitorowanie i optymalizacja workflow"
    ]
  },
  {
    icon: Cpu,
    title: "Agenci AI",
    description: "Wdrażamy inteligentnych agentów AI, którzy samodzielnie wykonują zadania, podejmują decyzje i uczą się na podstawie danych. Idealne rozwiązanie dla firm szukających przewagi konkurencyjnej.",
    benefits: [
      "Inteligentni asystenci biznesowi",
      "Analiza predykcyjna",
      "Personalizacja doświadczeń",
      "Wsparcie w podejmowaniu decyzji"
    ]
  },
  {
    icon: TrendingUp,
    title: "Optymalizacje Procesów w Firmach",
    description: "Przeprowadzamy audyt i optymalizujemy procesy biznesowe wykorzystując najnowsze technologie AI. Identyfikujemy wąskie gardła, eliminujemy nieefektywności i zwiększamy ROI.",
    benefits: [
      "Analiza obecnych procesów",
      "Identyfikacja obszarów do automatyzacji",
      "Wdrożenie rozwiązań AI",
      "Ciągłe monitorowanie i doskonalenie"
    ]
  }
];

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Services",
    "provider": {
      "@type": "Organization",
      "name": "Mediafy AI",
      "url": "https://mediafy.ai"
    },
    "areaServed": "PL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi AI",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="Usługi Automatyzacji AI | Workflow n8n | Optymalizacja Procesów - Mediafy"
        description="Profesjonalne usługi automatyzacji AI dla firm: workflow n8n, AI agents, optymalizacja procesów biznesowych. Wdrożenia w 14 dni. Sprawdź ofertę."
        keywords="automatyzacje ai dla firm, workflow n8n, ai agent, agent ai, automatyzacje n8n, optymalizacja procesów za pomocą ai, ai w biznesie, usługi ai"
        canonical="https://mediafy.ai/uslugi"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto">
            <Breadcrumbs items={[{ label: "Usługi", href: "/uslugi" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Usługi <span className="text-primary">AI</span> dla Twojego Biznesu
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kompleksowe rozwiązania AI, które transformują sposób działania firm. Od automatyzacji po inteligentnych agentów.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Kluczowe korzyści:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Umów konsultację
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Gotowy na automatyzację swojego biznesu?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sprawdź nasze gotowe rozwiązania AI lub umów się na konsultację, aby omówić dedykowane wdrożenie dla Twojej firmy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/rozwiazania">Zobacz gotowe rozwiązania</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/kontakt">Umów konsultację</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
