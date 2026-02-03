import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/productsData"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, ArrowDown, 
  Quote, HelpCircle, Layers, Image as ImageIcon, Zap 
} from "lucide-react";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog"; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === id);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h2>
        <Button onClick={() => navigate("/products")}>View All Products</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src={product.image} className="w-full h-full object-cover blur-3xl scale-110" alt="" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="flex justify-center gap-2 mb-6">
               <Badge variant="outline" className="px-4 py-1 text-sm border-white/20 text-white bg-white/10 backdrop-blur-md">
                 {product.category}
               </Badge>
               <Badge variant="secondary" className="px-4 py-1 text-sm bg-green-500/20 text-green-300 border border-green-500/30">
                 {product.status}
               </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
              {product.subtitle}
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {product.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 rounded-full px-8 font-semibold" asChild>
                <a href="#deep-dive">
                   <ArrowDown className="mr-2 w-4 h-4"/> Explore Features
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                onClick={() => setIsDemoOpen(true)}
              >
                Book a Demo
              </Button>
            </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      {product.stats && (
        <section className="bg-blue-600 py-10 text-white border-b border-blue-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
              {product.stats.map((stat, i) => (
                <div key={i} className="pt-4 md:pt-0">
                  <p className="text-3xl font-bold mb-1">{stat.split(" ")[0]}</p>
                  <p className="text-blue-100 text-sm uppercase tracking-wide opacity-80">{stat.substring(stat.indexOf(" ") + 1)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <section id="deep-dive" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12">
                
                {/* --- LEFT COLUMN --- */}
                <div className="lg:col-span-2 space-y-16">
                    
                    {/* 1. Overview & Capabilities */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Overview</h2>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                            {product.longDescription || product.description}
                        </p>

                        <div className="bg-white p-8 rounded-2xl border shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500"/> Core Capabilities
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {product.features?.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span className="font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 2. Gallery */}
                    {product.gallery && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <ImageIcon className="w-6 h-6 text-blue-600"/> Interface Gallery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {product.gallery.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden shadow-md border bg-white hover:shadow-lg transition-shadow group">
                                        <img src={img} alt={`Gallery ${i}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. Use Cases */}
                    {product.useCases && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ideal Use Cases</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {product.useCases.map((useCase, i) => (
                                    <Card key={i} className="bg-white border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="p-5 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                            <p className="text-gray-800 font-medium text-lg">{useCase}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 4. Testimonials */}
                    {product.testimonials && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Quote className="w-6 h-6 text-purple-600"/> What Clients Say
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {product.testimonials.map((t, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                                        <Quote className="w-8 h-8 text-gray-100 absolute top-4 right-4" />
                                        <p className="text-gray-600 italic mb-4 relative z-10">"{t.quote}"</p>
                                        <div className="flex items-center gap-3 border-t pt-4 mt-4">
                                            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full bg-gray-200" />
                                            <div>
                                                <p className="font-bold text-sm text-slate-900">{t.name}</p>
                                                <p className="text-xs text-gray-500">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* --- RIGHT COLUMN (Sticky Sidebar) --- */}
                <div className="lg:col-span-1">
                    <div className="space-y-8 sticky top-24">
                        
                        {/* Actions (Moved Up) */}
                        <Card className="shadow-lg border-t-4 border-t-blue-600">
                            <CardContent className="p-6 text-center">
                                <h3 className="font-bold text-xl mb-2">Interested?</h3>
                                <p className="text-sm text-gray-500 mb-6">Get a comprehensive audit or a personalized demo.</p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg" onClick={() => setIsDemoOpen(true)}>
                                    Schedule Free Demo
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Tech Stack */}
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 border-b pb-4">
                                <Layers className="w-5 h-5 text-gray-500"/> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {product.technologies?.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Integrations */}
                        {product.integrations && (
                            <div className="bg-white p-6 rounded-xl border shadow-sm">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b pb-4">
                                    <Zap className="w-5 h-5 text-gray-500"/> Integrations
                                </h3>
                                <div className="space-y-3">
                                    {product.integrations.map((tool) => (
                                        <div key={tool} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Visit Website Button Removed from here as requested */}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      {product.faqs && (
        <section className="py-20 bg-white border-t">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Everything you need to know about {product.title}.</p>
                </div>
                <div className="grid gap-4">
                    {product.faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-100 transition-all">
                            <h4 className="font-semibold text-lg text-slate-900 flex items-start gap-3">
                                <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5"/> {faq.q}
                            </h4>
                            <p className="text-gray-600 mt-3 ml-9 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      <DemoRequestDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} productName={product.title} />
      <Footer />
    </div>
  );
};

export default ProductDetail;