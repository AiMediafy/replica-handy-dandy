import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  schema?: object;
  canonical?: string;
  faqSchema?: Array<{ question: string; answer: string }>;
}

const SEO = ({ title, description, keywords, ogImage, schema, canonical, faqSchema }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      const newOgTitle = document.createElement("meta");
      newOgTitle.setAttribute("property", "og:title");
      newOgTitle.setAttribute("content", title);
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      const newOgDesc = document.createElement("meta");
      newOgDesc.setAttribute("property", "og:description");
      newOgDesc.setAttribute("content", description);
      document.head.appendChild(newOgDesc);
    }

    // Add og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", "website");

    // Add og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonical || window.location.href);

    // Twitter Card tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute("content", "summary_large_image");

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute("content", title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement("meta");
      twitterDesc.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute("content", description);

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    if (ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (!ogImageTag) {
        ogImageTag = document.createElement("meta");
        ogImageTag.setAttribute("property", "og:image");
        document.head.appendChild(ogImageTag);
      }
      ogImageTag.setAttribute("content", ogImage);

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement("meta");
        twitterImage.setAttribute("name", "twitter:image");
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute("content", ogImage);
    }

    // Organization/WebSite Schema
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.setAttribute("data-schema", "organization");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }

    // FAQPage Schema
    if (faqSchema && faqSchema.length > 0) {
      const faqSchemaObj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      let faqScriptTag = document.querySelector('script[type="application/ld+json"][data-schema="faq"]');
      if (!faqScriptTag) {
        faqScriptTag = document.createElement("script");
        faqScriptTag.setAttribute("type", "application/ld+json");
        faqScriptTag.setAttribute("data-schema", "faq");
        document.head.appendChild(faqScriptTag);
      }
      faqScriptTag.textContent = JSON.stringify(faqSchemaObj);
    }

    if (canonical) {
      let linkTag = document.querySelector('link[rel="canonical"]');
      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", "canonical");
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute("href", canonical);
    }
  }, [title, description, keywords, ogImage, schema, canonical, faqSchema]);

  return null;
};

export default SEO;
