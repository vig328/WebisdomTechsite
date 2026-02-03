"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Sparkles, ChevronDown 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import CaseStudies from "@/components/sections/CaseStudies";
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

// IMPORT DATA
import { products } from "@/data/productsData"; 

const ProductTour = () => {
  const steps = [
    {
      title: "Executive Dashboard",
      description: "Get a bird's eye view of all your AI operations. Monitor performance metrics, revenue growth, and system health in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
    },
    {
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks with drag-and-drop AI agents. Connect your CRM, Email, and ERP systems seamlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends with 95% accuracy. Use historical data to make informed decisions about inventory and staffing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "Budget & Compliance Control",
      description: "Ensure contract compliance and gain full control over rates, limits, and budget definitions automatically.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl relative z-10">
      <div className="bg-slate-50 p-8 text-center border-b border-slate-200">
        <h2 className="text-3xl font-bold mb-2 text-slate-900">Product Tour — Enterprise AI Suite</h2>
        <p className="text-slate-500 text-lg">Exceed client expectations with projects that are on time and on budget.</p>
      </div>
      
      <div className="flex flex-col lg:flex-row h-[550px] lg:h-[650px]">
        <div className="w-full lg:w-2/3 bg-slate-100 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep}
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full h-full object-cover transition-all duration-700"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none">
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-white/90 backdrop-blur-md border shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white" onClick={prevStep}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-white/90 backdrop-blur-md border shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white" onClick={nextStep}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-10 lg:p-14 flex flex-col justify-center bg-white border-l border-slate-100">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Phase {currentStep + 1} / {steps.length}</span>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">{steps[currentStep].title}</h3>
          <p className="text-lg text-slate-500 leading-relaxed mb-10">{steps[currentStep].description}</p>
          <div className="flex gap-3">
             {steps.map((_, idx) => (
               <div 
                 key={idx} 
                 onClick={() => setCurrentStep(idx)}
                 className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${idx === currentStep ? 'w-16 bg-blue-600' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
               />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filteredProducts = products.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 selection:bg-blue-200 relative overflow-x-hidden">
      <Header />
      
      <main className="relative">
        {/* HERO SECTION: HIGH VISIBILITY NEURAL BACKGROUND */}
        <section className="relative pt-48 pb-44 text-center overflow-hidden min-h-[75vh] flex items-center bg-[#020617]">
          <div className="absolute inset-0 z-0">
             {/* The Main Image with enhanced visibility */}
             <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.65 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-center bg-cover"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop')`,
                  filter: 'brightness(0.9) contrast(1.2) saturate(1.2)' 
                }}
             />
             
             {/* Particle Layer */}
             <div className="absolute inset-0 pointer-events-none opacity-40">
                <ParticlesBackground />
             </div>

             {/* Radial glow to make text pop against the bright background */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.4)_0%,rgba(2,6,23,0.9)_100%)] pointer-events-none" />

             {/* Bottom transition to white body */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f1f5f9] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-8 border-blue-400/40 text-blue-400 uppercase tracking-widest py-2 px-8 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Sparkles className="w-4 h-4 mr-2" /> AI Intelligence Layer
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-2xl">
                AI Product <span className="text-blue-500">Suite</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-50/80 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                Precision-engineered AI agents designed to transform enterprise data into actionable ROI.
              </p>
              
              <div className="mt-14 flex flex-wrap justify-center gap-6">
                <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-all hover:scale-105 active:scale-95" onClick={() => setIsModalOpen(true)}>
                  Book a Demo <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-12 text-lg rounded-full border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 active:scale-95" asChild>
                  <a href="#product-tour">Explore Architecture</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENT AREA */}
        <section className="py-24 relative z-10 -mt-24" id="product-tour">
          <div className="container mx-auto px-4">
            
            <Tabs defaultValue="products" className="w-full">
              <div className="flex justify-center mb-20">
                <TabsList className="p-1.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg">
                  <TabsTrigger value="products" className="rounded-full px-10 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">Our Systems</TabsTrigger>
                  <TabsTrigger value="case-studies" className="rounded-full px-10 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">Success Logic</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="products" className="space-y-32 outline-none">
                <ProductTour />

                {/* Filter UI */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border border-slate-200 py-12 bg-white px-10 rounded-[3rem] shadow-xl mb-16">
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">System Catalog</h2>
                    <p className="text-slate-500 mt-2 text-lg">Displaying {filteredProducts.length} active neural nodes...</p>
                  </div>
                  
                  <div className="relative w-full md:w-80">
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl block p-5 pr-12 appearance-none focus:ring-4 focus:ring-blue-500/10 outline-none cursor-pointer transition-all"
                    >
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat === "All" ? "All Divisions" : cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredProducts.map((product) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group relative bg-white border-slate-200 rounded-[2rem] hover:shadow-3xl hover:border-blue-500 transition-all duration-500 overflow-hidden flex flex-col h-full border-2">
                        <Link to={`/products/${product.id}`} className="flex flex-col h-full">
                          <div className="relative h-72 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                            <Badge className="absolute top-6 right-6 bg-blue-600 text-white border-0 py-1.5 px-4 shadow-xl">
                              {product.status}
                            </Badge>
                          </div>

                          <CardContent className="p-10 flex flex-col flex-grow">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">{product.title}</h3>
                            <Badge variant="secondary" className="w-fit mb-5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                               {product.category}
                            </Badge>
                            <p className="text-blue-600 text-sm font-bold mb-4 uppercase tracking-widest">{product.subtitle}</p>
                            <p className="text-slate-500 mb-10 text-base leading-relaxed line-clamp-3 flex-grow">
                              {product.description}
                            </p>
                            <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">Architecture Detail</span>
                              <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-3 transition-transform" />
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="case-studies">
                <CaseStudies />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-40 relative overflow-hidden bg-transparent">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl bg-white border-2 border-slate-100 rounded-[4rem] p-20 shadow-2xl">
            <h2 className="text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">Ready to Deploy?</h2>
            <p className="text-xl text-slate-500 mb-14 leading-relaxed">
              Our neural agents integrate with your existing tech stack in days, not months. Experience the power of enterprise-grade AI tailored for your scale.
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full h-18 px-14 text-xl font-bold transition-all shadow-blue-500/20 shadow-2xl hover:scale-105" onClick={() => setIsModalOpen(true)}>
              Initialize Free Pilot
            </Button>
          </div>
        </section>

      </main>

      <DemoRequestDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
      
      <div className="bg-[#020617] text-white border-t border-slate-800 pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Products;