import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rbgcggdtlrtbvowuupjb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiZ2NnZ2R0bHJ0YnZvd3V1cGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNzY0MDgsImV4cCI6MjA2OTk1MjQwOH0.ys7Kca1rVjqhVf4Z1abI_FJ60zdDedSbH5A91bAe0GY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 