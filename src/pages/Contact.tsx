import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Video } from "lucide-react";

const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Mediafy AI",
      "email": "kontakt@mediafy.ai",
      "telephone": "+48123456789",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Warszawa",
        "addressCountry": "PL"
      }
    }
  };

  return (
    <>
      <SEO
        title="Kontakt - Bezpłatne Demo Automatyzacji AI | Workflow n8n - Mediafy"
        description="Umów demo automatyzacji AI i workflow n8n. Bezpłatna konsultacja eksperta AI. Sprawdź jak AI agents mogą zoptymalizować Twój biznes. Kontakt 24h."
        keywords="demo ai, konsultacja automatyzacje ai, kontakt workflow n8n, umów demo ai agent, wdrożenie ai w firmie"
        canonical="https://mediafy.ai/kontakt"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Skontaktuj się <span className="text-primary">z nami</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jesteśmy tu, aby odpowiedzieć na Twoje pytania i pomóc w transformacji cyfrowej
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Wyślij wiadomość</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input 
                        id="name" 
                        placeholder="Jan Kowalski" 
                        className="bg-background border-border"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jan@firma.pl" 
                        className="bg-background border-border"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Nazwa firmy</Label>
                      <Input 
                        id="company" 
                        placeholder="Twoja Firma Sp. z o.o." 
                        className="bg-background border-border" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+48 123 456 789" 
                        className="bg-background border-border" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Wiadomość *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Opisz swoje potrzeby..." 
                        className="bg-background border-border min-h-[120px]"
                        required 
                      />
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      Wyślij wiadomość
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Dane kontaktowe</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    Email
                  </h4>
                      <a href="mailto:kontakt@mediafy.ai" className="text-primary hover:underline">
                        kontakt@mediafy.ai
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Odpowiadamy w 24h</p>
                    </div>

                    <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    Telefon
                  </h4>
                      <a href="tel:+48123456789" className="text-primary hover:underline">
                        +48 123 456 789
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Pon-Pt 9:00-17:00</p>
                    </div>

                    <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                    Adres
                  </h4>
                      <p>Warszawa, Polska</p>
                      <p className="text-sm text-muted-foreground mt-1">Spotkania online i stacjonarne</p>
                    </div>

                    <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    Godziny pracy
                  </h4>
                      <p>Poniedziałek - Piątek</p>
                      <p className="text-primary">9:00 - 17:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-primary/30">
                  <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-primary" aria-hidden="true" />
                    <h4 className="font-bold text-lg">Umów demo AI</h4>
                  </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Zobacz na żywo, jak nasze rozwiązania AI mogą usprawnić Twój biznes. 
                      Bezpłatna 30-minutowa prezentacja dostosowana do Twojej branży.
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Umów demo online
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Nasza lokalizacja</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa Google - Warszawa, Polska</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
