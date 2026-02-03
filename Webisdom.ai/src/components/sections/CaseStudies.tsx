import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Star,
  Building2,
  MapPin,
  ArrowRight,
  Target,
  Zap,
  Calendar,
  BarChart3,
  Lock, // Added Lock icon for privacy badge
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "ilora-retreats-1",
      client: "Premier Luxury Safari Resort", // Name Hidden
      category: "Hospitality",
      location: "Masai Mara, Kenya",
      title: "AI Chieftain Implementation",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      challenge:
        "The resort needed an intelligent system to manage guest experiences and coordinate safari activities while maintaining a personalized touch.",
      solution:
        "AI Chieftain integrated guest preferences with wildlife patterns and staff availability to create seamless experiences.",
      results: [
        { metric: "95%", label: "Guest Satisfaction", sub: "Increase in positive reviews" },
        { metric: "40%", label: "Operational Efficiency", sub: "Reduction in manual coordination" },
        { metric: "28%", label: "Revenue Growth", sub: "Increase in repeat bookings" },
        { metric: "35%", label: "Staff Productivity", sub: "Improvement in task completion" },
      ],
      techStack: ["Personalized Safari Scheduling", "Real-time Wildlife Tracking", "Guest Preference Mgmt"],
      testimonial: {
        quote: "This AI transformed how we manage our luxury retreat. It feels like magic to our guests.",
        author: "Operations Manager",
        role: "Luxury Resort",
      },
      timeline: "3 months implementation",
      roi: "Recovered in 6 months",
    },
    {
      id: "ilora-retreats-2",
      client: "High-End Hospitality Group", // Name Hidden
      category: "Hospitality",
      location: "Masai Mara, Kenya",
      title: "AI Property Mgmt System",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      challenge:
        "Managing remote luxury tents and inventory required a sophisticated yet offline-capable system.",
      solution:
        "Tailored AI PMS for comprehensive management of accommodations, inventory, and maintenance with offline capabilities.",
      results: [
        { metric: "45%", label: "Maintenance Speed", sub: "Faster issue resolution" },
        { metric: "99%", label: "Inventory Accuracy", sub: "Stock tracking precision" },
        { metric: "50%", label: "Housekeeping", sub: "Improved scheduling" },
        { metric: "92%", label: "Guest Experience", sub: "Satisfaction rating" },
      ],
      techStack: ["Tent Management", "Predictive Maintenance", "Offline Capability"],
      testimonial: {
        quote: "From tent maintenance to inventory, everything is at our fingertips now.",
        author: "General Manager",
        role: "Hospitality Group",
      },
      timeline: "2 months implementation",
      roi: "Recovered in 5 months",
    },
    {
      id: "edtech-pro",
      client: "Global EdTech Platform", // Name Hidden
      category: "Education",
      location: "San Francisco, USA",
      title: "Interactive AI Avatar",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      challenge:
        "Low student engagement and high drop-off rates in self-paced courses.",
      solution:
        "Deployed a 3D AI Tutor for real-time doubts and personalized teaching.",
      results: [
        { metric: "75%", label: "Completion Rate", sub: "Up from 30%" },
        { metric: "3x", label: "Engagement", sub: "Increase in session time" },
        { metric: "-60%", label: "Support Cost", sub: "Fewer tickets" },
        { metric: "4.9/5", label: "Rating", sub: "Student feedback" },
      ],
      techStack: ["Real-time Lip Sync", "Emotion Recognition", "24/7 Tutoring"],
      testimonial: {
        quote: "The AI Avatar is the face of our brand now. Completion rates skyrocketed.",
        author: "CLO",
        role: "EdTech Platform",
      },
      timeline: "3 months",
      roi: "200% ROI in 4 months",
    },
    {
      id: "bistro-360",
      client: "International Restaurant Chain", // Name Hidden
      category: "F&B Franchise",
      location: "Mumbai & Dubai",
      title: "VoiceAI Order Manager",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      challenge:
        "Missed calls during peak hours and errors in drive-thru orders.",
      solution:
        "Voice AI Agent handling 100% calls/drive-thru with smart upselling.",
      results: [
        { metric: "0%", label: "Missed Calls", sub: "Down from 25%" },
        { metric: "+18%", label: "Order Value", sub: "Via AI Upselling" },
        { metric: "99.9%", label: "Accuracy", sub: "Zero errors" },
        { metric: "Low", label: "Staff Stress", sub: "Better focus" },
      ],
      techStack: ["Noise Cancellation", "Menu Knowledge Graph", "Auto-POS Entry"],
      testimonial: {
        quote: "It's like our best employee who never gets tired.",
        author: "Franchise Owner",
        role: "Restaurant Chain",
      },
      timeline: "6 weeks",
      roi: "Instant ROI",
    },
    {
      id: "lexcorp",
      client: "Top-Tier Corporate Law Firm", // Name Hidden
      category: "Legal",
      location: "London, UK",
      title: "Enterprise Knowledge Brain",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
      challenge: "Lawyers wasting 40% time searching old case files.",
      solution:
        "Secure RAG system for instant citation-backed answers from internal data.",
      results: [
        { metric: "-90%", label: "Search Time", sub: "Hours to seconds" },
        { metric: "+15%", label: "Billable Hours", sub: "More client work" },
        { metric: "100%", label: "Accuracy", sub: "Exact citations" },
        { metric: "Tier-1", label: "Privacy", sub: "On-premise" },
      ],
      techStack: ["Semantic Search", "Document Summarization", "Role-Based Access"],
      testimonial: {
        quote: "What took days now takes minutes. A competitive advantage.",
        author: "Partner",
        role: "Law Firm",
      },
      timeline: "4 months",
      roi: "Saved $500k/year",
    },
    {
      id: "prestige-estates",
      client: "Major Real Estate Developer", // Name Hidden
      category: "Real Estate",
      location: "New York, USA",
      title: "RealtyBot 2.0",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      challenge:
        "Agents were missing 40% of leads due to after-hours calls. Scheduling property viewings was chaotic.",
      solution:
        "An Omnichannel AI Agent that engages leads 24/7 on WhatsApp & Web, qualifies buyers, and schedules visits.",
      results: [
        { metric: "+300%", label: "Lead Conversion", sub: "More qualified visits" },
        { metric: "< 2s", label: "Response Time", sub: "Instant 24/7 replies" },
        { metric: "+$12M", label: "Sales Revenue", sub: "In first quarter" },
        { metric: "-80%", label: "Admin Work", sub: "Auto-scheduling" },
      ],
      techStack: ["Lead Qualification", "Calendar Sync", "CRM Auto-Update"],
      testimonial: {
        quote: "We used to lose leads while sleeping. Now, the bot sells for us while we dream.",
        author: "Sales Director",
        role: "Real Estate Group",
      },
      timeline: "1 month setup",
      roi: "10x ROI in Month 2",
    },
    {
      id: "swiftcargo",
      client: "European Logistics Giant", // Name Hidden
      category: "Logistics",
      location: "Berlin, Germany",
      title: "RouteMaster AI",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      challenge:
        "Rising fuel costs and inefficient route planning were eating into profits.",
      solution:
        "AI-driven Fleet Management system optimizing routes in real-time based on traffic and load.",
      results: [
        { metric: "-22%", label: "Fuel Costs", sub: "Direct cash saving" },
        { metric: "+35%", label: "Delivery Speed", sub: "Faster turnaround" },
        { metric: "-15%", label: "Maintenance", sub: "Prevented breakdowns" },
        { metric: "98%", label: "Driver Safety", sub: "Improved score" },
      ],
      techStack: ["Dynamic Route Optimization", "Predictive Maintenance", "Real-time Tracking"],
      testimonial: {
        quote: "The fuel savings alone paid for the system in 3 weeks.",
        author: "Fleet Manager",
        role: "Logistics Firm",
      },
      timeline: "2 months pilot",
      roi: "Saved €2M annually",
    },
    {
      id: "city-dental",
      client: "Multi-Specialty Healthcare Chain", // Name Hidden
      category: "Healthcare",
      location: "Toronto, Canada",
      title: "MediCare Connect",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      challenge:
        "High rate of 'No-Shows' (patients missing appointments) causing revenue loss.",
      solution:
        "Patient Engagement AI that handles appointments, reminders, and waitlist auto-fill.",
      results: [
        { metric: "-65%", label: "No-Show Rate", sub: "Drastic reduction" },
        { metric: "+20%", label: "Revenue", sub: "Fuller schedules" },
        { metric: "25 hrs", label: "Staff Time", sub: "Saved per week" },
        { metric: "5/5", label: "Patient Exp", sub: "Google Review Avg" },
      ],
      techStack: ["Smart Reminders", "Waitlist Auto-Fill", "EMR Integration"],
      testimonial: {
        quote: "Our waiting room is always full now, but our phone lines are quiet.",
        author: "Medical Director",
        role: "Healthcare Group",
      },
      timeline: "1 month implementation",
      roi: "Recovered in 3 weeks",
    },
    {
      id: "techflow",
      client: "Global IT Services Firm", // Name Hidden
      category: "HR & Recruitment",
      location: "Bangalore, India",
      title: "TalentScout AI",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      challenge: "HR team was drowning in 5000+ resumes for 50 roles.",
      solution:
        "AI Resume Screener & Interviewer that ranks candidates and conducts first-round voice interviews.",
      results: [
        { metric: "3 Days", label: "Time-to-Hire", sub: "Down from 45 days" },
        { metric: "-85%", label: "Screening Cost", sub: "Manual effort gone" },
        { metric: "+40%", label: "Quality", sub: "Better retention" },
        { metric: "0%", label: "Bias", sub: "Blind screening" },
      ],
      techStack: ["Resume Parsing", "Voice AI Interviews", "Bias Elimination"],
      testimonial: {
        quote: "We hired a full team of developers in a week. The AI found hidden gems.",
        author: "HR Head",
        role: "IT Services",
      },
      timeline: "3 weeks setup",
      roi: "Saved 2000+ man-hours",
    },
    {
      id: "glow-beauty",
      client: "Fast-Growing D2C Brand", // Name Hidden
      category: "Retail / E-commerce",
      location: "Seoul, South Korea",
      title: "AdGenius Studio",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348",
      challenge: "Creating fresh social media content daily was expensive and slow.",
      solution:
        "Generative AI Creative Suite that generates product photos and ad copy instantly.",
      results: [
        { metric: "50x", label: "Content Output", sub: "Assets per week" },
        { metric: "4.5x", label: "ROAS", sub: "Return on Ad Spend" },
        { metric: "+60%", label: "Click Rate", sub: "Higher engagement" },
        { metric: "-70%", label: "Production Cost", sub: "No studio needed" },
      ],
      techStack: ["AI Product Photography", "Video Generation", "Trend Analysis"],
      testimonial: {
        quote: "We generated a viral campaign in 10 minutes.",
        author: "CMO",
        role: "Cosmetics Brand",
      },
      timeline: "2 weeks",
      roi: "Immediate",
    },
    {
      id: "sureshield",
      client: "National Auto Insurance Provider", // Name Hidden
      category: "Insurance",
      location: "Chicago, USA",
      title: "ClaimFast Vision",
      image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be",
      challenge: "Claim settlements took 2-3 weeks due to manual inspections.",
      solution:
        "Computer Vision API where users upload damage photos for instant assessment and payout.",
      results: [
        { metric: "3 Mins", label: "Settlement Time", sub: "Down from 15 days" },
        { metric: "99.5%", label: "Fraud Detection", sub: "Caught fake images" },
        { metric: "-90%", label: "Admin Cost", sub: "Automated processing" },
        { metric: "+40", label: "NPS Score", sub: "Customer happiness" },
      ],
      techStack: ["Damage Recognition", "Fraud Pattern Match", "Instant Payout"],
      testimonial: {
        quote: "Customers get paid in minutes while standing next to their damaged car.",
        author: "VP Claims",
        role: "Insurance Group",
      },
      timeline: "5 months",
      roi: "Saved $8M in ops/fraud",
    },
  ];

  return (
    <section className="py-10 bg-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our AI agents are delivering measurable impact across industries.
          </p>
        </div>

        {/* Grid Layout (Chota View - Like Products) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Dialog key={study.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-muted/60 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                      {study.category}
                    </Badge>
                  </div>

                  {/* Card Content (Short Info) */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    {/* Privacy Note Badge */}
                    <div className="mb-3">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-[10px] font-semibold border border-yellow-200">
                            <Lock className="w-3 h-3" />
                            <span>Client Name Hidden for Privacy</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {study.location}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.client}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mb-4">
                      {study.challenge}
                    </CardDescription>
                    
                    <div className="mt-auto pt-4 border-t border-dashed flex justify-between items-center text-sm">
                      <span className="font-medium text-primary flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> Impact
                      </span>
                      <span className="text-muted-foreground">Click to read details</span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Expanded View (Modal - Bada Details) */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                            {study.category}
                          </Badge>
                          {/* Privacy Note in Modal */}
                          <div className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200">
                             <Lock className="w-3 h-3" /> Client Name Hidden for Privacy
                          </div>
                      </div>
                      <DialogTitle className="text-3xl font-bold">{study.title}</DialogTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Building2 className="w-4 h-4" /> {study.client}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4" /> {study.location}
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  {/* Left Column: Challenge & Solution */}
                  <div className="space-y-6">
                    <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                      <h3 className="font-bold text-red-600 flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5" /> The Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5" /> Our Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Results & Testimonial */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" /> Measurable Impact
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((res, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg shadow-sm border text-center">
                            <div className="text-2xl font-black text-primary">{res.metric}</div>
                            <div className="text-xs font-bold text-gray-800 mt-1">{res.label}</div>
                            <div className="text-[10px] text-gray-500 leading-tight mt-1">{res.sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="italic text-gray-700 mb-4">"{study.testimonial.quote}"</blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {study.testimonial.author[0]}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{study.testimonial.author}</div>
                          <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Timeline: {study.timeline}</span>
                      <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-green-600" /> ROI: {study.roi}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;