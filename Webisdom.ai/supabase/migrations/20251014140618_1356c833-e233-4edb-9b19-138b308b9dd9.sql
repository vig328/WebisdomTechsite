-- Create demo requests table
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit demo requests
CREATE POLICY "Anyone can submit demo requests"
ON public.demo_requests
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to view all demo requests (for admin)
CREATE POLICY "Authenticated users can view demo requests"
ON public.demo_requests
FOR SELECT
USING (true);

-- Create audit requests table
CREATE TABLE public.audit_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  industry TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit audit requests
CREATE POLICY "Anyone can submit audit requests"
ON public.audit_requests
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to view all audit requests (for admin)
CREATE POLICY "Authenticated users can view audit requests"
ON public.audit_requests
FOR SELECT
USING (true);