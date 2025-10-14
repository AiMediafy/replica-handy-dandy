import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Calendar, Target, Briefcase, AlertCircle } from "lucide-react";

type FormData = {
  goal: string;
  industry: string;
  challenges: string[];
  name: string;
  email: string;
  phone: string;
  wantsCall: boolean;
};

const goals = [
  { value: "time", label: "⏱️ Oszczędność czasu zespołu", description: "Automatyzacja rutynowych zadań" },
  { value: "cost", label: "💰 Redukcja kosztów operacyjnych", description: "Optymalizacja procesów i zasobów" },
  { value: "growth", label: "📈 Wzrost sprzedaży i leadów", description: "Skalowanie działań marketingowych" },
];

const industries = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "b2b", label: "Usługi B2B" },
  { value: "marketing", label: "Marketing / Agencja" },
  { value: "fintech", label: "Fintech / Księgowość" },
  { value: "manufacturing", label: "Produkcja" },
  { value: "other", label: "Inna branża" },
];

const challengeOptions = [
  "Obsługa klienta zajmuje za dużo czasu",
  "Manualne przetwarzanie danych/dokumentów",
  "Problemy z integracją systemów",
  "Brak czasu na strategiczne zadania",
  "Wysokie koszty operacyjne",
  "Trudności w skalowaniu biznesu",
];

const MultiStepContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    industry: "",
    challenges: [],
    name: "",
    email: "",
    phone: "",
    wantsCall: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleChallenge = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const canProceed = () => {
    if (step === 1) return formData.goal !== "";
    if (step === 2) return formData.industry !== "";
    if (step === 3) return formData.challenges.length > 0;
    return false;
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const message = `Nowa rejestracja na Discovery Call:%0A%0A` +
        `Imię: ${encodeURIComponent(formData.name)}%0A` +
        `Email: ${encodeURIComponent(formData.email)}%0A` +
        `${formData.phone ? `Telefon: ${encodeURIComponent(formData.phone)}%0A` : ''}` +
        `Główny cel: ${encodeURIComponent(goals.find(g => g.value === formData.goal)?.label || '')}%0A` +
        `Branża: ${encodeURIComponent(industries.find(i => i.value === formData.industry)?.label || '')}%0A` +
        `Wyzwania: ${encodeURIComponent(formData.challenges.join(', '))}%0A` +
        `Chce umówić call: ${formData.wantsCall ? 'TAK ✅' : 'Nie'}`;
      
      const whatsappUrl = `https://wa.me/48123456789?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Świetnie!",
        description: formData.wantsCall 
          ? "Dziękujemy! Skontaktujemy się, aby umówić discovery call."
          : "Dziękujemy! Wkrótce otrzymasz spersonalizowane rekomendacje.",
      });
      
      // Reset form
      setFormData({
        goal: "",
        industry: "",
        challenges: [],
        name: "",
        email: "",
        phone: "",
        wantsCall: true,
      });
      setStep(1);
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać formularza. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="multi-step-form" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Odkryj Swoje Możliwości Automatyzacji
          </h2>
          <p className="text-lg text-muted-foreground">
            Odpowiedz na kilka pytań - pokażemy Ci spersonalizowane rozwiązania
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    s <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Goal */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">1. Jaki jest Twój główny cel?</h3>
                </div>
                <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData('goal', value)}>
                  {goals.map((goal) => (
                    <Card
                      key={goal.value}
                      className={`cursor-pointer transition-all ${
                        formData.goal === goal.value
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => updateFormData('goal', goal.value)}
                    >
                      <div className="flex items-center space-x-3 p-4">
                        <RadioGroupItem value={goal.value} id={goal.value} />
                        <Label htmlFor={goal.value} className="flex-1 cursor-pointer">
                          <div className="font-semibold">{goal.label}</div>
                          <div className="text-sm text-muted-foreground">{goal.description}</div>
                        </Label>
                      </div>
                    </Card>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Industry */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">2. W jakiej branży działasz?</h3>
                </div>
                <RadioGroup value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                  <div className="grid md:grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <Card
                        key={industry.value}
                        className={`cursor-pointer transition-all ${
                          formData.industry === industry.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => updateFormData('industry', industry.value)}
                      >
                        <div className="flex items-center space-x-3 p-4">
                          <RadioGroupItem value={industry.value} id={industry.value} />
                          <Label htmlFor={industry.value} className="flex-1 cursor-pointer font-semibold">
                            {industry.label}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Challenges */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">3. Jakie są Twoje najważniejsze wyzwania?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Wybierz wszystkie, które pasują</p>
                <div className="space-y-3">
                  {challengeOptions.map((challenge) => (
                    <Card
                      key={challenge}
                      className={`cursor-pointer transition-all ${
                        formData.challenges.includes(challenge)
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => toggleChallenge(challenge)}
                    >
                      <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                          checked={formData.challenges.includes(challenge)}
                          onCheckedChange={() => toggleChallenge(challenge)}
                        />
                        <Label className="flex-1 cursor-pointer">{challenge}</Label>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact & Discovery Call */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">4. Umów Discovery Call</h3>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-lg mb-2">🎯 Co to jest Discovery Call?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bezpłatna 30-minutowa rozmowa, podczas której:
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Dokładnie przeanalizujemy Twoje procesy biznesowe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Pokażemy konkretne możliwości automatyzacji AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Oszacujemy realny ROI i potencjalne oszczędności</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Zaproponujemy spersonalizowane rozwiązania</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko *</Label>
                    <Input
                      id="name"
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email biznesowy *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jan@firma.pl"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  <Card className="bg-accent/10 border-accent/20 p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="wantsCall"
                        checked={formData.wantsCall}
                        onCheckedChange={(checked) => updateFormData('wantsCall', checked)}
                        className="mt-1"
                      />
                      <Label htmlFor="wantsCall" className="cursor-pointer flex-1">
                        <div className="font-semibold mb-1">
                          ✅ TAK, chcę umówić 30-min Discovery Call
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Bezpłatna konsultacja z ekspertem AI (bez zobowiązań)
                        </div>
                      </Label>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={isSubmitting}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Wstecz
                </Button>
              )}
              
              {step < 4 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={step === 1 ? "ml-auto" : ""}
                >
                  Dalej
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? "Wysyłanie..." : formData.wantsCall ? "Umów Discovery Call" : "Wyślij Zgłoszenie"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MultiStepContactForm;
