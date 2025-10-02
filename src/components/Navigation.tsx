import { Zap } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Mediafy AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/uslugi" className="text-muted-foreground hover:text-foreground transition-colors">
              Usługi
            </a>
            <a href="/rozwiazania" className="text-muted-foreground hover:text-foreground transition-colors">
              Gotowe rozwiązania
            </a>
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="/o-nas" className="text-muted-foreground hover:text-foreground transition-colors">
              O nas
            </a>
            <a href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Rozpocznij transformację
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
