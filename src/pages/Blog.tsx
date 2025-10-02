import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogAiCustomerService from "@/assets/blog-ai-customer-service.jpg";
import blogN8nAutomation from "@/assets/blog-n8n-automation.jpg";
import blogRoiAi from "@/assets/blog-roi-ai.jpg";
import blogAiAgents from "@/assets/blog-ai-agents.jpg";
import blogChatbotComparison from "@/assets/blog-chatbot-comparison.jpg";
import blogEmailAutomation from "@/assets/blog-email-automation.jpg";
import blogAiSecurity from "@/assets/blog-ai-security.jpg";
import blogAiCosts from "@/assets/blog-ai-costs.jpg";

const blogPosts = [
  {
    id: "jak-ai-zmienia-obsuge-klienta",
    title: "Jak AI zmienia obsługę klienta w 2024 roku",
    excerpt: "Odkryj, jak sztuczna inteligencja rewolucjonizuje sposób, w jaki firmy komunikują się z klientami i jakie korzyści to przynosi.",
    category: "Obsługa klienta",
    date: "15 marca 2024",
    readTime: "5 min",
    image: blogAiCustomerService
  },
  {
    id: "automatyzacje-n8n-przewodnik",
    title: "N8n - kompletny przewodnik po automatyzacji workflow",
    excerpt: "Praktyczny przewodnik po tworzeniu zaawansowanych workflow w n8n. Od podstaw do zaawansowanych integracji.",
    category: "Automatyzacja",
    date: "10 marca 2024",
    readTime: "8 min",
    image: blogN8nAutomation
  },
  {
    id: "roi-z-wdrozen-ai",
    title: "ROI z wdrożeń AI - case study 3 firm",
    excerpt: "Sprawdź, jak trzy różne firmy osiągnęły zwrot z inwestycji w AI już w pierwszym roku wdrożenia.",
    category: "Case Studies",
    date: "5 marca 2024",
    readTime: "6 min",
    image: blogRoiAi
  },
  {
    id: "agenci-ai-przewodnik",
    title: "Agenci AI - kompletny przewodnik dla przedsiębiorców",
    excerpt: "Czym są agenci AI, jak działają i jak mogą pomóc Twojej firmie? Wszystko, co musisz wiedzieć w jednym artykule.",
    category: "AI",
    date: "1 marca 2024",
    readTime: "10 min",
    image: blogAiAgents
  },
  {
    id: "chatboty-ai-vs-tradycyjne",
    title: "Chatboty AI vs tradycyjna obsługa - co wybrać?",
    excerpt: "Porównanie kosztów, efektywności i satysfakcji klientów między chatbotami AI a tradycyjną obsługą klienta.",
    category: "Obsługa klienta",
    date: "28 lutego 2024",
    readTime: "7 min",
    image: blogChatbotComparison
  },
  {
    id: "automatyzacja-email-marketing",
    title: "Jak zautomatyzować email marketing z AI",
    excerpt: "Praktyczny poradnik wdrożenia inteligentnej automatyzacji kampanii emailowych z personalizacją na nowym poziomie.",
    category: "Marketing",
    date: "25 lutego 2024",
    readTime: "9 min",
    image: blogEmailAutomation
  },
  {
    id: "bezpieczenstwo-ai-w-firmie",
    title: "Bezpieczeństwo danych przy wdrażaniu AI",
    excerpt: "Wszystko o ochronie danych firmowych podczas wdrażania rozwiązań AI. RODO, szyfrowanie i best practices.",
    category: "Bezpieczeństwo",
    date: "20 lutego 2024",
    readTime: "6 min",
    image: blogAiSecurity
  },
  {
    id: "koszty-wdrozenia-ai",
    title: "Ile kosztuje wdrożenie AI? Kompletny breakdown",
    excerpt: "Szczegółowa analiza kosztów wdrożenia różnych rozwiązań AI - od chatbotów po zaawansowane systemy analityczne.",
    category: "Finanse",
    date: "15 lutego 2024",
    readTime: "8 min",
    image: blogAiCosts
  }
];

const categories = ["Wszystkie", "Obsługa klienta", "Automatyzacja", "Case Studies", "AI", "Marketing", "Bezpieczeństwo", "Finanse"];
const recentPosts = blogPosts.slice(0, 3);

const Blog = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Mediafy AI",
    "description": "Artykuły o AI, automatyzacjach i transformacji cyfrowej",
    "publisher": {
      "@type": "Organization",
      "name": "Mediafy AI",
      "url": "https://mediafy.ai"
    }
  };

  return (
    <>
      <SEO
        title="Blog Automatyzacje AI | Workflow n8n | AI w Biznesie - Mediafy"
        description="Praktyczne poradniki o automatyzacjach AI dla firm, workflow n8n, AI agents. Case studies ROI, przewodniki wdrożeń. Porady ekspertów AI."
        keywords="blog automatyzacje ai, jak wdrożyć ai, workflow n8n tutorial, ai agent przewodnik, ai w biznesie case study, automatyzacje n8n"
        canonical="https://mediafy.ai/blog"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
            
            <div className="mb-16 text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Blog <span className="text-primary">Mediafy AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Praktyczne artykuły o AI, automatyzacjach i transformacji cyfrowej
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                          Czytaj więcej <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <aside className="space-y-6">
                <Card className="bg-card border-border sticky top-24">
                  <CardHeader>
                    <CardTitle>Kategorie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button className="w-full text-left px-3 py-2 rounded hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Ostatnie wpisy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link 
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <h4 className="font-medium group-hover:text-primary transition-colors mb-1">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
