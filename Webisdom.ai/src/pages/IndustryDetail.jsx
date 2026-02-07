"use client";
import React, { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { industries } from "@/data/industriesData"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, ArrowDown, HelpCircle, 
  Layers, Zap, ShieldCheck, Target, ExternalLink 
} from "lucide-react";

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // 1. Get the ID from either /industry/:id OR ?section=id
  const currentId = id || searchParams.get("section");

  // 2. FIND DATA
  const data = industries.find((item) => item.id.toLowerCase() === currentId?.toLowerCase());

  useEffect(() => {
    // 3. AUTOMATIC REDIRECT
    // If the user arrived via ?section=fintech, move them to /industry/fintech
    if (searchParams.get("section") && data) {
      navigate(`/industry/${searchParams.get("section")}`, { replace: true });
    }
    
    window.scrollTo(0, 0);
  }, [currentId, data, navigate, searchParams]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Industry Architecture Not Found</h2>
        <Button onClick={() => navigate("/industries")}>Return to Ecosystem</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <Header />
      
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src={data.image} className="w-full h-full object-cover blur-3xl scale-110" alt="" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
              <div className="flex justify-center gap-2 mb-6">
                 <Badge variant="outline" className="px-4 py-1 text-sm border-white/20 text-white bg-white/10 backdrop-blur-md">
                   {data.category || "Enterprise Intelligence"}
                 </Badge>
                 <Badge variant="secondary" className="px-4 py-1 text-sm bg-blue-500/20 text-blue-300 border border-blue-500/30">
                   {data.status}
                 </Badge>
              </div>

              {/* Updated Heading: Removed 'italic', changed to 'font-black' and increased size for product-style impact */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none uppercase">
                {data.title}
              </h1>

              <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light italic">
                {data.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {data.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 rounded-full px-8 font-semibold" asChild>
                  <a href="#deep-dive">
                      <ArrowDown className="mr-2 w-4 h-4"/> Technical Architecture
                  </a>
                </Button>
                {data.url && (
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                    asChild
                  >
                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4"/> Live Platform
                    </a>
                  </Button>
                )}
              </div>
          </div>
        </section>

        {/* ================= STATS BAR ================= */}
        {data.stats && (
          <section className="bg-blue-600 py-10 text-white border-b border-blue-700">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
                {data.stats.map((stat, i) => (
                  <div key={i} className="pt-4 md:pt-0">
                    <p className="text-4xl font-black mb-1">{stat.split(" ")[0]}</p>
                    <p className="text-blue-100 text-sm uppercase tracking-widest opacity-80">
                      {stat.substring(stat.indexOf(" ") + 1)}
                    </p>
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
                      
                      {/* 1. Deep Dive Description */}
                      <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-6">System Overview</h2>
                          <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                              {data.longDescription}
                          </div>

                          <div className="bg-white p-8 rounded-2xl border shadow-sm">
                              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                  <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500"/> Core Capabilities
                              </h3>
                              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                  {data.features?.map((f, i) => (
                                      <li key={i} className="flex items-start gap-3 text-gray-700">
                                          <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                          <span className="font-medium">{f}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                      {/* 2. Strategic Benefits */}
                      {data.benefits && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-green-600"/> Strategic Benefits
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {data.benefits.map((benefit, i) => (
                                    <Card key={i} className="bg-white border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="p-5 flex items-center gap-3">
                                            <p className="text-gray-800 font-medium">{benefit}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                      )}

                      {/* 3. Use Cases */}
                      {data.useCases && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Target className="w-6 h-6 text-blue-600"/> Sector Applications
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {data.useCases.map((useCase, i) => (
                                    <div key={i} className="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
                                        <span className="text-slate-700 font-semibold">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                      )}
                  </div>

                  {/* --- RIGHT COLUMN (Sticky Sidebar) --- */}
                  <div className="lg:col-span-1">
                      <div className="space-y-8 sticky top-24">
                          
                          {/* Consultation Card */}
                          <Card className="shadow-lg border-t-4 border-t-blue-600 overflow-hidden">
                              <CardContent className="p-6 text-center">
                                  <h3 className="font-bold text-xl mb-2">Enterprise Deployment</h3>
                                  <p className="text-sm text-gray-500 mb-6">Schedule a technical walkthrough with our infrastructure architects.</p>
                                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg" onClick={() => navigate('/contact')}>
                                      Talk to Experts
                                  </Button>
                              </CardContent>
                          </Card>

                          {/* Tech Stack */}
                          <div className="bg-white p-6 rounded-xl border shadow-sm">
                              <h3 className="font-bold text-lg mb-6 flex items-center gap-2 border-b pb-4">
                                  <Layers className="w-5 h-5 text-gray-500"/> Tech Stack
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                  {data.technologies?.map((tech) => (
                                      <Badge key={tech} variant="secondary" className="px-3 py-1.5 bg-slate-100 text-slate-700 font-mono text-xs">
                                          {tech}
                                      </Badge>
                                  ))}
                              </div>
                          </div>

                          {/* Integrations */}
                          {data.integrations && (
                              <div className="bg-white p-6 rounded-xl border shadow-sm">
                                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b pb-4">
                                      <Zap className="w-5 h-5 text-gray-500"/> Ecosystem
                                  </h3>
                                  <div className="space-y-3">
                                      {data.integrations.map((tool) => (
                                          <div key={tool} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-2 rounded-lg text-sm border border-gray-100">
                                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                              {tool}
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

        {/* ================= TESTIMONIALS SECTION ================= */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center text-center mb-16">
                <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 border-none px-6 py-1 uppercase tracking-widest text-[10px]">
                  Deployment Feedback
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                {data.testimonials.map((testimonial, i) => (
                  <div key={i} className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-14 rounded-[2rem] shadow-2xl">
                    
                    <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-10 italic relative z-10 text-center">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex items-center justify-center gap-5 border-t border-white/10 pt-8">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/50 shadow-lg"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-xl leading-none mb-1 text-white">{testimonial.name}</p>
                        <p className="text-blue-400 text-sm font-medium tracking-wide">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= FAQ SECTION ================= */}
        {data.faqs && (
          <section className="py-20 bg-white border-t">
              <div className="container mx-auto px-4 max-w-4xl">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold mb-4">Technical FAQ</h2>
                      <p className="text-gray-500">Deep-dive insights into the {data.title} infrastructure and integration protocols.</p>
                  </div>
                  <div className="grid gap-6">
                      {data.faqs.map((faq, i) => (
                          <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group">
                              <h4 className="font-bold text-xl text-slate-900 flex items-start gap-4">
                                  <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1 group-hover:scale-110 transition-transform"/> {faq.q}
                              </h4>
                              <p className="text-gray-600 mt-4 ml-10 text-lg leading-relaxed">{faq.a}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
        )}
      </main>

      {/* FIXED FOOTER WRAPPER */}
      <footer className="bg-[#020617] text-white border-t border-slate-800">
        <Footer />
      </footer>
    </div>
  );
};

export default IndustryDetail;
