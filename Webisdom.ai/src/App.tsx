import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Page Imports
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"; 
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ZigZagIndustries from "./pages/ZigZagIndustries";
import BlogDetail from "./pages/BlogDetailsPage";
import IndustryDetail from "./pages/IndustryDetail";
import FloatingChatbot from "./pages/FloatingChatBox";
import FloatingContactBtn from "./components/FloatingContactBtn";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          {/* Main Industry Detail Route */}
          <Route path="/industry/:id" element={<IndustryDetail />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FloatingContactBtn /> 
        <FloatingChatbot /> 
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;