"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import ParticlesBackground from "@/components/visuals/ParticlesBackground";

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  
  const taglines = [
    "Where Businesses Meet Their AI Future",
    "Intelligence that transforms industries",
    "AI Lab Solutions Custom AI built for every industry",
    "Smart. Scalable. Future-ready.",
    "AI solutions built for real business impact"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. BACKGROUND LAYER: Particles isolated to Hero only */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* 2. DECORATIVE LAYER: Glows */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-float z-0" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float z-0" style={{ animationDelay: "2s" }} />
      
      {/* 3. CONTENT LAYER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/5 backdrop-blur-md border border-accent/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI Solutions for Enterprise</span>
          </div>

          {/* Main Headline - Flex centered to prevent jumping */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight min-h-[1.2em] lg:min-h-[2.4em] flex items-center justify-center">
            <span 
              key={currentTagline}
              className="block text-gradient animate-fade-in"
            >
              {taglines[currentTagline]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-in-right">
            Domain-specific AI products and services across Hospitality, Fintech, and Healthcare
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="btn-hero-primary" onClick={() => setIsDemoDialogOpen(true)}>
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-secondary" onClick={() => setIsAuditDialogOpen(true)}>
              Request an AI Audit
            </Button>
          </div>

          {/* Domain Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {["Hospitality", "Fintech", "Healthcare"].map((domain, index) => (
              <div 
                key={domain}
                className="px-6 py-3 bg-card/30 backdrop-blur-md border border-border/50 rounded-full text-sm font-medium hover:bg-card/60 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
    </section>
  );
};

export default HeroSection;