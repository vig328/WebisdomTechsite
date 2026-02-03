-- Update form_submissions submission_type constraint to allow contact, demo, and audit
ALTER TABLE public.form_submissions 
DROP CONSTRAINT IF EXISTS form_submissions_submission_type_check;

ALTER TABLE public.form_submissions 
ADD CONSTRAINT form_submissions_submission_type_check 
CHECK (submission_type = ANY (ARRAY['workshop'::text, 'incubation'::text, 'contact'::text, 'demo'::text, 'audit'::text]));