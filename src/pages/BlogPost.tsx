import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPostsData: Record<string, any> = {
  "jak-ai-zmienia-obsuge-klienta": {
    title: "Jak AI zmienia obsługę klienta w 2024 roku",
    category: "Obsługa klienta",
    date: "15 marca 2024",
    readTime: "5 min",
    content: `
      <p>Sztuczna inteligencja rewolucjonizuje sposób, w jaki firmy komunikują się z klientami. W 2024 roku obserwujemy bezprecedensowy wzrost zastosowań AI w obsłudze klienta.</p>

      <h2>Automatyzacja na nowym poziomie</h2>
      <p>Chatboty AI nowej generacji potrafią nie tylko odpowiadać na podstawowe pytania, ale również rozumieć kontekst rozmowy, wykrywać emocje klienta i dostosowywać styl komunikacji.</p>

      <h3>Kluczowe korzyści</h3>
      <p>Firmy wdrażające AI w obsłudze klienta obserwują:</p>
      <ul>
        <li>Redukcję czasu odpowiedzi o 95%</li>
        <li>Wzrost satysfakcji klientów o 40%</li>
        <li>Obniżenie kosztów operacyjnych o 60%</li>
        <li>Dostępność wsparcia 24/7</li>
      </ul>

      <h2>Personalizacja w czasie rzeczywistym</h2>
      <p>Nowoczesne systemy AI analizują historię interakcji klienta, jego preferencje i zachowania, aby dostarczyć maksymalnie spersonalizowane doświadczenie.</p>

      <h3>Przyszłość już teraz</h3>
      <p>Przewidujemy, że do końca 2024 roku ponad 80% firm B2C będzie wykorzystywać AI w obsłudze klienta. Te, które nie zdecydują się na transformację cyfrową, mogą stracić przewagę konkurencyjną.</p>
    `
  }
};

const recentPosts = [
  { id: "automatyzacje-n8n-przewodnik", title: "N8n - kompletny przewodnik po automatyzacji workflow", date: "10 marca 2024" },
  { id: "roi-z-wdrozen-ai", title: "ROI z wdrożeń AI - case study 3 firm", date: "5 marca 2024" }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artykuł nie znaleziony</h1>
            <Link to="/blog" className="text-primary hover:underline">Wróć do bloga</Link>
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
        description={post.content.substring(0, 160)}
        keywords="automatyzacje AI, AI w biznesie, obsługa klienta AI"
        schema={schema}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Breadcrumbs 
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${id}` }
              ]} 
            />

            <article className="mb-12">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className="h-64 bg-secondary/50 rounded-lg mb-8"></div>

              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Przeczytaj także</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((recentPost) => (
                  <Link 
                    key={recentPost.id}
                    to={`/blog/${recentPost.id}`}
                    className="block group p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <h4 className="font-medium group-hover:text-primary transition-colors mb-1">
                      {recentPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{recentPost.date}</p>
                  </Link>
                ))}
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium mt-4"
                >
                  Zobacz wszystkie artykuły <ArrowRight className="w-4 h-4" />
                </Link>
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
