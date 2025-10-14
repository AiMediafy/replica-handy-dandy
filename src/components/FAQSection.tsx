import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Ile kosztuje wstępny audyt procesów i automatyzacji?",
    answer: "Wstępny audyt jest całkowicie darmowy (wartość 2,999 zł). Analizujemy Twoje procesy, identyfikujemy obszary do automatyzacji AI i pokazujemy szacowany ROI. Zero zobowiązań. Podczas discovery call dokładnie przeanalizujemy Twoje wyzwania biznesowe i zaproponujemy konkretne rozwiązania. To bezpłatna 30-minutowa konsultacja z ekspertem AI, która pomoże Ci zrozumieć, jak AI może zrewolucjonizować Twoją firmę."
  },
  {
    question: "Jak szybko zobaczę pierwsze rezultaty z wdrożenia AI?",
    answer: "Pierwsze automatyzacje działają już po 2-3 tygodniach od rozpoczęcia wdrożenia. Proste workflow n8n (np. automatyzacja email marketing) możemy uruchomić w ciągu tygodnia. Kompleksowe rozwiązania z agentami AI potrzebują 4-6 tygodni. Pełny ROI z automatyzacji AI widzisz średnio po 4-6 miesiącach. Zaczynamy od quick wins - najprostszych automatyzacji, które dają natychmiastowe rezultaty, a potem stopniowo rozbudowujemy system."
  },
  {
    question: "Ile kosztuje wdrożenie automatyzacji AI w średniej firmie i jaki jest ROI?",
    answer: "Gotowe automatyzacje AI dla firm zaczynają się od 1,999 zł/mies (chatbot, workflow n8n dla email marketingu). Dedykowane wdrożenia agentów AI to inwestycja 15,000-50,000 zł jednorazowo. Średni ROI z automatyzacji n8n i agentów AI to 6-12 miesięcy. Nasze case studies pokazują oszczędności 60-90% kosztów operacyjnych. Optymalizacja procesów za pomocą AI szybko się zwraca - klienci oszczędzają średnio 20h/tydzień pracy zespołu."
  },
  {
    question: "Jak długo trwa wdrożenie workflow n8n i automatyzacji AI w firmie?",
    answer: "Proste workflow n8n (np. automatyzacja email marketing, integracja CRM) wdrażamy w 2-3 tygodnie. Agenci AI do obsługi klienta to 4-6 tygodni. Zaawansowana optymalizacja procesów w firmach za pomocą AI (pełna automatyzacja działu) wymaga 8-12 tygodni. Zaczynamy od darmowego audytu procesów, identyfikujemy obszary do automatyzacji AI, projektujemy workflow n8n, wdrażamy i szkolimy zespół. AI w biznesie można wdrożyć stopniowo, zaczynając od najbardziej opłacalnych automatyzacji."
  },
  {
    question: "Czym różni się AI agent od chatbota i workflow n8n?",
    answer: "Chatbot AI to asystent konwersacyjny do obsługi klienta. AI agent to bardziej autonomiczny - może podejmować decyzje, wykonywać złożone zadania i uczyć się. Workflow n8n to automatyzacja sekwencji działań między aplikacjami. W praktyce: chatbot odpowiada na pytania, agent AI może analizować zgłoszenie i automatycznie je rozwiązać, a workflow n8n łączy systemy (np. CRM + email + baza danych). Najlepsze rezultaty daje połączenie: workflow n8n jako szkielet procesów + agenci AI do inteligentnych decyzji."
  },
  {
    question: "Czy automatyzacje n8n i agenci AI mogą zastąpić pracowników w firmie?",
    answer: "Automatyzacje AI nie zastępują ludzi, ale odciążają ich od rutynowych zadań. AI agents wykonują powtarzalne czynności (przetwarzanie dokumentów, podstawowa obsługa klienta, synchronizacja danych), a ludzie skupiają się na strategii, kreatywności i złożonych problemach. Optymalizacja procesów za pomocą AI i workflow n8n to nie redukcja etatów, ale zwiększenie produktywności zespołu. Firmy wdrażające automatyzacje AI dla biznesu najczęściej realokują zasoby na rozwój, nie zwalniają pracowników."
  },
  {
    question: "Jakie branże najczęściej korzystają z automatyzacji AI i workflow n8n?",
    answer: "Automatyzacje AI dla firm sprawdzają się w każdej branży. E-commerce wykorzystuje agentów AI do rekomendacji produktów i chatbotów obsługi. Firmy B2B automatyzują workflow n8n dla zarządzania leadami i CRM. Marketing korzysta z AI w email automation i content generation. Produkcja wdraża optymalizację procesów za pomocą AI (OCR dokumentów, predykcja zapasów). Usługi profesjonalne automatyzują rezerwacje i fakturowanie. Workflow n8n i AI agents są uniwersalne - można je dostosować do specyfiki każdego biznesu."
  },
  {
    question: "Jak workflow n8n integruje się z istniejącymi systemami w firmie?",
    answer: "N8n to platforma workflow z 400+ gotowymi integracjami (Slack, Google Workspace, Salesforce, HubSpot, WooCommerce, WordPress, SQL, API REST). Automatyzacje n8n łączą Twoje systemy bez pisania kodu. Możesz też stworzyć własne integracje. AI agents mogą działać w ramach workflow n8n, automatyzując decyzje. Przykład: workflow n8n odbiera zamówienie (WooCommerce) → AI agent klasyfikuje priorytet → wysyła powiadomienie (Slack) → aktualizuje CRM → generuje fakturę. Optymalizacja procesów w firmach za pomocą workflow n8n jest możliwa nawet z przestarzałymi systemami (integracja przez API/webhook)."
  },
  {
    question: "Czy mogę przetestować automatyzacje AI i workflow n8n przed wdrożeniem?",
    answer: "Tak! Oferujemy bezpłatne demo automatyzacji AI dla Twojej firmy. Pokażemy działanie workflow n8n i agentów AI na żywych przykładach z Twojej branży. Możemy też przygotować proof-of-concept (POC) - prototyp automatyzacji na Twoich rzeczywistych danych, abyś zobaczył konkretne rezultaty optymalizacji procesów za pomocą AI. Gotowe rozwiązania (chatboty AI, workflow n8n dla email marketingu) oferujemy z 30-dniowym okresem testowym. Większość klientów widzi efekty automatyzacji n8n już w pierwszym tygodniu testu."
  },
  {
    question: "Bezpieczeństwo danych przy automatyzacji AI - jak chronicie informacje firmowe?",
    answer: "Bezpieczeństwo automatyzacji AI to nasz priorytet. Workflow n8n możemy hostować lokalnie (pełna kontrola nad danymi) lub w bezpiecznej chmurze zgodnej z RODO. Wszystkie dane w systemach AI są szyfrowane (AES-256). Agenci AI działają zgodnie z polityką bezpieczeństwa Twojej firmy. Regularnie audytujemy automatyzacje n8n pod kątem zabezpieczeń. Podpisujemy NDA przed wdrożeniem. AI w biznesie to nie ryzyko - to bezpieczna optymalizacja procesów przy zachowaniu najwyższych standardów ochrony danych."
  },
  {
    question: "Jakie wsparcie otrzymam po wdrożeniu automatyzacji AI i workflow n8n?",
    answer: "Po wdrożeniu automatyzacji AI dla firm zapewniamy: (1) Wsparcie techniczne 24/7 dla krytycznych workflow n8n i agentów AI, (2) Regularne przeglądy i optymalizację procesów, (3) Monitoring wydajności automatyzacji n8n, (4) Aktualizacje AI agents i nowe funkcje, (5) Szkolenia zespołu z obsługi workflow, (6) Pomoc w rozbudowie automatyzacji o nowe obszary. Optymalizacja procesów za pomocą AI to proces ciągły - doradzamy, jak maksymalizować ROI i stopniowo automatyzować kolejne obszary biznesu. Średni czas reakcji na zgłoszenie: poniżej 2h."
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
