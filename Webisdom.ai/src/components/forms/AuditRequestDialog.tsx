import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AuditRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuditRequestDialog = ({ open, onOpenChange }: AuditRequestDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("audit_requests").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          industry: formData.industry || null,
          message: formData.message || null,
        },
      ]);

      if (error) throw error;

      toast({
        title: "AI Audit Request Submitted!",
        description: "We'll contact you soon to begin your comprehensive AI audit.",
      });

      setFormData({ name: "", email: "", company: "", phone: "", industry: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting audit request:", error);
      toast({
        title: "Error",
        description: "Failed to submit audit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <DialogTitle className="text-2xl font-bold text-gradient">Request an AI Audit</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Get a comprehensive AI audit for your business. We'll analyze your operations and provide actionable recommendations.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="audit-name" className="text-sm font-semibold">Name *</Label>
              <Input
                id="audit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="John Doe"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="audit-email" className="text-sm font-semibold">Email *</Label>
              <Input
                id="audit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="john@company.com"
                className="h-11"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="audit-company" className="text-sm font-semibold">Company</Label>
              <Input
                id="audit-company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="audit-phone" className="text-sm font-semibold">Phone</Label>
              <Input
                id="audit-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="h-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="audit-industry" className="text-sm font-semibold">Industry</Label>
            <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
              <SelectTrigger id="audit-industry" className="h-11">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="fintech">Fintech</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="audit-message" className="text-sm font-semibold">Message</Label>
            <Textarea
              id="audit-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Tell us about your business and what areas you'd like us to audit..."
              className="resize-none"
            />
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Audit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
