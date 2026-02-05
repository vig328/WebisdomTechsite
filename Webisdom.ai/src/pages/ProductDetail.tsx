"use client";
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
    <div className="min-h-screen bg-[#f1f5f9] text-slate-900 selection:bg-blue-100 relative overflow-x-hidden">
      <Header />
      
      <main>
        {/* ================= HERO SECTION (Dark) ================= */}
        <section className="relative pt-32 pb-32 overflow-hidden bg-slate-950 text-white">
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

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                {product.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
                {product.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 font-semibold shadow-lg shadow-blue-900/20" asChild>
                  <a href="#deep-dive">
                     <ArrowDown className="mr-2 w-4 h-4"/> Explore Features
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent backdrop-blur-sm"
                  onClick={() => setIsDemoOpen(true)}
                >
                  Book a Demo
                </Button>
              </div>
          </div>
          {/* Transition to Light Body */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f1f5f9] to-transparent"></div>
        </section>

        {/* ================= STATS BAR ================= */}
        {product.stats && (
          <section className="relative z-10 -mt-12 container mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {product.stats.map((stat, i) => (
                  <div key={i} className="py-8 px-6 text-center group hover:bg-slate-50 transition-colors">
                    <p className="text-4xl font-black text-blue-600 mb-1">{stat.split(" ")[0]}</p>
                    <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">{stat.substring(stat.indexOf(" ") + 1)}</p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* ================= MAIN CONTENT (Light Gray/White) ================= */}
        <section id="deep-dive" className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-3 gap-12">
                  
                  {/* --- LEFT COLUMN --- */}
                  <div className="lg:col-span-2 space-y-16">
                      
                      {/* 1. Overview & Capabilities */}
                      <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-6">Product Overview</h2>
                          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                              {product.longDescription || product.description}
                          </p>

                          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                  <Zap className="w-5 h-5 text-blue-600 fill-blue-600"/> Core Capabilities
                              </h3>
                              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                  {product.features?.map((f, i) => (
                                      <li key={i} className="flex items-start gap-3 text-slate-700">
                                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
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
                                      <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white hover:shadow-xl transition-all group">
                                          <img src={img} alt={`Gallery ${i}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
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
                                      <Card key={i} className="bg-white border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden">
                                          <CardContent className="p-6 flex items-center gap-4">
                                              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                              </div>
                                              <p className="text-slate-800 font-semibold">{useCase}</p>
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
                                  <Quote className="w-6 h-6 text-blue-600"/> Client Feedback
                              </h3>
                              <div className="grid md:grid-cols-2 gap-6">
                                  {product.testimonials.map((t, i) => (
                                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                                          <Quote className="w-10 h-10 text-slate-50 absolute top-6 right-6" />
                                          <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">"{t.quote}"</p>
                                          <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-slate-100 object-cover" />
                                              <div>
                                                  <p className="font-bold text-slate-900">{t.name}</p>
                                                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{t.role}</p>
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
                          <Card className="shadow-2xl border-none bg-blue-600 text-white rounded-3xl overflow-hidden">
                              <CardContent className="p-8 text-center">
                                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Zap className="w-8 h-8 text-white" />
                                  </div>
                                  <h3 className="font-bold text-2xl mb-2">Ready to Start?</h3>
                                  <p className="text-blue-100 mb-8 opacity-90">Experience the power of {product.title} with a personalized walkthrough.</p>
                                  <Button className="w-full bg-white text-blue-600 hover:bg-slate-50 py-7 text-lg font-bold rounded-2xl shadow-lg" onClick={() => setIsDemoOpen(true)}>
                                      Schedule Free Demo
                                  </Button>
                              </CardContent>
                          </Card>

                          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                              <h3 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-slate-50 pb-4">
                                  <Layers className="w-5 h-5 text-blue-600"/> Intelligence Stack
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                  {product.technologies?.map((tech) => (
                                      <Badge key={tech} variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-600 border-none hover:bg-slate-200 rounded-lg text-xs font-bold">
                                          {tech}
                                      </Badge>
                                  ))}
                              </div>
                          </div>

                          {product.integrations && (
                              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-slate-50 pb-4">
                                      <Zap className="w-5 h-5 text-blue-600"/> Connected Ecosystem
                                  </h3>
                                  <div className="space-y-3">
                                      {product.integrations.map((tool) => (
                                          <div key={tool} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                              <span className="font-medium text-sm">{tool}</span>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        {product.faqs && (
          <section className="py-24 bg-white border-t border-slate-100">
              <div className="container mx-auto px-4 max-w-4xl">
                  <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold mb-4 text-slate-900">Product FAQs</h2>
                      <p className="text-slate-500 text-lg">Everything you need to know about implementing {product.title}.</p>
                  </div>
                  <div className="grid gap-6">
                      {product.faqs.map((faq, i) => (
                          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group">
                              <h4 className="font-bold text-xl text-slate-900 flex items-start gap-4">
                                  <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity"/> {faq.q}
                              </h4>
                              <p className="text-slate-600 mt-4 ml-10 leading-relaxed text-lg">{faq.a}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
        )}
      </main>

      {/* ================= DARK FOOTER WRAPPER ================= */}
      <div className="bg-[#020617] text-white">
        <Footer />
      </div>

      <DemoRequestDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} productName={product.title} />
    </div>
  );
};

export default ProductDetail;
