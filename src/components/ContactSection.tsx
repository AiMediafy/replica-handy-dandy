import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="kontakt">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Rozpocznij Transformację Już Dziś
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Umów się na bezpłatną konsultację i dowiedz się, jak AI może zmienić Twój biznes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Wyślij wiadomość</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input id="name" placeholder="Jan Kowalski" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="jan@firma.pl" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nazwa firmy</Label>
                  <Input id="company" placeholder="Twoja Firma Sp. z o.o." className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Wiadomość *</Label>
                  <Textarea id="message" placeholder="Opisz swoje potrzeby..." className="bg-background border-border min-h-[120px]" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Informacje kontaktowe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Jesteśmy tutaj, aby pomóc Ci w transformacji cyfrowej. Skontaktuj się z nami w dogodny dla Ciebie sposób.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <a href="mailto:kontakt@mediafy.ai" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="w-5 h-5" />
                      kontakt@mediafy.ai
                    </a>
                    <p className="text-sm text-muted-foreground mt-1 ml-7">Napisz do nas</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Telefon</h4>
                    <a href="tel:+48123456789" className="flex items-center gap-2 text-primary hover:underline">
                      <Phone className="w-5 h-5" />
                      +48 123 456 789
                    </a>
                    <p className="text-sm text-muted-foreground mt-1 ml-7">Zadzwoń do nas</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Adres</h4>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Warszawa, Polska</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 ml-7">Spotkajmy się</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Godziny pracy</h4>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>Pon-Pt 9:00-17:00</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 ml-7">Jesteśmy dostępni</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-bold mb-2">Potrzebujesz pilnej pomocy?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Zadzwoń do nas lub umów się na pilną wideokonferencję
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Umów pilną konsultację
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
