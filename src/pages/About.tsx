import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap } from "lucide-react";

const team = [
  { name: "Jan Kowalski", role: "CEO & AI Architect", initials: "JK" },
  { name: "Anna Nowak", role: "Head of Automation", initials: "AN" },
  { name: "Piotr Wiśniewski", role: "Lead Developer", initials: "PW" },
  { name: "Maria Lewandowska", role: "AI Consultant", initials: "ML" }
];

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mediafy AI",
    "description": "Transformujemy biznes dzięki AI - automatyzacje, workflow n8n, agenci AI",
    "url": "https://mediafy.ai",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Warszawa",
      "addressCountry": "PL"
    }
  };

  return (
    <>
      <SEO
        title="O nas - Eksperci AI i Automatyzacji Biznesowej | Mediafy AI"
        description="Poznaj zespół Mediafy AI - ekspertów od automatyzacji AI, workflow n8n i transformacji cyfrowej firm. Nasza misja to demokratyzacja sztucznej inteligencji."
        keywords="o nas, zespół AI, eksperci automatyzacji, Mediafy AI, transformacja cyfrowa"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Breadcrumbs items={[{ label: "O nas", href: "/o-nas" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Poznaj <span className="text-primary">Mediafy AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jesteśmy zespołem pasjonatów AI, którzy wierzą, że sztuczna inteligencja powinna być dostępna dla każdej firmy
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nasza historia</h2>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Mediafy AI powstało z prostej obserwacji - małe i średnie firmy w Polsce mają ogromny potencjał do automatyzacji, 
                    ale brakuje im dostępu do przystępnych rozwiązań AI. Zaczęliśmy od kilku projektów dla znajomych przedsiębiorców, 
                    a dziś pomagamy dziesiątkom firm w całej Polsce.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nasza specjalizacja to nie tylko wdrażanie gotowych rozwiązań, ale przede wszystkim edukacja. Wierzymy, że każdy 
                    przedsiębiorca powinien rozumieć, jak AI może pomóc jego firmie, dlatego stawiamy na transparentność i partnerskie podejście.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nasze wartości</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Misja</h3>
                    <p className="text-muted-foreground">
                      Demokratyzujemy dostęp do AI, umożliwiając każdej firmie korzystanie z najnowszych technologii
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Wartości</h3>
                    <p className="text-muted-foreground">
                      Transparentność, partnerstwo i edukacja to fundamenty naszej współpracy z klientami
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Wizja</h3>
                    <p className="text-muted-foreground">
                      Przyszłość, w której AI wspiera każdą polską firmę w osiąganiu jej pełnego potencjału
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nasz zespół</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <Card key={index} className="bg-card border-border text-center">
                    <CardContent className="pt-6">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">{member.initials}</span>
                      </div>
                      <h3 className="font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Dołącz do rewolucji AI</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Jesteśmy tu, aby pomóc Twojej firmie wykorzystać pełny potencjał sztucznej inteligencji. 
                Umów się na bezpłatną konsultację i poznaj możliwości.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
