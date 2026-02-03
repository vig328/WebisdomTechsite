"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustriesSection = () => {
  const navigate = useNavigate();
  const industries = [
    {
      icon: Building2,
      name: "Hospitality",
      description:
        "AI-powered solutions for hotels, restaurants, and travel companies to enhance guest experiences and optimize operations.",
      features: [
        "Guest Experience",
        "Revenue Optimization",
        "Operational Intel",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description:
        "Intelligent healthcare solutions for patient care optimization, medical decision support, and predictive analytics.",
      features: [
        "Patient Intel",
        "Decision Support",
        "Predictive Health",
      ],
    },
    {
      icon: TrendingUp,
      name: "Fintech",
      description:
        "Advanced financial intelligence for risk management, fraud detection, and customer insights in financial services.",
      features: ["Risk AI", "Fraud Detection", "Customer Analytics"],
    },
  ];

  return (
    /* Section remains bg-transparent to sit on the Home wrapper's dull white background */
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* HEADING: Switched to Slate-900 with a Blue-800 Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Industries We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Serve</span>
          </h2>
          <p className="text-xl text-slate-600/90 max-w-3xl mx-auto">
            Specialized AI solutions tailored for specific industry needs,
            delivering targeted results and sector-specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                /* CARD: Switched from dark glass to solid white with slate border and shadow */
                className="bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {industry.features.map((feature, index) => (
                      <div
                        key={index}
                        /* FEATURE TAGS: Switched to blue-tinted light mode style */
                        className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* BUTTON: Updated to a professional "Dull Dark" style */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/industries")}
            className="group relative px-8 py-3 font-semibold text-slate-700 transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:border-blue-500 hover:text-blue-600 shadow-sm hover:shadow-md overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Know More 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;