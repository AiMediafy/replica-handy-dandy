import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const cases = [
  {
    badge: "E-commerce",
    title: "Sklep Odzieżowy",
    size: "15 osób",
    results: [
      { 
        value: "87%", 
        label: "redukcja czasu obsługi klienta",
        icon: TrendingUp
      },
    ],
    details: [
      { icon: DollarSign, text: "Oszczędności: ~18,000 zł/mies" },
      { icon: Clock, text: "ROI osiągnięte w: 4 miesiące" },
      { icon: null, text: "Rozwiązania: Chatbot AI + 5 workflow n8n" },
    ],
  },
  {
    badge: "Usługi B2B",
    title: "Agencja Marketingowa",
    size: "25 osób",
    results: [
      { 
        value: "320k", 
        label: "zł oszczędności rocznie",
        icon: DollarSign
      },
    ],
    details: [
      { icon: TrendingUp, text: "Wzrost lead generation: 240%" },
      { icon: Clock, text: "Zaoszczędzony czas: 60h/tydzień" },
      { icon: null, text: "Rozwiązania: 3 agenci AI + 12 workflow" },
    ],
  },
  {
    badge: "Fintech",
    title: "Firma Księgowa",
    size: "40 osób",
    results: [
      { 
        value: "24/7", 
        label: "automatyzacja przetwarzania faktur",
        icon: Clock
      },
    ],
    details: [
      { icon: DollarSign, text: "Oszczędności: ~45,000 zł/mies" },
      { icon: null, text: "Dokumenty: 12,000+ faktur/mies (OCR + AI)" },
      { icon: null, text: "Rozwiązania: Workflow n8n + OCR AI" },
    ],
  },
];

const CaseStudies = () => {
  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Wyniki Naszych Klientów
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Realne rezultaty z wdrożeń AI w polskich firmach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {cases.map((caseStudy, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <Badge variant="secondary">{caseStudy.badge}</Badge>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{caseStudy.title}</h3>
                  <p className="text-sm text-muted-foreground">{caseStudy.size}</p>
                </div>

                {caseStudy.results.map((result, rIndex) => (
                  <div key={rIndex} className="flex items-center gap-4 py-4">
                    <result.icon className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-4xl font-bold text-primary">
                        {result.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{result.label}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <ul className="space-y-2">
                  {caseStudy.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2 text-sm">
                      {detail.icon ? (
                        <detail.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <span className="text-primary flex-shrink-0">🤖</span>
                      )}
                      <span>{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-lg">
            Chcesz podobne rezultaty w swojej firmie?
          </p>
          <Button onClick={scrollToCalculator} size="lg">
            Sprawdź Swój Potencjał Oszczędności
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
