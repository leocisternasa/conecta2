import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://hamcyftgdcdsrjnvoqyj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhbWN5ZnRnZGNkc3JqbnZvcXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMTczMTYsImV4cCI6MjA0ODU5MzMxNn0.YKuTAs7fzxEWAoOATukMjBUgfsZo3Fp8z1WE5oingOo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
