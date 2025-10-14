import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

type Industry = "ecommerce" | "b2b" | "marketing" | "fintech" | "manufacturing" | "other";
type CompanySize = "small" | "medium" | "large";

const roiData: Record<Industry, Record<CompanySize, { savings: string; hours: string; roi: string }>> = {
  ecommerce: {
    small: { savings: "8,000-15,000", hours: "40-60", roi: "3-4" },
    medium: { savings: "18,000-35,000", hours: "80-120", roi: "4-6" },
    large: { savings: "45,000-80,000", hours: "150-250", roi: "6-8" },
  },
  b2b: {
    small: { savings: "6,000-12,000", hours: "30-50", roi: "4-5" },
    medium: { savings: "15,000-28,000", hours: "60-100", roi: "5-7" },
    large: { savings: "35,000-65,000", hours: "120-200", roi: "6-9" },
  },
  marketing: {
    small: { savings: "10,000-18,000", hours: "50-70", roi: "3-4" },
    medium: { savings: "22,000-40,000", hours: "90-140", roi: "4-5" },
    large: { savings: "50,000-90,000", hours: "180-300", roi: "5-7" },
  },
  fintech: {
    small: { savings: "12,000-20,000", hours: "45-65", roi: "4-5" },
    medium: { savings: "28,000-50,000", hours: "100-150", roi: "5-7" },
    large: { savings: "65,000-120,000", hours: "200-350", roi: "6-10" },
  },
  manufacturing: {
    small: { savings: "7,000-14,000", hours: "35-55", roi: "4-6" },
    medium: { savings: "18,000-32,000", hours: "70-110", roi: "5-7" },
    large: { savings: "40,000-75,000", hours: "130-220", roi: "6-9" },
  },
  other: {
    small: { savings: "6,000-12,000", hours: "30-50", roi: "4-5" },
    medium: { savings: "15,000-30,000", hours: "60-100", roi: "5-7" },
    large: { savings: "35,000-70,000", hours: "120-200", roi: "6-9" },
  },
};

const industryLabels: Record<Industry, string> = {
  ecommerce: "E-commerce",
  b2b: "Usługi B2B",
  marketing: "Marketing / Agencja",
  fintech: "Fintech / Księgowość",
  manufacturing: "Produkcja",
  other: "Inna branża",
};

const sizeLabels: Record<CompanySize, string> = {
  small: "Mała firma (1-20 osób)",
  medium: "Średnia firma (20-100 osób)",
  large: "Duża firma (100+ osób)",
};

const ROICalculator = () => {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [size, setSize] = useState<CompanySize | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (industry && size) {
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        document.getElementById('roi-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const results = industry && size ? roiData[industry][size] : null;

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

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">
                W jakiej branży działasz?
              </label>
              <Select onValueChange={(value) => setIndustry(value as Industry)}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="Wybierz branżę" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(industryLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">
                Jaka jest wielkość Twojej firmy?
              </label>
              <Select onValueChange={(value) => setSize(value as CompanySize)}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="Wybierz wielkość firmy" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(sizeLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleCalculate}
              disabled={!industry || !size}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Oblicz Potencjał Oszczędności
            </Button>
          </div>

          {showResults && results && (
            <div id="roi-results" className="mt-8 pt-8 border-t border-border space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Twój Potencjał Oszczędności</h3>
                <p className="text-sm text-muted-foreground">
                  Szacunki dla {industryLabels[industry!]} ({sizeLabels[size!].toLowerCase()})
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 bg-primary/10 border-primary/20 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">
                    {results.savings} zł
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Oszczędności miesięcznie
                  </div>
                </Card>

                <Card className="p-6 bg-accent/10 border-accent/20 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-accent mb-1">
                    {results.hours}h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Zaoszczędzony czas / miesiąc
                  </div>
                </Card>

                <Card className="p-6 bg-secondary border-border text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">
                    {results.roi} mies.
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Zwrot z inwestycji (ROI)
                  </div>
                </Card>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  To tylko szacunek! Podczas <strong>darmowego discovery call</strong> dokładnie przeanalizujemy 
                  Twoje procesy i pokażemy realne możliwości oszczędności dla Twojej firmy.
                </p>
                <Button 
                  onClick={() => {
                    document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Umów Darmowy Discovery Call
                </Button>
              </div>
            </div>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Szacunki oparte na rzeczywistych wdrożeniach w firmach z Twojej branży
        </p>
      </div>
    </section>
  );
};

export default ROICalculator;
