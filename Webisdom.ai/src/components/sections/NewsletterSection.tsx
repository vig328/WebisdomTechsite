"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll be the first to know about our upcoming launches.",
      });
      setEmail("");
    }
  };

  // Updated classes for a professional "Dull White" UI
  const cardClasses = "bg-white border border-slate-200 shadow-xl shadow-blue-900/5 rounded-[2.5rem]";

  if (isSubscribed) {
    return (
      <section className="py-24 bg-transparent relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className={`max-w-2xl mx-auto text-center ${cardClasses}`}>
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">You're All Set!</h3>
              <p className="text-slate-500">
                Thank you for subscribing. You'll receive updates on our upcoming Fintech and Healthcare AI solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className={`max-w-3xl mx-auto ${cardClasses}`}>
          <CardContent className="p-8 md:p-12 text-center">
            {/* Icon: Using the core Blue Gradient */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-slate-900">
              Stay Updated on Our Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">AI Solutions</span>
            </h3>
            
            <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
              Be the first to know when our Fintech and Healthcare AI products launch. Join our exclusive waitlist for early access.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-200 h-12 rounded-xl"
              />
              <Button type="submit" className="h-12 whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-bold transition-all">
                Join Waitlist
              </Button>
            </form>

            {/* Benefit Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                "Fintech AI Solutions",
                "Healthcare AI Platform",
                "Exclusive Updates"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;