"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AIAuditSection from "@/components/sections/AIAuditSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

// --- REUSABLE SHAPE COMPONENT ---
const FloatingShape = ({ className, delay = 0, duration = 20 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.3, 0.5, 0.3],
      y: [0, -40, 0],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear" 
    }}
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${className}`}
  />
);

const fadeInReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] relative overflow-x-hidden selection:bg-blue-200">
      
      {/* --- BACKGROUND DECORATIVE LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large Blue Blob near Top Right */}
        <FloatingShape className="w-96 h-96 bg-blue-200 top-[-10%] right-[-5%]" duration={25} />
        
        {/* Indigo Square near Middle Left */}
        <FloatingShape className="w-80 h-80 bg-indigo-200 top-[40%] left-[-10%] rounded-3xl" delay={2} duration={30} />
        
        {/* Small Cyan Circle Bottom Right */}
        <FloatingShape className="w-64 h-64 bg-cyan-100 bottom-[10%] right-[10%]" delay={5} duration={15} />
      </div>

      <div className="relative z-10">
        <Header />
        
        <main>
          <section className="bg-[#020617] relative z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection />
            </motion.div>
          </section>
          
          <div className="relative z-20 text-slate-800">
            {/* Each section now "reveals" as you scroll */}
            <motion.div {...fadeInReveal} className="relative">
               <ProductShowcase />
               {/* Small accent shape behind section */}
               <div className="absolute top-1/2 left-0 w-32 h-32 bg-blue-400/10 blur-2xl rounded-full" />
            </motion.div>

            <motion.div {...fadeInReveal}><IndustriesSection /></motion.div>

            <motion.div {...fadeInReveal} className="relative">
                <AIAuditSection />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/5 blur-3xl rounded-full" />
            </motion.div>
            
            <motion.div {...fadeInReveal}><FeaturesSection /></motion.div>
            <motion.div {...fadeInReveal}><ProcessSection /></motion.div>
            <motion.div {...fadeInReveal}><NewsletterSection /></motion.div>
          </div>
        </main>

        <footer className="bg-[#020617] text-white border-t border-slate-800 relative z-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;