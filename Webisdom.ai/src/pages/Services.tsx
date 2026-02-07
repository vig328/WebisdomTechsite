"use client";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  CheckCircle,
  Brain,
  Eye,
  TrendingUp,
  Shield,
  Cpu,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Clock,
  Share2,
  Zap
} from "lucide-react";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import ParticlesBackground from "@/components/visuals/ParticlesBackground";

const Services = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); 
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  // Handle scrolling to sections from URL or button clicks
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (selectedBlog) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (section) {
      // Small timeout to ensure DOM is rendered
      setTimeout(() => scrollToSection(section), 100);
    }
  }, [selectedBlog, section]);

  const aiSolutions = [
    {
      title: "Neural Process Automation",
      desc: "Moving beyond RPA into self-learning workflows that adapt to data changes.",
      icon: Zap
    },
    {
      title: "Predictive Analytics",
      desc: "Identify market shifts and operational risks before they impact your bottom line.",
      icon: TrendingUp
    },
    {
      title: "Enterprise LLM Lab",
      desc: "Custom-trained language models hosted on your private, secure infrastructure.",
      icon: Brain
    }
  ];

  const blogs = [
    {
      id: 1,
      category: "Case Study",
      categoryColor: "bg-emerald-600/10 text-emerald-600 border-emerald-600/20",
      title: "Global Logistics: 40% Efficiency Increase via Neural Routing",
      readTime: "8 min read",
      description: "How we implemented a spatial-aware AI to optimize trans-continental shipping routes in real-time.",
      content: `<h3>The Challenge</h3><p>Managing thousands of fleet units across variable weather and geopolitical zones.</p><h4>The Solution</h4><p>We deployed a custom neural network that processed 50+ variables per second.</p>`,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },
    {
      id: 2,
      category: "AI Strategy",
      categoryColor: "bg-blue-600/10 text-blue-600 border-blue-600/20",
      title: "How AI is Transforming Global Enterprise Workflows",
      readTime: "8 min read",
      description: "Artificial Intelligence is moving from basic automation to a 'Cognitive Layer' that manages decision-making pipelines.",
      content: `<h3>The Rise of the Intelligence Layer</h3><p>By 2026, the standard enterprise architecture will shift.</p>`,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: 3,
      category: "Computer Vision",
      categoryColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      title: "Computer Vision is Changing Automation Forever",
      readTime: "10 min read",
      description: "Computer Vision enables machines to interpret the world visually, providing 'Instant Awareness'.",
      content: `<h3>Spatial Intelligence</h3><p>The ability for a machine to understand volume, heat, and velocity in a 3D space.</p>`,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
  ];

  const auditProcess = [
    { icon: Search, title: "Performance Benchmarking", description: "Evaluating AI systems against industry standards.", duration: "1-2 weeks" },
    { icon: Shield, title: "Bias Detection", description: "Advanced analysis to detect algorithmic bias and ensure ethics.", duration: "2-3 weeks" },
    { icon: MapPin, title: "Improvement Roadmap", description: "Strategic plan with technical implementation pathways.", duration: "1 week" },
  ];

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
        <Header />
        <main className="pt-32 pb-20 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" className="mb-8 text-slate-500 hover:text-blue-600" onClick={() => setSelectedBlog(null)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className={`mb-4 ${selectedBlog.categoryColor}`}>{selectedBlog.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">{selectedBlog.title}</h1>
              <div className="flex items-center gap-6 text-slate-400 mb-10 pb-10 border-b border-slate-100">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {selectedBlog.readTime}</div>
                <div className="flex items-center gap-2"><Share2 className="h-4 w-4 cursor-pointer hover:text-blue-600" /> Share Analysis</div>
              </div>
              <img src={selectedBlog.image} className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-2xl" alt={selectedBlog.title} />
              <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
            </motion.div>
          </div>
        </main>
        <div className="bg-[#020617] text-white"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-blue-200 relative overflow-x-hidden">
      <Header />
      <main className="relative">
        
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-40 text-center overflow-hidden min-h-[70vh] flex items-center bg-[#020617]">
          <div className="absolute inset-0 z-0">
             <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.7 }} transition={{ duration: 1.5 }} className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')`, filter: 'brightness(0.8) contrast(1.2)' }} />
             <div className="absolute inset-0 pointer-events-none opacity-50"><ParticlesBackground /></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8fafc] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 uppercase tracking-widest py-1.5 px-6 bg-blue-500/10 backdrop-blur-md">
                <span className="flex items-center font-medium"><Sparkles className="w-4 h-4 mr-2" /> Expertise & Innovation</span>
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">Enterprise <span className="text-blue-500">AI Solutions</span></h1>
              <p className="text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed">Empowering global businesses with high-fidelity auditing and strategic neural automation.</p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <Button size="lg" className="h-14 px-10 text-md rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl transition-all" onClick={() => scrollToSection('ai-solutions')}>
                  Explore Solutions <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-md rounded-full border-white/40 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all" onClick={() => scrollToSection('case-studies')}>
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI SOLUTIONS SECTION */}
        <section className="py-24 relative z-10" id="ai-solutions">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black tracking-tight mb-4 text-slate-900 uppercase">Core <span className="text-blue-600">AI Solutions</span></h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aiSolutions.map((solution, idx) => (
                <Card key={idx} className="bg-white border-slate-200 p-8 rounded-[2rem] hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <solution.icon className="text-blue-600 group-hover:text-white h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{solution.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{solution.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI AUDIT SECTION */}
        <section className="py-24 relative z-10" id="ai-audit">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-white border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden border-2">
                <CardHeader className="text-center pb-0 pt-16">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Shield className="h-12 w-12 text-blue-600" />
                    <CardTitle className="text-5xl font-black text-slate-900 tracking-tight">AI Audit as a Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-10 md:p-20 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                      <h4 className="font-bold text-2xl text-slate-900">The Audit Package</h4>
                      <ul className="space-y-5">
                        {["Performance benchmarking", "Advanced bias detection", "Ethical AI compliance", "ROI projections"].map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-4 text-slate-600">
                            <CheckCircle className="text-blue-600 h-6 w-6 shrink-0 mt-1" />
                            <span className="text-lg font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-8">
                      <h4 className="font-bold text-2xl text-slate-900">Process Timeline</h4>
                      <div className="space-y-8">
                        {auditProcess.map((step, index) => (
                          <div key={index} className="flex items-start space-x-5">
                            <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl">{index + 1}</div>
                            <div>
                              <h5 className="font-bold text-slate-900 text-lg">{step.title} <span className="text-blue-600 ml-2">({step.duration})</span></h5>
                              <p className="text-slate-500 mt-1">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-12 border-t border-slate-100">
                    <Button size="lg" className="rounded-full px-16 h-18 bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-xl" onClick={() => setIsAuditDialogOpen(true)}>
                      Initialize System Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CASE STUDIES & BLOG SECTION - ID is unified here */}
        <section className="py-24 relative z-10" id="case-studies">
          <div className="container mx-auto px-4" id="blog">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black tracking-tight mb-4 text-slate-900 uppercase">Neural <span className="text-blue-600">Insights</span></h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white border border-slate-200 rounded-[2rem] shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-500 overflow-hidden group cursor-pointer" onClick={() => setSelectedBlog(blog)}>
                  <div className="h-64 overflow-hidden relative">
                    <img src={blog.image} className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700" alt={blog.title} />
                    <Badge className={`absolute top-6 left-6 border shadow-lg ${blog.categoryColor}`}>{blog.category}</Badge>
                  </div>
                  <div className="p-10 space-y-5">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">{blog.title}</h3>
                    <p className="text-slate-500 text-base line-clamp-3 leading-relaxed">{blog.description}</p>
                    <div className="pt-6 border-t border-slate-100 flex items-center text-blue-600 text-sm font-bold uppercase tracking-widest gap-2">Full Analysis <ChevronRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAB CAPABILITIES SECTION */}
        <section className="py-32 relative z-10 bg-slate-50" id="ai-lab-solutions">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-5xl font-black mb-20 text-slate-900 uppercase">Lab <span className="text-blue-600">Capabilities</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[{ icon: Brain, title: "Custom Models" }, { icon: Cpu, title: "Edge Deployment" }, { icon: Eye, title: "Vision Systems" }, { icon: TrendingUp, title: "Strategy Consulting" }].map((s, i) => (
                 <Card key={i} className="bg-white border border-slate-200 p-12 rounded-[2rem] hover:border-blue-500 transition-all shadow-md">
                   <s.icon className="h-14 w-14 text-blue-600 mx-auto mb-8" />
                   <h3 className="font-black text-slate-900 text-xl uppercase tracking-tighter">{s.title}</h3>
                 </Card>
               ))}
             </div>
           </div>
        </section>
      </main>

      <div className="bg-[#020617] text-white"><Footer /></div>
      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
      <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
    </div>
  );
};

export default Services;
