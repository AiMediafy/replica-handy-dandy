import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary text-sm">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Przyszłość biznesu już teraz</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Automatyzacje AI{" "}
              <span className="text-primary">dla Firm</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Workflow n8n, agenci AI i optymalizacja procesów biznesowych. Zwiększ wydajność firmy dzięki inteligentnej automatyzacji AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Zobacz automatyzacje AI
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Sprawdź nasze workflow n8n
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80" role="img" aria-label="Wizualizacja AI - ikona sztucznej inteligencji reprezentująca innowacyjne rozwiązania technologiczne">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-10 border border-primary/30 rounded-full"></div>
              <div className="absolute inset-20 border border-primary/40 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center shadow-2xl shadow-primary/50">
                  <Sparkles className="w-16 h-16 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute top-10 right-10 w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-20 left-5 w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-10 right-20 w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">97%</div>
            <div className="text-muted-foreground">Wzrost wydajności</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Automatyzacja</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Zadowolonych firm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
            <div className="text-muted-foreground">Przewaga konkurencyjna</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
