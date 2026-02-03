"use client";
import { Zap, BarChart3, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    { 
      icon: <Zap size={36} className="text-blue-600" />, 
      title: "Discovery", 
      desc: "We dive deep into your current workflows to find AI opportunities." 
    },
    { 
      icon: <BarChart3 size={36} className="text-blue-600" />, 
      title: "Analysis", 
      desc: "Our AI engines process your data to generate actionable insights." 
    },
    { 
      icon: <Shield size={36} className="text-blue-600" />, 
      title: "Optimization", 
      desc: "We implement custom solutions and monitor for peak performance." 
    },
  ];

  return (
    /* bg-transparent to match the Home page's dull white background */
    <section className="py-24 bg-transparent text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADING: Switched text-white to text-slate-900 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-slate-900">
          How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Works</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              /* CARD: Pure white solid card with a refined slate border */
              className="w-80 h-[28rem] p-8 rounded-[2.5rem] bg-white border border-slate-200 flex flex-col items-center justify-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-500/50 group"
            >
              {/* ICON CONTAINER: Elevated look with blue wash */}
              <div className="mb-8 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-200/50">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-8 px-4 group-hover:text-slate-600 transition-colors">
                {step.desc}
              </p>
              
              {/* STEP INDICATOR: Redesigned as a professional badge */}
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;