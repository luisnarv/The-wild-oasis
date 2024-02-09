import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gsfqwsxilmcsedpbbaxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzZnF3c3hpbG1jc2VkcGJiYXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxODc3ODksImV4cCI6MjAyMTc2Mzc4OX0.bhJVMV85dsFb4Yga1mmpMQk-86kDpvadTDuN8P6G0bE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
