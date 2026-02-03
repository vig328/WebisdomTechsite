"use client";
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Eye, Users, Sparkles } from "lucide-react";

// Import your particle background component
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Building domain-specific AI solutions that deliver measurable impact across Hospitality, Fintech, and Healthcare industries."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the trusted AI partner for enterprises, transforming industries through intelligent, scalable, and future-ready solutions."
    },
    {
      icon: Users,
      title: "Values",
      description: "Innovation, integrity, and impact drive everything we do. We believe in creating AI that serves humanity and enhances business outcomes."
    }
  ];

  const teamMembers = [
    {
      name: "Amardeep Bajpai",
      role: "FOUNDER, IIM-A ALUMNUS",
      image: "/lovable-uploads/aa6bc937-0bd0-4524-a16f-7dc9e29851c4.png",
      description: "Mr. Amardeep Bajpai did his management education from the prestigious Indian Institute of Management, Ahmedabad."
    },
    {
      name: "Gourav Singh",
      role: "Sr. Vice President, BD & Client Servicing",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      description: "Accomplishes project objectives by planning and evaluating project activities."
    },
    {
      name: "Atharv Kumar",
      role: "AI LEAD, IIT MANDI ALUMNUS",
      image: "/lovable-uploads/506b0336-44ee-4e68-8cea-73e6a5f369ca.png",
      description: "As the AI Lead at Webisdom AI Solutions, driving innovation across Hospitality, Fintech, and Healthcare."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 selection:bg-blue-200 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION - Background visibility enhanced */}
        <section className="relative pt-48 pb-40 text-center overflow-hidden min-h-[70vh] flex items-center bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-50 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')`, 
              }}
            />
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>
            {/* Adjusted gradient to be lighter (opacity 40 instead of 80) to show more image detail */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#f1f5f9] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 uppercase tracking-widest py-1.5 px-6 bg-blue-500/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Our Identity
              </Badge>
              {/* Added drop-shadow for text readability */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-2xl">
                About <span className="text-blue-500">Webisdom AI</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Pioneering the future of AI-driven business transformation with enterprise-grade intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section - Card Overlay Style */}
        <section className="py-24 container mx-auto px-4 relative z-10 -mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight text-slate-900">
                  Transforming Industries with <span className="text-blue-600">Intelligent AI</span>
                </h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    At Webisdom AI Solutions, we believe that artificial intelligence should be more than just a buzzword—it should be a powerful tool that creates real, measurable impact for businesses.
                  </p>
                  <p>
                    Founded with the vision of democratizing AI across key industries, we specialize in building domain-specific solutions that understand the unique challenges within Hospitality, Fintech, and Healthcare sectors.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 h-[400px] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop" 
                    alt="Neural AI Brain Concept"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Our <span className="text-blue-600">Foundation</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto">The principles that guide our innovation and drive our commitment to excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="bg-white border-slate-200 hover:border-blue-500 transition-all duration-500 shadow-md hover:shadow-xl group">
                    <CardContent className="p-10 text-center">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Meet Our <span className="text-blue-600">Team</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-slate-50 border-slate-200 hover:border-blue-400 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Industries We <span className="text-blue-400">Transform</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {["Hospitality", "Fintech", "Healthcare"].map((industry, index) => (
                <Card key={industry} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 text-center group">
                  <CardContent className="p-10">
                    <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-blue-500/30 transition-colors">0{index + 1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{industry}</h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors">
                      {industry === "Hospitality" && "Revolutionizing guest experiences and operational efficiency with our Hotel AI Chieftain platform."}
                      {industry === "Fintech" && "Next-generation financial intelligence for risk management and customer insights."}
                      {industry === "Healthcare" && "Intelligent healthcare solutions for patient care optimization."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#020617] text-white border-t border-slate-800">
        <Footer />
      </div>
    </div>
  );
};

export default About;