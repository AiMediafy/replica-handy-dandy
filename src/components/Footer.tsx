import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Mediafy AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformujemy biznes dzięki sztucznej inteligencji.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/o-nas" className="text-muted-foreground hover:text-primary transition-colors">O nas</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog AI</a></li>
              <li><a href="/uslugi" className="text-muted-foreground hover:text-primary transition-colors">Nasze usługi</a></li>
              <li><a href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Automatyzacje AI</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Chatboty AI dla firm</a></li>
              <li><a href="/rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Workflow n8n</a></li>
              <li><a href="/rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Agenci AI</a></li>
              <li><a href="/rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Optymalizacja procesów AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Popularne Rozwiązania</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/rozwiazania/analiza-koszyka-ai" className="text-muted-foreground hover:text-primary transition-colors">Analiza koszyka AI</a></li>
              <li><a href="/rozwiazania/system-rezerwacji-ai" className="text-muted-foreground hover:text-primary transition-colors">System rezerwacji AI</a></li>
              <li><a href="/blog/jak-ai-zmienia-obsuge-klienta" className="text-muted-foreground hover:text-primary transition-colors">Jak AI zmienia obsługę klienta</a></li>
              <li><a href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Bezpłatna konsultacja AI</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground mb-4">
            <p className="mb-2">
              <strong>Mediafy AI</strong> - Automatyzacje AI dla firm | Workflow n8n | Agenci AI | Optymalizacja procesów biznesowych
            </p>
            <p>&copy; {new Date().getFullYear()} Mediafy AI. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
