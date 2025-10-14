import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

type CompanySize = "small" | "medium" | "large";

const roiData: Record<CompanySize, { savings: string; hours: string; roi: string }> = {
  small: { savings: "8,000-18,000", hours: "40-80", roi: "4-6" },
  medium: { savings: "20,000-45,000", hours: "90-180", roi: "5-8" },
  large: { savings: "50,000-120,000", hours: "200-400", roi: "6-12" },
};

const sizeOptions = [
  {
    value: "small" as CompanySize,
    title: "Mała Firma",
    subtitle: "1-20 pracowników",
    icon: "👤",
    description: "Idealne dla startupów i małych zespołów chcących zautomatyzować podstawowe procesy"
  },
  {
    value: "medium" as CompanySize,
    title: "Średnia Firma",
    subtitle: "20-100 pracowników",
    icon: "👥",
    description: "Kompleksowa automatyzacja dla rozwijających się firm z wieloma działami"
  },
  {
    value: "large" as CompanySize,
    title: "Duża Firma",
    subtitle: "100+ pracowników",
    icon: "🏢",
    description: "Enterprise-grade rozwiązania dla korporacji z zaawansowanymi potrzebami"
  }
];

const ROICalculator = () => {
  const [size, setSize] = useState<CompanySize | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSizeSelect = (selectedSize: CompanySize) => {
    setSize(selectedSize);
    setShowResults(true);
    setTimeout(() => {
      document.getElementById('roi-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const results = size ? roiData[size] : null;

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ile Możesz Zaoszczędzić Dzięki AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Szybkie szacowanie potencjalnych oszczędności dla Twojej firmy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {sizeOptions.map((option) => (
            <Card
              key={option.value}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                size === option.value
                  ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleSizeSelect(option.value)}
            >
              <div className="p-8 text-center space-y-4">
                <div className="text-6xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold">{option.title}</h3>
                <p className="text-lg text-primary font-semibold">{option.subtitle}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
                <Button 
                  variant={size === option.value ? "default" : "outline"}
                  className="w-full mt-4"
                  size="lg"
                >
                  {size === option.value ? "Wybrany ✓" : "Oblicz Oszczędności"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showResults && results && (
          <Card className="p-8 bg-card border-primary">
            <div id="roi-results" className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Twój Potencjał Oszczędności</h3>
                <p className="text-sm text-muted-foreground">
                  Szacunki dla {sizeOptions.find(o => o.value === size)?.title} ({sizeOptions.find(o => o.value === size)?.subtitle})
                </p>
              </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-xl p-8 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-5xl font-bold text-primary mb-2">
                  {results.savings} zł
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Oszczędności miesięcznie
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent rounded-xl p-8 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="text-5xl font-bold text-accent mb-2">
                  {results.hours}h
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Zaoszczędzony czas / miesiąc
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 border-2 border-border rounded-xl p-8 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-5xl font-bold mb-2">
                  {results.roi} mies.
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Zwrot z inwestycji (ROI)
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
              <p className="text-base text-muted-foreground mb-6">
                To tylko szacunek! Podczas <strong className="text-foreground">darmowego discovery call</strong> dokładnie przeanalizujemy 
                Twoje procesy i pokażemy realne możliwości oszczędności dla Twojej firmy.
              </p>
              <Button 
                onClick={() => {
                  document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Umów Darmowy Discovery Call
              </Button>
            </div>
          </div>
        </Card>
        )}

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Szacunki oparte na rzeczywistych wdrożeniach w firmach z Twojej branży
        </p>
      </div>
    </section>
  );
};

export default ROICalculator;
