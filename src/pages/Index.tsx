import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import WhyAISection from "@/components/WhyAISection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mediafy AI",
    "description": "Transformujemy biznes dzięki AI - automatyzacje, workflow n8n, agenci AI",
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

  return (
    <>
      <SEO
        title="Automatyzacje AI dla Firm | Workflow n8n | Agenci AI - Mediafy"
        description="Automatyzacje AI dla firm, workflow n8n i agenci AI. Optymalizacja procesów biznesowych za pomocą sztucznej inteligencji. Zwiększ wydajność o 97%. Demo 24h."
        keywords="automatyzacje ai, ai agent, agent ai, workflow n8n, automatyzacje n8n, ai w biznesie, optymalizacja procesów za pomocą ai, automatyzacje ai dla firm, ai dla biznesu"
        canonical="https://mediafy.ai/"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <TrustedBySection />
        <WhyAISection />
        <ProcessSection />
        <TestimonialsSection />
        <SolutionsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
