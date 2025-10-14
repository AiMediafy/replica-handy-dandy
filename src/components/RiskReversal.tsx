import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Shield, TrendingUp, Eye } from "lucide-react";

const guarantees = [
  {
    icon: Check,
    title: "Darmowy Audyt",
    description: "Analizujemy Twoje procesy i pokazujemy możliwości. Wartość 2,999 zł.",
  },
  {
    icon: Shield,
    title: "30 Dni Gwarancji",
    description: "Pełny zwrot pieniędzy, jeśli nie zobaczysz rezultatów.",
  },
  {
    icon: TrendingUp,
    title: "Płacisz za Efekty",
    description: "Rozliczenie oparte na rezultatach, nie czasie pracy.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "Bez ukrytych kosztów. Wiesz dokładnie, za co płacisz.",
  },
];

const RiskReversal = () => {
  const scrollToForm = () => {
    document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Rozpocznij Bez Ryzyka
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Twoja satysfakcja jest naszym priorytetem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="text-center p-6 border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground">
                {guarantee.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToForm} size="lg">
            Zacznij Bez Ryzyka - Umów Darmowy Audyt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
