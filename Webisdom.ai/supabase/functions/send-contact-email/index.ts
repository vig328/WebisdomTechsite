import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    console.log("Form data received:", requestData);

    const serviceLabels = {
      demo: "Demo Request",
      audit: "AI Audit Request", 
      "hotel-ai": "Hotel AI Chieftain",
      consultation: "General Consultation",
      partnership: "Partnership Opportunities"
    };

    const serviceLabel = serviceLabels[requestData.service as keyof typeof serviceLabels] || requestData.service;

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #374151; font-size: 18px; margin-bottom: 15px;">Contact Details:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 130px;">Name:</td>
                <td style="padding: 8px 0; color: #374151;">${requestData.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #374151;">${requestData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Company:</td>
                <td style="padding: 8px 0; color: #374151;">${requestData.company || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Interest:</td>
                <td style="padding: 8px 0; color: #374151;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Submitted:</td>
                <td style="padding: 8px 0; color: #374151;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #374151; font-size: 18px; margin-bottom: 15px;">Message:</h2>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #1e40af;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${requestData.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was automatically generated from the Webisdom Services contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send emails to both recipients
    const recipients = ["atharva@webisdomservices.in", "contact@webisdom.com"];
    
    for (const recipient of recipients) {
      console.log(`Sending email to: ${recipient}`);
      
      const emailResponse = await resend.emails.send({
        from: "Webisdom Contact Form <onboarding@resend.dev>",
        to: [recipient],
        subject: `New ${serviceLabel} - ${requestData.name}`,
        html: emailHtml,
        replyTo: requestData.email
      });

      console.log(`Email sent to ${recipient}:`, emailResponse);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully to both recipients" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);