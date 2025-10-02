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
              <li><a href="#o-nas" className="text-muted-foreground hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#kariera" className="text-muted-foreground hover:text-primary transition-colors">Kariera</a></li>
              <li><a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rozwiązania</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Chatboty AI</a></li>
              <li><a href="#rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Analiza danych</a></li>
              <li><a href="#rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Automatyzacja</a></li>
              <li><a href="#rozwiazania" className="text-muted-foreground hover:text-primary transition-colors">Personalizacja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Zasoby</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dokumentacja</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Webinary</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wsparcie</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Mediafy AI. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
