import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dzięki współpracy z Mediafy AI udało nam się zwiększyć wydajność o 85% i znacznie zredukować koszty operacyjne. Automatyzacja procesów przyniosła natychmiastowe rezultaty.",
    author: "Anna Kowalska",
    position: "CEO, TechStart Sp. z o.o.",
    avatar: "AK"
  },
  {
    quote: "Profesjonalne podejście i zaawansowane rozwiązania AI. Zespół Mediafy przeprowadził nas przez całą transformację cyfrową krok po kroku. Polecam!",
    author: "Marcin Nowak",
    position: "Dyrektor IT, InnovateCorp",
    avatar: "MN"
  },
  {
    quote: "Inwestycja w AI była najlepszą decyzją biznesową w historii naszej firmy. ROI przekroczył nasze najśmielsze oczekiwania już po 6 miesiącach.",
    author: "Katarzyna Wiśniewska",
    position: "Prezes Zarządu, DataFlow Solutions",
    avatar: "KW"
  }
];

const stats = [
  { value: "98%", label: "Zadowolonych klientów" },
  { value: "150+", label: "Zrealizowanych projektów" },
  { value: "4.9/5", label: "Średnia ocena" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="mb-4">Opinie klientów</Badge>
        </div>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Co Mówią o Nas Nasi Klienci?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Przekonaj się, jak AI zmieniło biznes naszych klientów i dlaczego nam zaufali
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
