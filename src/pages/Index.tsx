import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import WhyAISection from "@/components/WhyAISection";
import ROICalculator from "@/components/ROICalculator";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RiskReversal from "@/components/RiskReversal";
import FAQSection from "@/components/FAQSection";
import MultiStepContactForm from "@/components/MultiStepContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mediafy AI",
    "description": "Automatyzacje AI dla firm - workflow n8n, agenci AI, optymalizacja procesów",
    "url": "https://mediafy.ai",
    "logo": "https://mediafy.ai/logo.png",
    "sameAs": [
      "https://linkedin.com/company/mediafy-ai",
      "https://twitter.com/mediafy-ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-123-456-789",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    }
  };

  const faqData = [
    {
      question: "Czym są automatyzacje AI dla firm i jak workflow n8n może pomóc w biznesie?",
      answer: "Automatyzacje AI dla firm to inteligentne systemy wykorzystujące sztuczną inteligencję do wykonywania powtarzalnych zadań bez ludzkiej interwencji. Workflow n8n łączy różne aplikacje i automatyzuje procesy biznesowe. Agenci AI mogą obsługiwać klientów 24/7, przetwarzać dokumenty czy analizować dane. Automatyzacja procesów w firmach za pomocą AI oszczędza czas (do 97%), redukuje błędy i pozwala skalować operacje bez wzrostu kosztów."
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
  ];

  return (
    <>
      <SEO
        title="Automatyzacje AI dla Firm | Workflow n8n | Agenci AI - Mediafy"
        description="Automatyzacje AI dla firm, workflow n8n i agenci AI. Optymalizacja procesów biznesowych za pomocą sztucznej inteligencji. Zwiększ wydajność o 97%. Demo 24h."
        keywords="automatyzacje ai, ai agent, agent ai, workflow n8n, automatyzacje n8n, ai w biznesie, optymalizacja procesów za pomocą ai, automatyzacje ai dla firm, ai dla biznesu"
        canonical="https://mediafy.ai/"
        schema={schema}
        faqSchema={faqData}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <TrustedBySection />
        <ROICalculator />
        <WhyAISection />
        <CaseStudies />
        <ProcessSection />
        <TestimonialsSection />
        <RiskReversal />
        <MultiStepContactForm />
        <FAQSection />
        <Footer />
        <ExitIntentPopup />
      </div>
    </>
  );
};

export default Index;
