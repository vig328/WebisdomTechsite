"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/productsData";

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (!card) return;
      const cardWidth = card.offsetWidth + 16; 
      let newIndex = activeIndex + 1;
      if (newIndex > products.length - 1) newIndex = 0;
      setActiveIndex(newIndex);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    /* Using bg-transparent so it inherits the Dull White from the Home wrapper */
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* HEADING: Changed text-white to text-slate-900 and updated gradient to Royal Blue */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Products</span>
          </h2>
          <p className="text-xl text-slate-600/90 max-w-3xl mx-auto">
            Explore our suite of advanced AI Agents and Platforms driving digital transformation.
          </p>
        </div>

        <div className="relative w-[90%] mx-auto">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar scroll-smooth space-x-4 pb-4"
          >
            {products.map((product, idx) => (
              <Card
                key={idx}
                /* Updated Card: bg-white with a subtle slate-200 border to pop against the dull background */
                className="flex-shrink-0 w-[92%] sm:w-[45%] md:w-[32%] relative overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-500 group"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    product.status.includes("Live") ? "bg-green-100 text-green-700" : 
                    product.status === "Open Source" ? "bg-blue-100 text-blue-700" :
                    "bg-blue-50 text-blue-600"
                  }`}>
                    {product.status === "Open Source" ? <Code2 className="h-3 w-3 mr-1"/> : <CheckCircle className="h-3 w-3 mr-1" />}
                    <span>{product.status}</span>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full relative z-0">
                  <div className="mb-4">
                    {/* Icon container - Adjusted for light mode */}
                    <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors border border-blue-100">
                      <Sparkles className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    {/* Title color changed to Slate-800 */}
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-slate-800 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
                      {product.category}
                    </p>
                    <p className="text-slate-500 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags - Updated for light mode */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.technologies && product.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600">
                            {tech}
                        </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full group-hover:scale-[1.02] transition-transform duration-300 mt-auto bg-blue-600 text-white hover:bg-blue-700"
                    asChild
                  >
                    <Link to={`/products/${product.id}`}>
                        Explore Product <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots - Updated to Slate/Blue */}
          <div className="flex justify-center mt-8 space-x-2 flex-wrap gap-y-2">
            {products.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400 w-1.5"
                }`}
                onClick={() => {
                   setActiveIndex(idx);
                   if (scrollRef.current) {
                     const card = scrollRef.current.firstElementChild as HTMLElement;
                     if (card) {
                        const cardWidth = card.offsetWidth + 16;
                        scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                     }
                   }
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;