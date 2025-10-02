import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyAISection from "@/components/WhyAISection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
        title="Mediafy AI - Automatyzacje AI, Workflow n8n, Agenci AI dla Biznesu"
        description="Transformujemy biznes dzięki AI. Automatyzacje procesów, workflow n8n, agenci AI i optymalizacje firm. Zwiększ wydajność o 97% z Mediafy AI."
        keywords="automatyzacje AI, AI workflow, automatyzacje n8n, AI w biznesie, optymalizacje z AI, agenci AI"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <WhyAISection />
        <ProcessSection />
        <TestimonialsSection />
        <SolutionsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
