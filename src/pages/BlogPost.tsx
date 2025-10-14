import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import blogAiCustomerService from "@/assets/blog-ai-customer-service.jpg";
import blogN8nAutomation from "@/assets/blog-n8n-automation.jpg";
import blogRoiAi from "@/assets/blog-roi-ai.jpg";
import blogAiAgents from "@/assets/blog-ai-agents.jpg";
import blogChatbotComparison from "@/assets/blog-chatbot-comparison.jpg";
import blogEmailAutomation from "@/assets/blog-email-automation.jpg";
import blogAiSecurity from "@/assets/blog-ai-security.jpg";
import blogAiCosts from "@/assets/blog-ai-costs.jpg";

const blogPostsData: Record<string, any> = {
  "jak-ai-zmienia-obsuge-klienta": {
    title: "Jak AI zmienia obsługę klienta w 2024 roku",
    category: "Obsługa klienta",
    date: "15 marca 2024",
    readTime: "8 min",
    image: blogAiCustomerService,
    contentFile: "/src/content/blog/jak-ai-zmienia-obsuge-klienta.html"
  },
  "automatyzacje-n8n-przewodnik": {
    title: "N8n - kompletny przewodnik po automatyzacji workflow",
    category: "Automatyzacja",
    date: "10 marca 2024",
    readTime: "8 min",
    image: blogN8nAutomation,
    contentFile: "/src/content/blog/automatyzacje-n8n-przewodnik.html"
  },
  "roi-z-wdrozen-ai": {
    title: "ROI z wdrożeń AI - case study 3 firm",
    category: "Case Studies",
    date: "5 marca 2024",
    readTime: "10 min",
    image: blogRoiAi,
    contentFile: "/src/content/blog/roi-z-wdrozen-ai.html"
  },
  "agenci-ai-przewodnik": {
    title: "Agenci AI - kompletny przewodnik dla przedsiębiorców",
    category: "AI",
    date: "1 marca 2024",
    readTime: "10 min",
    image: blogAiAgents,
    contentFile: "/src/content/blog/agenci-ai-przewodnik.html"
  },
  "chatboty-ai-vs-tradycyjne": {
    title: "Chatboty AI vs tradycyjna obsługa - co wybrać?",
    category: "Obsługa klienta",
    date: "28 lutego 2024",
    readTime: "7 min",
    image: blogChatbotComparison,
    contentFile: "/src/content/blog/chatboty-ai-vs-tradycyjne.html"
  },
  "automatyzacja-email-marketing": {
    title: "Jak zautomatyzować email marketing z AI",
    category: "Marketing",
    date: "25 lutego 2024",
    readTime: "9 min",
    image: blogEmailAutomation,
    contentFile: "/src/content/blog/automatyzacja-email-marketing.html"
  },
  "bezpieczenstwo-ai-w-firmie": {
    title: "Bezpieczeństwo danych przy wdrażaniu AI",
    category: "Bezpieczeństwo",
    date: "20 lutego 2024",
    readTime: "6 min",
    image: blogAiSecurity,
    contentFile: "/src/content/blog/bezpieczenstwo-ai-w-firmie.html"
  },
  "koszty-wdrozenia-ai": {
    title: "Ile kosztuje wdrożenie AI? Kompletny breakdown",
    category: "Finanse",
    date: "15 lutego 2024",
    readTime: "8 min",
    image: blogAiCosts,
    contentFile: "/src/content/blog/koszty-wdrozenia-ai.html"
  }
};

const recentPosts = [
  { id: "automatyzacje-n8n-przewodnik", title: "N8n - kompletny przewodnik po automatyzacji workflow", date: "10 marca 2024" },
  { id: "roi-z-wdrozen-ai", title: "ROI z wdrożeń AI - case study 3 firm", date: "5 marca 2024" },
  { id: "agenci-ai-przewodnik", title: "Agenci AI - kompletny przewodnik dla przedsiębiorców", date: "1 marca 2024" }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPostsData[id] : null;
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post?.contentFile) {
      fetch(post.contentFile)
        .then(res => res.text())
        .then(html => setContent(html))
        .catch(err => {
          console.error("Error loading content:", err);
          // Fallback to inline content if file fails to load
          if (post.content) setContent(post.content);
        });
    } else if (post?.content) {
      // Use inline content if no contentFile is specified
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Artykuł nie znaleziony</h1>
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Wróć do bloga
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Mediafy AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mediafy AI",
      "url": "https://mediafy.ai"
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog Mediafy AI`}
        description={(content || post.content || '').substring(0, 160).replace(/<[^>]*>/g, '')}
        keywords="automatyzacje AI, AI w biznesie, obsługa klienta AI"
        canonical={`https://mediafy.ai/blog/${id}`}
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Breadcrumbs 
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${id}` }
              ]} 
            />

            <article className="mb-16">
              <header className="mb-8 text-center max-w-3xl mx-auto">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
                <div className="flex items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </header>

              <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div 
                className="prose prose-lg prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-4
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-ul:my-8 prose-ul:text-muted-foreground prose-ul:space-y-3
                  prose-ol:my-8 prose-ol:text-muted-foreground prose-ol:space-y-3
                  prose-li:my-3 prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-table:w-full prose-table:my-8 prose-table:border-collapse
                  prose-th:border prose-th:border-border prose-th:p-4 prose-th:text-left prose-th:bg-muted/50 prose-th:font-semibold
                  prose-td:border prose-td:border-border prose-td:p-4
                  prose-tr:border-b prose-tr:border-border
                  [&>p:first-of-type]:text-xl [&>p:first-of-type]:text-foreground [&>p:first-of-type]:font-medium [&>p:first-of-type]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content || post.content || '' }}
              />
            </article>

            <div className="border-t border-border pt-8 mb-12">
              <Link to="/blog">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Wróć do wszystkich artykułów
                </Button>
              </Link>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Przeczytaj także</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                {recentPosts.filter(p => p.id !== id).slice(0, 3).map((recentPost) => (
                  <Link 
                    key={recentPost.id}
                    to={`/blog/${recentPost.id}`}
                    className="block group p-5 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <h4 className="font-semibold group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {recentPost.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {recentPost.date}
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;