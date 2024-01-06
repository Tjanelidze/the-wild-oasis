import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvvqvpursscboynpqthq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dnF2cHVyc3NjYm95bnBxdGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NDE1MDYsImV4cCI6MjAyMDExNzUwNn0.1FQFltrGwNny9mcl0BqRSfrhFWEtfzz2T-9qZWJMYZ0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
