"use client";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    /* Lighter, translucent slate background with a high blur for a modern look */
    <footer className="w-full bg-slate-800/40 text-white border-t border-white/10 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/261cb841-1550-43b8-927d-f30d8e8fb3c7.png"
                alt="Webisdom AI Solutions"
                className="h-20 sm:h-20 w-56 brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building domain-specific AI solutions that deliver measurable
              impact across Hospitality, Fintech, and Healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom LinkedIn"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom Twitter"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Webisdom"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Products", "Services", "Industries", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Featured Solutions</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "AI Chieftain", path: "/products/ai-chieftain" },
                { name: "AI PMS", path: "/products/ai-pms" },
                { name: "Restaurant AI Agent", path: "/products/restaurant-agent" },
                { name: "AI Audit Service", path: "/services?section=ai-audit" },
                { name: "Loan Processing AI", path: "/products/loan-agent" },
                { name: "Voice-Xperience", path: "/products/voice-xperience" }
              ].map((solution) => (
                <li key={solution.name}>
                  <Link to={solution.path} className="text-white/60 hover:text-primary transition-colors">
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve & Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Industries We Serve</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { name: "Hospitality", section: "hospitality" },
                { name: "Fintech & Banking", section: "fintech" },
                { name: "Healthcare", section: "healthcare" },
                { name: "Revenue Management", section: "revenue" },
                { name: "Coworking Spaces", section: "coworking" },
                { name: "Manufacturing 4.0", section: "manufacturing" },
              ].map((ind) => (
                <li key={ind.section}>
                  <Link
                    to={`/industries?section=${ind.section}`}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4 mt-6 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:contact@webisdom.ai" className="text-white/60 hover:text-primary transition-colors">
                    contact@webisdom.ai
                  </a>
                  <a href="mailto:atharv.kumar@webisdom.ai" className="text-white/60 hover:text-primary transition-colors">
                    atharv.kumar@webisdom.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+919569394675" className="text-white/60 hover:text-primary transition-colors">
                  +91 9569394675
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-white/60">
                  First Floor, 8/78, Dentedge, Janpath, Connaught Place, New Delhi, 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Webisdom AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
