"use client";
import { Zap, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { 
      icon: <Zap size={36} className="text-blue-600" />, 
      title: "Fast Automation", 
      desc: "Automate routine tasks with AI and save hours daily." 
    },
    { 
      icon: <Shield size={36} className="text-blue-600" />, 
      title: "Secure & Reliable", 
      desc: "Data protection and privacy guaranteed at every step." 
    },
    { 
      icon: <BarChart3 size={36} className="text-blue-600" />, 
      title: "Analytics & Insights", 
      desc: "Get actionable insights in real-time to boost growth." 
    },
  ];

  return (
    /* bg-transparent inherits the #f1f5f9 background from the Home wrapper */
    <section className="py-24 bg-transparent text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADING: Switched text-white to text-slate-900 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-slate-900">
          Our Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Features</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              /* CARD: Switched from bg-white/5 (dark glass) to bg-white (light solid) 
                 Added a soft border and shadow that intensifies on hover.
              */
              className="w-80 h-96 p-8 rounded-[2rem] bg-white border border-slate-200 flex flex-col items-center justify-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-500/50 group"
            >
              {/* Icon Container with a soft blue background wash */}
              <div className="mb-6 w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100">
                {f.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;