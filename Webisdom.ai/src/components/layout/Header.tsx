import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";

// --- MEGA MENU DATA ---
const navigationData = {
  // 1. PRODUCTS
  products: [
    {
      category: "Hospitality & Services",
      items: [
        { name: "AI Chieftain", href: "/products/ai-chieftain" },
        { name: "AI PMS", href: "/products/ai-pms" },
        { name: "Restaurant AI Agent", href: "/products/restaurant-agent" },
        { name: "Coworking Agent", href: "/products/coworking-agent" },
        { name: "VoiceXperience", href: "/products/voice-xperience" },
      ]
    },
    {
      category: "Finance & Enterprise",
      items: [
        { name: "Loan Processing AI", href: "/products/loan-agent" },
        { name: "Compliance AI Agent", href: "/products/compliance-agent" },
        { name: "QuantTrader X", href: "/products/quant-trader-bot" },
        { name: "FraudSentinel Graph", href: "/products/fraud-sentinel" },
        { name: "TalentFlow Bot (HR)", href: "/products/talentflow-bot" },
      ]
    },
    {
      category: "Deep Tech & Tools",
      items: [
        { name: "DevAutoGPT", href: "/products/dev-auto-gpt" },
        { name: "Enterprise DocBrain", href: "/products/doc-brain-rag" },
        { name: "VisionGuard Edge", href: "/products/vision-guard-edge" },
        { name: "Factory Digital Twin", href: "/products/factory-iot-twin" },
        { name: "VoiceClone Studio", href: "/products/voice-clone-studio" },
      ]
    }
  ],

  // 2. SERVICES
  services: [
    {
      category: "Core Offerings",
      items: [
        { name: "AI Solutions", href: "/services?section=ai-solutions" },
        { name: "AI Lab Solutions", href: "/services?section=ai-lab-solutions" },
      ]
    },
    {
      category: "Assessment & Strategy",
      items: [
        { name: "AI Audit", href: "/services?section=ai-audit" },
      ]
    },
    {
      category: "Insights & Impact",
      items: [
        { name: "Blogs", href: "/services?section=blog" },
        { name: "Case Studies", href: "/services?section=case-studies" },
      ]
    }
  ],

  // 3. INDUSTRIES - UPDATED TO POINT TO /industry/:id
  industries: [
    {
      category: "Service & Lifestyle",
      items: [
        { name: "Hospitality", href: "/industry/hospitality" },
        { name: "Healthcare", href: "/industry/healthcare" },
        { name: "Education (EdTech)", href: "/industry/education" },
        { name: "Coworking Spaces", href: "/industry/coworking" },
      ]
    },
    {
      category: "Finance & Professional",
      items: [
        { name: "Fintech & Banking", href: "/industry/fintech" },
        { name: "Revenue Management", href: "/industry/revenue" },
        { name: "Real Estate", href: "/industry/real-estate" },
        { name: "LegalTech", href: "/industry/legal" },
      ]
    },
    {
      category: "Industrial & Tech",
      items: [
        { name: "Manufacturing 4.0", href: "/industry/manufacturing" },
        { name: "Retail & E-commerce", href: "/industry/retail" },
        { name: "Logistics", href: "/industry/logistics" },
        { name: "AgriTech", href: "/industry/agtech" },
        { name: "Technology & SaaS", href: "/industry/tech" },
      ]
    }
  ]
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleMouseEnter = (menuName) => setActiveMenu(menuName);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/lovable-uploads/261cb841-1550-43b8-927d-f30d8e8fb3c7.png"
              alt="Webisdom AI Solutions"
              className="h-14 w-auto"
              style={{ filter: "invert(1)" }}
            />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex items-center space-x-8 h-full" onMouseLeave={handleMouseLeave}>
            
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* 1. PRODUCTS */}
            <div className="relative h-full flex items-center" onMouseEnter={() => handleMouseEnter('products')}>
              <Link
                to="/products"
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  isActive("/products") || activeMenu === 'products' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* 2. SERVICES */}
            <div className="relative h-full flex items-center" onMouseEnter={() => handleMouseEnter('services')}>
              <Link
                to="/services"
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  isActive("/services") || activeMenu === 'services' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* 3. INDUSTRIES */}
            <div className="relative h-full flex items-center" onMouseEnter={() => handleMouseEnter('industries')}>
              <Link
                to="/industries"
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  isActive("/industries") || activeMenu === 'industries' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Industries <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            <Link to="/about" className={`text-sm font-medium transition-colors duration-200 ${isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              About
            </Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors duration-200 ${isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              Contact
            </Link>

          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setIsDemoDialogOpen(true)}>
              Book a Demo
            </Button>
            <Button onClick={() => setIsAuditDialogOpen(true)}>Request Audit</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MEGA MENU PANEL --- */}
      {activeMenu && (
        <div 
          className="hidden md:block absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-t border-b border-border shadow-2xl py-10 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-12">
              {navigationData[activeMenu].map((group, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border pb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link 
                          to={item.href}
                          className="group flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 text-primary" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-border flex justify-end">
                <Link 
                  to={`/${activeMenu}`} 
                  className="text-sm font-bold text-primary hover:underline flex items-center"
                  onClick={() => setActiveMenu(null)}
                >
                    View All {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
            </div>
          </div>
        </div>
      )}

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-40 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-4 py-6 space-y-4">
            
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-foreground py-2 border-b border-border/50">Home</Link>
            
            {['products', 'services', 'industries'].map((menuKey) => (
               <div key={menuKey} className="py-2 border-b border-border/50">
                  <Link 
                    to={`/${menuKey}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-muted-foreground mb-3 font-semibold uppercase hover:text-primary transition-colors flex items-center"
                  >
                    {menuKey} <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                  {navigationData[menuKey].map(g => (
                      <div key={g.category} className="mb-4 mt-3">
                          <p className="text-xs text-primary mb-2 font-bold pl-2">{g.category}</p>
                          {g.items.map(i => (
                              <Link key={i.name} to={i.href} onClick={() => setIsMenuOpen(false)} className="block py-2 pl-4 text-sm text-foreground/80 hover:text-primary transition-colors">{i.name}</Link>
                          ))}
                      </div>
                  ))}
               </div>
            ))}

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-foreground py-2 border-b border-border/50">About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-foreground py-2 border-b border-border/50">Contact</Link>

            <div className="pt-6 space-y-3">
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setIsDemoDialogOpen(true); setIsMenuOpen(false); }}>
                Book a Demo
              </Button>
              <Button className="w-full" onClick={() => { setIsAuditDialogOpen(true); setIsMenuOpen(false); }}>
                Request Audit
              </Button>
            </div>
          </nav>
        </div>
      )}

      <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
    </header>
  );
};

export default Header;