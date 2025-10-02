import { Zap, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "/uslugi", label: "Usługi" },
    { href: "/rozwiazania", label: "Gotowe rozwiązania" },
    { href: "/blog", label: "Blog" },
    { href: "/o-nas", label: "O nas" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Zap className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-foreground">Mediafy AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Rozpocznij transformację
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" aria-label="Otwórz menu" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <Zap className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <span className="text-xl font-bold">Mediafy AI</span>
                </div>
                
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}

                <Button 
                  onClick={() => scrollToSection('kontakt')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                >
                  Rozpocznij transformację
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
