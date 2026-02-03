-- Enable RLS on ocr_results table
ALTER TABLE public.ocr_results ENABLE ROW LEVEL SECURITY;

-- Create policies for ocr_results (authenticated users only for now)
CREATE POLICY "Authenticated users can view ocr results"
ON public.ocr_results
FOR SELECT
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert ocr results"
ON public.ocr_results
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);