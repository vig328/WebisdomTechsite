"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

// Import your particle background component
import ParticlesBackground from "@/components/visuals/ParticlesBackground"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "demo",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      try {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0];
        const confirmationId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

        const { error: insertError } = await supabase
          .from('form_submissions')
          .insert([
            {
              submission_type: 'contact',
              confirmation_id: confirmationId,
              name: formData.name,
              email: formData.email,
              message: `Service: ${formData.service}\nMessage: ${formData.message}\nDate: ${dateStr} ${timeStr}`,
            }
          ]);

        if (insertError) throw new Error("Could not save to database.");

        try {
          await fetch("https://email-backend-snowy-five.vercel.app/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              type: formData.service,
              phone: "Not provided"
            }),
          });
        } catch (emailErr) {
          console.error("Email sync failed", emailErr);
        }

        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", service: "demo", message: "" });
        toast({ title: "Message sent successfully!" });

      } catch (error: any) {
        toast({ title: "Submission Error", variant: "destructive" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 selection:bg-blue-200 relative overflow-x-hidden">
      
      <Header />
      
      <main className="relative">
        {/* HERO SECTION - Dark Header like About page */}
        <section className="relative pt-48 pb-40 text-center overflow-hidden min-h-[60vh] flex items-center bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 opacity-40 bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2000&auto=format&fit=crop')`, 
                filter: 'brightness(0.5)'
              }}
            />
            <div className="absolute inset-0 pointer-events-none">
              <ParticlesBackground />
            </div>
            {/* Smooth transition to light background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#f1f5f9] pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 uppercase tracking-widest py-1.5 px-6 bg-blue-500/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" /> Connect with us
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-2xl">
                Get in <span className="text-blue-500">Touch</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION - Now in White/Light Gray Container */}
        <section className="py-24 relative z-10 -mt-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Main Contact Form Card */}
            <Card className="lg:col-span-2 bg-white border-slate-200 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-100 p-8">
                <CardTitle className="text-3xl font-bold text-slate-900">
                  {isSubmitted ? "Success!" : "Send us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">Message Received</h3>
                    <p className="text-slate-600 mb-8">Our AI consultants will review your request and reach out within 24 hours.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} required className="bg-slate-50 border-slate-200 focus:bg-white transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-slate-50 border-slate-200 focus:bg-white transition-all" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Company</label>
                      <Input name="company" value={formData.company} onChange={handleInputChange} className="bg-slate-50 border-slate-200 focus:bg-white transition-all" placeholder="Company Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Inquiry Type</label>
                      <select name="service" value={formData.service} onChange={handleInputChange} className="w-full h-10 px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none">
                        <option value="demo">Book a Demo</option>
                        <option value="audit">Request AI Audit</option>
                        <option value="hotel-ai">Hotel AI Chieftain</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Message</label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="bg-slate-50 border-slate-200 focus:bg-white transition-all min-h-[150px]" placeholder="How can we help your business grow?" />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl transition-all shadow-lg hover:shadow-blue-200" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Send Discovery Request"} <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Sidebar Info Cards */}
            <div className="space-y-6">
              <Card className="bg-white border-slate-200 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-slate-900 border-l-4 border-blue-600 pl-4">Contact Details</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", val: "contact@webisdom.ai" },
                      { icon: Phone, label: "Phone", val: "+91 9569394675" },
                      { icon: MapPin, label: "Global HQ", val: "Connaught Place, New Delhi" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</h4>
                          <p className="text-slate-900 font-medium">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 border-none shadow-xl rounded-3xl text-white relative overflow-hidden group">
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-xl font-bold mb-2">Priority Support</h3>
                  <p className="text-blue-100 mb-6 text-sm">Skip the form and email our leadership team directly for urgent partnership inquiries.</p>
                  <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-blue-50" asChild>
                    <a href="mailto:contact@webisdom.ai">Direct Email</a>
                  </Button>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 text-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Send size={120} />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#020617] text-white border-t border-slate-800">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;