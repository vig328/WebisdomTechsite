"use client";
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, 
  Home, Factory, Truck, Gavel, Cpu, Wheat, TrendingUp, Sparkles, ArrowRight 
} from "lucide-react";

import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const industryConfig = [
  { id: "hospitality", title: "Hospitality", icon: Hotel, color: "text-blue-700", bg: "bg-blue-100", desc: "AI for Hotels, Resorts, Restaurants & Travel." },
  { id: "fintech", title: "Fintech", icon: Building2, color: "text-purple-700", bg: "bg-purple-100", desc: "Banking automation, Fraud detection & Compliance." },
  { id: "healthcare", title: "Healthcare", icon: Heart, color: "text-red-700", bg: "bg-red-100", desc: "Diagnostics, Patient Triage & Pharma R&D." },
  { id: "tech", title: "Technology", icon: Cpu, color: "text-slate-700", bg: "bg-slate-200", desc: "Dev Tools, Cybersecurity & Autonomous Agents." },
  { id: "manufacturing", title: "Manufacturing", icon: Factory, color: "text-orange-700", bg: "bg-orange-100", desc: "IoT, Predictive Maintenance & Safety." },
  { id: "retail", title: "Retail", icon: ShoppingBag, color: "text-pink-700", bg: "bg-pink-100", desc: "E-commerce optimization & Marketing AI." },
  { id: "education", title: "Education", icon: GraduationCap, color: "text-yellow-700", bg: "bg-yellow-100", desc: "EdTech, Personalized Tutoring & Grading." },
  { id: "agtech", title: "AgriTech", icon: Wheat, color: "text-green-700", bg: "bg-green-100", desc: "Smart Farming, Drones & Yield Prediction." },
  { id: "logistics", title: "Logistics", icon: Truck, color: "text-cyan-700", bg: "bg-cyan-100", desc: "Supply Chain, Fleet Management & Routing." },
  { id: "real-estate", title: "Real Estate", icon: Home, color: "text-teal-700", bg: "bg-teal-100", desc: "Valuation, PropTech & Market Analysis." },
  { id: "revenue", title: "Revenue Mgmt", icon: TrendingUp, color: "text-emerald-700", bg: "bg-emerald-100", desc: "Dynamic Pricing & Competitor Intelligence." },
  { id: "legal", title: "LegalTech", icon: Gavel, color: "text-stone-700", bg: "bg-stone-200", desc: "Contract Analysis, Patents & Compliance." },
  { id: "coworking", title: "Coworking", icon: Sparkles, color: "text-violet-700", bg: "bg-violet-100", desc: "Workspace Automation & Community Mgmt." },
];

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/industry/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 selection:bg-blue-200 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-40 text-center overflow-hidden min-h-[70vh] flex items-center bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-20 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop')`, 
              }}
            />
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#f1f5f9] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 uppercase tracking-widest py-1.5 px-6 bg-blue-500/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Sectors We Transform
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
                Our <span className="text-blue-500">Industries</span>
              </h1>
              <p className="text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed">
                Advanced AI solutions designed for enterprise-grade operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRY GRID */}
        <section className="py-24 container mx-auto px-4 relative z-10 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryConfig.map((ind) => {
              const Icon = ind.icon;
              return (
                <Card 
                  key={ind.id} 
                  onClick={() => handleCardClick(ind.id)}
                  className="group cursor-pointer bg-white border-slate-300/50 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-500"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className={`p-4 rounded-xl ${ind.bg} transition-all duration-500 group-hover:scale-110 shadow-inner`}>
                      <Icon className={`w-7 h-7 ${ind.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {ind.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{ind.desc}</p>
                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-blue-600">
                      View Architecture <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      {/* FOOTER WRAPPER */}
      <div className="bg-[#020617] text-white border-t border-slate-800">
        <Footer />
      </div>

    </div>
  );
};

export default Industries;