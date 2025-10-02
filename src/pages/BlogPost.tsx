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
  },
  "automatyzacje-n8n-przewodnik": {
    title: "N8n - kompletny przewodnik po automatyzacji workflow",
    category: "Automatyzacja",
    date: "10 marca 2024",
    readTime: "8 min",
    content: `
      <p>N8n to open-source'owa platforma do automatyzacji workflow, która pozwala łączyć różne aplikacje i tworzyć zaawansowane procesy biznesowe bez pisania kodu.</p>

      <h2>Dlaczego n8n?</h2>
      <p>W przeciwieństwie do konkurencji jak Zapier czy Make, n8n oferuje:</p>
      <ul>
        <li>Pełną kontrolę nad danymi (self-hosting)</li>
        <li>Brak limitów na operacje</li>
        <li>400+ gotowych integracji</li>
        <li>Niższe koszty przy większej skali</li>
      </ul>

      <h2>Praktyczne zastosowania</h2>
      <p>N8n doskonale sprawdza się w automatyzacji:</p>

      <h3>1. Marketing automation</h3>
      <p>Automatyczne wysyłanie spersonalizowanych kampanii email, synchronizacja leadów między systemami, tworzenie raportów marketingowych.</p>

      <h3>2. Obsługa klienta</h3>
      <p>Automatyczne tworzenie ticketów z emaili, routing zgłoszeń do odpowiednich działów, integracja z chatbotami AI.</p>

      <h3>3. E-commerce</h3>
      <p>Synchronizacja zamówień, automatyzacja wysyłki potwierdzeń, zarządzanie stanami magazynowymi.</p>

      <h2>Pierwsze kroki</h2>
      <p>Zacznij od prostych workflow łączących 2-3 aplikacje. Stopniowo rozbudowuj o dodatkowe kroki i logikę warunkową. Pamiętaj o testowaniu każdego workflow przed wdrożeniem produkcyjnym.</p>

      <h3>Best practices</h3>
      <ul>
        <li>Dokumentuj złożone workflow</li>
        <li>Używaj error handlerów</li>
        <li>Monitoruj wykonania</li>
        <li>Optymalizuj najczęściej uruchamiane procesy</li>
      </ul>
    `
  },
  "roi-z-wdrozen-ai": {
    title: "ROI z wdrożeń AI - case study 3 firm",
    category: "Case Studies",
    date: "5 marca 2024",
    readTime: "6 min",
    content: `
      <p>Analizujemy realne wdrożenia AI w trzech różnych firmach i mierzymy zwrot z inwestycji po pierwszym roku użytkowania.</p>

      <h2>Case 1: E-commerce - Chatbot obsługi klienta</h2>
      <p><strong>Branża:</strong> Sprzedaż online, 50 pracowników</p>
      <p><strong>Wdrożenie:</strong> Chatbot AI obsługujący standardowe zapytania</p>
      <p><strong>Koszt:</strong> 2,999 zł/mies (35,988 zł/rok)</p>

      <h3>Rezultaty po roku:</h3>
      <ul>
        <li>Obsłużonych 45,000 konwersacji automatycznie</li>
        <li>Oszczędność 2 etatów obsługi klienta (180,000 zł/rok)</li>
        <li>Wzrost satysfakcji klientów o 35%</li>
        <li><strong>ROI: 400%</strong></li>
      </ul>

      <h2>Case 2: Firma produkcyjna - Przetwarzanie dokumentów</h2>
      <p><strong>Branża:</strong> Produkcja, 200 pracowników</p>
      <p><strong>Wdrożenie:</strong> System OCR do przetwarzania faktur</p>
      <p><strong>Koszt:</strong> 2,499 zł/mies (29,988 zł/rok)</p>

      <h3>Rezultaty po roku:</h3>
      <ul>
        <li>Przetworzonych 24,000 dokumentów</li>
        <li>Oszczędność 1.5 etatu księgowości (90,000 zł/rok)</li>
        <li>Redukcja błędów o 95%</li>
        <li><strong>ROI: 200%</strong></li>
      </ul>

      <h2>Case 3: Agencja marketingowa - Email automation</h2>
      <p><strong>Branża:</strong> Marketing, 30 pracowników</p>
      <p><strong>Wdrożenie:</strong> Automatyzacja kampanii emailowych z AI</p>
      <p><strong>Koszt:</strong> 1,999 zł/mies (23,988 zł/rok)</p>

      <h3>Rezultaty po roku:</h3>
      <ul>
        <li>Wzrost open rate o 45%</li>
        <li>Zwiększenie przychodów o 320,000 zł</li>
        <li>Oszczędność 25h/tydzień pracy zespołu</li>
        <li><strong>ROI: 1,234%</strong></li>
      </ul>

      <h2>Wnioski</h2>
      <p>Średni ROI z wdrożeń AI w pierwszym roku to 611%. Kluczowe czynniki sukcesu to właściwy dobór rozwiązania do rzeczywistych potrzeb biznesowych oraz zaangażowanie zespołu we wdrożenie.</p>
    `
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
        canonical={`https://mediafy.ai/blog/${id}`}
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
