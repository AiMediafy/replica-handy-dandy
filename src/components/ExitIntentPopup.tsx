import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem('exitPopupShown');
    if (wasShown) {
      setPopupShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving through top (closing tab/window)
      if (e.clientY <= 10 && !popupShown) {
        setShowPopup(true);
        setPopupShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [popupShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Błąd",
        description: "Proszę podać adres email",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp integration
    const message = `Nowa subskrypcja ebooka:%0A%0AEmail: ${encodeURIComponent(email)}%0AEbook: "7 Procesów, które AI zautomatyzuje w 2025"`;
    const whatsappUrl = `https://wa.me/48123456789?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Dziękujemy!",
      description: "Link do ebooka został wysłany na Twój email.",
    });
    
    setShowPopup(false);
    setEmail("");
  };

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="max-w-lg p-0">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-8 text-center space-y-6">
          <div className="text-5xl mb-4">⏰</div>
          
          <h3 className="text-2xl md:text-3xl font-bold">
            Chwilę! Zanim Wyjdziesz...
          </h3>
          
          <p className="text-muted-foreground">
            Pobierz darmowy ebook:
          </p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">
              "7 Procesów, które AI Zautomatyzuje w 2025"
            </h4>
            <p className="text-sm text-muted-foreground">
              Praktyczny przewodnik z przykładami i szacunkami ROI
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Twój email biznesowy"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border"
              required
            />
            <Button type="submit" className="w-full" size="lg">
              Wyślij Mi Ebook (Darmowy)
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            Otrzymasz również newsletter z tips o AI w biznesie. 
            Możesz się wypisać w każdej chwili.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
