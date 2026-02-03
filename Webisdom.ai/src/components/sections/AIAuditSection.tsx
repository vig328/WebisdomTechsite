"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart3, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";

const AIAuditSection = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We analyze your business processes, data infrastructure, and operational workflows to identify AI opportunities."
    },
    {
      icon: BarChart3,
      title: "Audit",
      description: "Comprehensive assessment of your current systems and detailed evaluation of AI implementation potential."
    },
    {
      icon: MapPin,
      title: "Roadmap",
      description: "Delivery of expert insights with a strategic roadmap for AI adoption tailored to your business goals."
    }
  ];

  return (
    /* bg-transparent ensures it sits on the Home wrapper's $#f1f5f9$ background */
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          {/* HEADING: Consistent Slate-900 with Blue Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            AI Audit <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">as a Service</span>
          </h2>
          <p className="text-xl text-slate-600/90 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI assessment. We identify opportunities, analyze potential, and deliver actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.title} 
                /* CARD: Clean white with subtle border */
                className="relative bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    {/* Icon container: Professional Blue Gradient */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          {/* CTA BOX: Transformed from dark glass to a sophisticated elevated light box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 max-w-3xl mx-auto shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Ready to Transform Your Business?</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Get a comprehensive AI audit and discover how artificial intelligence can revolutionize your operations, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all" 
                onClick={() => setIsAuditDialogOpen(true)}
              >
                Request AI Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-6 text-lg rounded-xl" 
                asChild
              >
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Audit Dialog Component */}
      <AuditRequestDialog 
        open={isAuditDialogOpen} 
        onOpenChange={setIsAuditDialogOpen} 
      />
    </section>
  );
};

export default AIAuditSection;