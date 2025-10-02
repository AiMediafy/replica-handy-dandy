import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Czym dokładnie są automatyzacje AI i jak mogą pomóc mojej firmie?",
    answer: "Automatyzacje AI to inteligentne systemy, które wykorzystują sztuczną inteligencję do wykonywania powtarzalnych zadań bez ludzkiej interwencji. Mogą pomóc Twojej firmie poprzez oszczędność czasu (do 97%), redukcję błędów, pracę 24/7 oraz możliwość skalowania operacji bez proporcjonalnego wzrostu kosztów. Przykłady to automatyczna obsługa klienta, przetwarzanie dokumentów czy analiza danych."
  },
  {
    question: "Ile czasu zajmuje wdrożenie rozwiązań AI w mojej firmie?",
    answer: "Czas wdrożenia zależy od złożoności projektu. Proste automatyzacje możemy uruchomić w 2-4 tygodnie, bardziej zaawansowane systemy z agentami AI wymagają 6-12 tygodni. Zawsze zaczynamy od darmowej konsultacji i audytu, aby dokładnie określić zakres i harmonogram wdrożenia dostosowany do Twoich potrzeb."
  },
  {
    question: "Czy potrzebuję specjalistycznej wiedzy technicznej, aby korzystać z Waszych rozwiązań?",
    answer: "Nie! Tworzymy rozwiązania typu 'plug & play', które są intuicyjne i łatwe w obsłudze. Zapewniamy kompleksowe szkolenie dla Twojego zespołu oraz dokumentację. Dodatkowo oferujemy stałe wsparcie techniczne, więc zawsze możesz liczyć na pomoc naszych ekspertów."
  },
  {
    question: "Jak wygląda proces współpracy i wdrożenia?",
    answer: "Proces składa się z 5 kroków: (1) Darmowa konsultacja i analiza potrzeb, (2) Audyt procesów i identyfikacja obszarów do automatyzacji, (3) Projektowanie i prototypowanie rozwiązania, (4) Wdrożenie i integracja z istniejącymi systemami, (5) Szkolenie zespołu i przekazanie projektu. Po wdrożeniu zapewniamy ciągłe wsparcie i optymalizację."
  },
  {
    question: "Czy moje dane są bezpieczne? Jak chronicie informacje firmowe?",
    answer: "Bezpieczeństwo danych to nasz priorytet. Wszystkie dane są szyfrowane (AES-256), przechowywane w bezpiecznej infrastrukturze zgodnej z RODO. Używamy najnowszych protokołów bezpieczeństwa, regularnie przeprowadzamy audyty i testy penetracyjne. Podpisujemy umowy NDA i zapewniamy pełną zgodność z przepisami o ochronie danych osobowych."
  },
  {
    question: "Jaki jest koszt wdrożenia automatyzacji AI?",
    answer: "Koszty zaczynają się od 1,999 zł/mies za gotowe rozwiązania. Dedykowane wdrożenia są wyceniane indywidualnie po audycie. Średni ROI naszych klientów to 6-12 miesięcy. Oferujemy elastyczne modele rozliczeń - abonamentowe lub jednorazowe. Pamiętaj, że oszczędności z automatyzacji zazwyczaj wielokrotnie przewyższają koszty wdrożenia."
  },
  {
    question: "Czym różni się n8n od innych narzędzi do automatyzacji?",
    answer: "N8n to open-source'owa platforma workflow, która oferuje większą elastyczność i kontrolę niż konkurencja (Zapier, Make). Nie ma limitów na liczbę operacji, możesz hostować lokalnie (pełna kontrola nad danymi), masz dostęp do 400+ integracji, możliwość tworzenia własnych węzłów i znacznie niższe koszty przy dużej skali operacji. Idealne dla firm, które chcą pełnej kontroli nad automatyzacjami."
  },
  {
    question: "Czy mogę przetestować Wasze rozwiązania przed zakupem?",
    answer: "Tak! Oferujemy 30-dniowy okres testowy dla większości rozwiązań. Dodatkowo możesz umówić się na darmowe demo, podczas którego pokażemy działanie systemu na żywym przykładzie. Dla niektórych rozwiązań przygotowujemy również proof-of-concept (POC) na Twoich rzeczywistych danych, abyś mógł zobaczyć konkretne rezultaty przed podjęciem decyzji."
  }
];

interface FAQSectionProps {
  title?: string;
  description?: string;
}

const FAQSection = ({ 
  title = "Najczęściej Zadawane Pytania", 
  description = "Odpowiedzi na pytania dotyczące automatyzacji AI, workflow i wdrożeń" 
}: FAQSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
